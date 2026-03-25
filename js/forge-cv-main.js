// ============================================================
// CONFIGURATION
// ============================================================
const MODEL = "llama-3.1-8b-instant"; // Modèle de Production actif et gratuit
   
// ============================================================
// STATE
// ============================================================
// ============================================================
let conversationHistory = [];
// Initialisation avec les données ATS-optimisées de Mamadou DIALLO (depuis cv-data.js)
let cvData = { 
  prenom: '', nom: '', poste: '', email: '', telephone: '', ville: '',
  profil: '', experience: [], formation: [], competences: [], langues: [],
  certifications: [], centres_interet: [], portfolio: [], references: [],
  enriched: {
    profil_enrichi: '',
    experience_enrichie: [],
    competences_enrichies: []
  }
};
let collectedCount = 0;
let selectedTemplate = 'ats1'; // Nouveau template par défaut

// Mappage lazy des générateurs — utilise un Proxy pour lire window.cvGenerators au moment de l'appel
// Ce mécanisme évite le problème de race condition où les scripts externes ne sont pas encore chargés
const GENERATOR_KEYS = {
  royal:'genMandalaRoyal',
  t1:'genT1',t2:'genT2',t3:'genT3',t4:'genT4',t5:'genT5',t6:'genT6',
  t7:'genT7',t8:'genT8',t9:'genT9',t10:'genT10',t11:'genT11',t12:'genT12',
  p1:'genP1',p2:'genP2',p3:'genP3',p4:'genP4',p5:'genP5',p6:'genP6',
  p7:'genP7',p8:'genP8',p9:'genP9',p10:'genP10',p11:'genP11',p12:'genP12',
  ats1:'genATS1',ats2:'genATS2',ats3:'genATS3',ats4:'genATS4',
  a1:'genA1',a2:'genA2',a3:'genA3',a4:'genA4',
  m1:'genM1',m2:'genM2',m3:'genM3',m4:'genM4',m5:'genM5',m6:'genM6',
  s2:'genS2'
};
const generators = new Proxy({}, {
  get(_, key) {
    const fnName = GENERATOR_KEYS[key];
    return fnName && window.cvGenerators && window.cvGenerators[fnName]
      ? window.cvGenerators[fnName]
      : null;
  },
  has(_, key) { return !!GENERATOR_KEYS[key]; }
});


// ============================================================
// SYSTEM PROMPT
// ============================================================
const SYSTEM_PROMPT = `Tu es "Forge", l'assistant IA de TerangaForge. Ton rôle : collecter les informations de l'utilisateur pour un CV.
RÈGLES DE CONVERSATION (CRITIQUE) :
1. ✅ SOIS CONCIS : Ne répète JAMAIS tout le CV dans ton "message". 
2. ✅ CONFIRMATION : Confirme uniquement la dernière information reçue (ex: "C'est noté pour Dakar !") et pose aussitôt la question suivante.
3. ✅ MULTI-EXTRACTION : Si l'utilisateur donne plusieurs infos d'un coup (nom, email, ville...), extrais-les toutes dans le JSON et saute les questions correspondantes.
4. ✅ MODE CARTE BLANCHE : Si l'utilisateur demande d'inventer, de tester, ou de remplir le CV (ex: "carte blanche", "invente tout", "remplis pour moi"), génère immédiatement un profil COMPLET et FICTIF (nom, poste, expériences détaillées, formations, compétences) et mets "complete": true.

PHASES DE COLLECTE :
1. Identité (Nom, Email, Tel)
2. Localisation (Ville)
3. Poste cible + Secteur
4. Profil pro (3 lignes)
5. Expériences (Employeur, Poste, Dates, 3 Missions précises, 1 Résultat) - Relance si vague !
6. Formations (Diplôme, Côte, Année, Mention)
7. Compétences & Langues (avec niveaux)
8. Certifications & Loisirs (Optionnel)

FORMAT JSON OBLIGATOIRE :
{
  "message": "Ta réponse courte à l'utilisateur",
  "extracted": { ... données brutes ... },
  "enriched": { "profil_enrichi": "...", "experience_enrichie": [...], "competences_enrichies": [...] },
  "collected": nombre (1-14),
  "section_actuelle": "nom_section",
  "complete": false/true
}

Enrichissement (quand complete est true) : 
- Profil : 3-4 lignes percutantes.
- Missions : Utilise des verbes d'action (Géré, Optimisé, Déployé...).
- Compétences : Reformule en mots-clés ATS (ex: "Logiciel X" -> "Expertise Logiciel X · Automatisation").`;






let cvFontScale = 1.0;

function changeFontScale(delta) {
  cvFontScale = Math.round((cvFontScale + delta) * 100) / 100;
  if (cvFontScale < 0.5) cvFontScale = 0.5;
  if (cvFontScale > 1.5) cvFontScale = 1.5;
  
  const label = document.getElementById('font-scale-label');
  if (label) label.textContent = Math.round(cvFontScale * 100) + '%';
  
  generateCV();
}

function toggleEditPanel() {
  const panel = document.getElementById('edit-panel');
  const btn = document.getElementById('edit-toggle-btn');
  if (!panel) return;
  
  const isHidden = panel.classList.contains('hidden');
  if (isHidden) {
    populateEditPanel();
    panel.classList.remove('hidden');
    btn.innerHTML = `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg> Fermer l'édition`;
    btn.style.background = '#7C3AED';
    btn.style.color = 'white';
  } else {
    panel.classList.add('hidden');
    btn.innerHTML = `<svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg> Éditer le CV`;
    btn.style.background = 'white';
    btn.style.color = '#7C3AED';
  }
}

function populateEditPanel() {
  document.getElementById('edit-prenom').value = cvData.prenom || '';
  document.getElementById('edit-nom').value = cvData.nom || '';
  document.getElementById('edit-poste').value = cvData.poste || '';
  document.getElementById('edit-email').value = cvData.email || '';
  document.getElementById('edit-telephone').value = cvData.telephone || '';
  document.getElementById('edit-ville').value = cvData.ville || '';
  document.getElementById('edit-profil').value = cvData.profil || '';
  
  const expContainer = document.getElementById('edit-experiences');
  expContainer.innerHTML = '';
  
  if (cvData.experience && cvData.experience.length > 0) {
    cvData.experience.forEach((exp, idx) => {
      const div = document.createElement('div');
      div.className = 'p-3 rounded-lg border border-gray-100 bg-gray-50';
      div.innerHTML = `
        <p class="text-[10px] font-bold text-purple-600 mb-1 leading-tight">${exp.employeur || 'Expérience'} — ${exp.poste || ''}</p>
        <textarea id="edit-exp-${idx}" rows="3" class="w-full rounded-lg px-3 py-2 text-xs font-medium border border-gray-200 outline-none focus:border-purple-400 bg-white">${exp.missions || ''}</textarea>
      `;
      expContainer.appendChild(div);
    });
  } else {
    expContainer.innerHTML = '<p class="text-gray-400 text-xs text-center py-4 italic">Aucune expérience enregistrée pour le moment.</p>';
  }
}

function applyEdits() {
  cvData.prenom = document.getElementById('edit-prenom').value;
  cvData.nom = document.getElementById('edit-nom').value;
  cvData.poste = document.getElementById('edit-poste').value;
  cvData.email = document.getElementById('edit-email').value;
  cvData.telephone = document.getElementById('edit-telephone').value;
  cvData.ville = document.getElementById('edit-ville').value;
  cvData.profil = document.getElementById('edit-profil').value;
  
  if (cvData.experience && cvData.experience.length > 0) {
    cvData.experience.forEach((exp, idx) => {
      const val = document.getElementById(`edit-exp-${idx}`).value;
      cvData.experience[idx].missions = val;
    });
  }
  
  renderCVData();
  generateCV();
  
  // Petit effet visuel de succès sur le bouton
  const btn = event?.currentTarget;
  if (btn) {
    const origText = btn.innerHTML;
    btn.innerHTML = '✨ Appliqué !';
    setTimeout(() => { btn.innerHTML = origText; }, 2000);
  }
}

// ============================================================
// MODE SWITCHER
// ============================================================
function switchMode(mode) {
  const chatSec = document.getElementById('chat-section');
  const formSec = document.getElementById('form-section');
  const tabChat = document.getElementById('tab-chat');
  const tabForm = document.getElementById('tab-form');
  if (mode === 'chat') {
    chatSec.classList.remove('hidden');
    formSec.classList.add('hidden');
    tabChat.classList.add('tab-active');
    tabForm.classList.remove('tab-active');
    tabForm.style = 'background:#F5F3FF;color:#7C3AED;border:1.5px solid #DDD6FE;';
  } else {
    chatSec.classList.add('hidden');
    formSec.classList.remove('hidden');
    tabForm.classList.add('tab-active');
    tabChat.classList.remove('tab-active');
    tabChat.style = 'background:#F5F3FF;color:#7C3AED;border:1.5px solid #DDD6FE;';
    if (!document.querySelector('.df-exp-entry')) addDFExperience();
    if (!document.querySelector('.df-form-entry')) addDFFormation();
    if (!document.querySelector('.df-lang-entry')) addDFLangue();
  }
}

// ============================================================
// FORMULAIRE DIRECT — Entrées dynamiques
// ============================================================
function addDFExperience() {
  const div = document.createElement('div');
  div.className = 'df-exp-entry p-4 rounded-2xl relative';
  div.style = 'background:#F9F7FF;border:1.5px solid #EDE9FE;';
  div.innerHTML = `
    <button onclick="this.parentElement.remove()" type="button" style="position:absolute;top:10px;right:10px;color:#A78BFA;background:none;border:none;cursor:pointer;font-size:16px;" title="Supprimer">✕</button>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
      <input type="text" placeholder="Employeur / Entreprise *" class="df-input df-exp-employeur">
      <input type="text" placeholder="Intitulé du poste *" class="df-input df-exp-poste-val">
      <input type="text" placeholder="Période (ex: Jan 2020 – Déc 2022 ou Présent)" class="df-input df-exp-dates sm:col-span-2">
    </div>
    <textarea placeholder="Missions et réalisations (une par ligne) :
• Géré une équipe de 5 personnes
• Développé la stratégie commerciale" rows="4" class="df-input df-exp-missions w-full resize-y"></textarea>
  `;
  document.getElementById('df-exp-container').appendChild(div);
}

function addDFFormation() {
  const div = document.createElement('div');
  div.className = 'df-form-entry p-4 rounded-2xl relative';
  div.style = 'background:#F9F7FF;border:1.5px solid #EDE9FE;';
  div.innerHTML = `
    <button onclick="this.parentElement.remove()" type="button" style="position:absolute;top:10px;right:10px;color:#A78BFA;background:none;border:none;cursor:pointer;font-size:16px;" title="Supprimer">✕</button>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <input type="text" placeholder="Intitulé du diplôme *" class="df-input df-form-diplome sm:col-span-2">
      <input type="text" placeholder="École / Université *" class="df-input df-form-ecole">
      <input type="text" placeholder="Année d'obtention" class="df-input df-form-annee">
      <input type="text" placeholder="Mention (ex: Très Bien)" class="df-input df-form-mention">
    </div>
  `;
  document.getElementById('df-form-container').appendChild(div);
}

function addDFLangue() {
  const div = document.createElement('div');
  div.className = 'df-lang-entry flex gap-2 items-center';
  div.innerHTML = `
    <input type="text" placeholder="Langue (ex: Français)" class="df-input df-lang-name" style="flex:1;">
    <select class="df-input df-lang-niveau" style="max-width:180px;">
      <option>Langue maternelle</option>
      <option>Bilingue</option>
      <option>Avancé (C1/C2)</option>
      <option>Intermédiaire (B1/B2)</option>
      <option>Débutant (A1/A2)</option>
    </select>
    <button onclick="this.parentElement.remove()" type="button" style="color:#A78BFA;background:none;border:none;cursor:pointer;font-size:16px;flex-shrink:0;">✕</button>
  `;
  document.getElementById('df-lang-container').appendChild(div);
}

// ============================================================
// SOUMETTRE LE FORMULAIRE DIRECT
// ============================================================
function submitDirectForm() {
  const prenom = document.getElementById('df-prenom').value.trim();
  const nom    = document.getElementById('df-nom').value.trim();
  const poste  = document.getElementById('df-poste').value.trim();
  if (!prenom || !nom || !poste) {
    const toast = document.createElement('div');
    toast.style = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);background:#0F172A;color:white;padding:14px 28px;border-radius:50px;border-bottom:3px solid #EF4444;z-index:9999;font-family:Inter,sans-serif;font-size:14px;';
    toast.textContent = '⚠️ Veuillez remplir au minimum le Prénom, le Nom et le Poste.';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
    return;
  }

  cvData.prenom    = prenom;
  cvData.nom       = nom;
  cvData.poste     = poste;
  cvData.email     = document.getElementById('df-email').value.trim();
  cvData.telephone = document.getElementById('df-telephone').value.trim();
  cvData.ville     = document.getElementById('df-ville').value.trim();
  cvData.linkedin  = document.getElementById('df-linkedin').value.trim();
  cvData.profil    = document.getElementById('df-profil').value.trim();

  cvData.experience = [];
  document.querySelectorAll('.df-exp-entry').forEach(e => {
    const exp = {
      employeur: e.querySelector('.df-exp-employeur').value.trim(),
      poste:     e.querySelector('.df-exp-poste-val').value.trim(),
      dates:     e.querySelector('.df-exp-dates').value.trim(),
      missions:  e.querySelector('.df-exp-missions').value.split('\n')
                  .map(m => m.trim().replace(/^[•\-]\s*/, '')).filter(m => m)
    };
    if (exp.employeur || exp.poste) cvData.experience.push(exp);
  });

  cvData.formation = [];
  document.querySelectorAll('.df-form-entry').forEach(e => {
    const f = {
      diplome: e.querySelector('.df-form-diplome').value.trim(),
      ecole:   e.querySelector('.df-form-ecole').value.trim(),
      annee:   e.querySelector('.df-form-annee').value.trim(),
      mention: e.querySelector('.df-form-mention').value.trim()
    };
    if (f.diplome || f.ecole) cvData.formation.push(f);
  });

  cvData.competences = document.getElementById('df-competences').value
    .split('\n').map(c => c.trim().replace(/^[•\-]\s*/, '')).filter(c => c);

  cvData.langues = [];
  document.querySelectorAll('.df-lang-entry').forEach(e => {
    const lng = e.querySelector('.df-lang-name').value.trim();
    const niv = e.querySelector('.df-lang-niveau').value;
    if (lng) cvData.langues.push(`${lng} : ${niv}`);
  });

  cvData.certifications = document.getElementById('df-certifications').value
    .split('\n').map(c => c.trim()).filter(c => c)
    .map(c => { const p = c.split(/\s*[-–]\s*/); return { titre: p[0]||c, organisme: p[1]||'', annee: p[2]||'' }; });

  cvData.centres_interet = document.getElementById('df-centres').value
    .split(/[,\n]/).map(c => c.trim()).filter(c => c);

  // Enriched = same as raw (pas d'IA)
  cvData.enriched.profil_enrichi        = cvData.profil;
  cvData.enriched.experience_enrichie   = cvData.experience.map(exp => ({...exp}));
  cvData.enriched.competences_enrichies = cvData.competences;

  collectedCount = 14;
  renderCVData();
  showEditor();
  generateCV();

  setTimeout(() => {
    const ed = document.getElementById('cv-editor');
    if (ed) ed.scrollIntoView({ behavior:'smooth', block:'start' });
  }, 300);
}

// ============================================================
// INITIALISATION
// ============================================================
window.onload = async function() {
  const input = document.getElementById('user-input');
  if (input) {
    input.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') sendMessage();
    });
  }
  renderCVData(); // Render initial empty state
  await startConversation();
};

async function startConversation() {
  console.log("Démarrage de la conversation...");
  const response = await callGroq([{
    role: "user",
    content: "Bonjour, je veux créer mon CV."
  }]);
  
  if (response) {
    addMessage('ai', response.message);
    conversationHistory.push({role: "user", content: "Bonjour, je veux créer mon CV."});
    conversationHistory.push({role: "assistant", content: response.message});
    console.log("Conversation démarrée avec succès.");
  } else {
    console.error("Échec du démarrage de la conversation.");
    addMessage('ai', "Bonjour ! Je suis prêt à vous aider à créer un CV percutant. Commençons par votre **Prénom et Nom** ?");
  }
}

// ============================================================
// APPEL API GROQ (avec retry automatique sur 429)
// ============================================================
async function callGroq(messages, retryCount = 0, customUrl = "/api/groq") {
  showTyping();
  console.log("Appel Groq sur", customUrl, "avec", messages.length, "messages...");
  
  try {
    const response = await fetch(customUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1500
      })
    });

    if (!response.ok) {
      if (response.status === 405) {
        // Diagnostic for 405: Attempt fallback to direct .netlify path if on Netlify or suggest Vercel
        const isNetlify = window.location.hostname.includes('netlify.app');
        if (isNetlify && !messages[0]._fallback) {
           messages[0]._fallback = true; // Avoid infinite loop
           return callGroq(messages, 0, "/.netlify/functions/groq");
        }
        addMessage('ai', "⚠️ Erreur 405 : Votre serveur refuse les requêtes POST sur cette route. Vérifiez que vous êtes bien sur **Vercel** ou **Netlify**, et non sur GitHub Pages (qui bloque l'API).");
        hideTyping();
        return null;
      }

      const errorData = await response.json().catch(() => ({}));
      console.error("Groq API Error:", response.status, errorData);

      
      if (response.status === 429 && retryCount < 2) {
        hideTyping();
        addMessage('ai', '⏳ Trop de requêtes simultanées, je retente dans un instant...');
        await new Promise(r => setTimeout(r, 5000));
        const msgs = document.getElementById('chat-container');
        if (msgs.lastChild) msgs.removeChild(msgs.lastChild);
        return callGroq(messages, retryCount + 1);
      }
      
      const errMsg = errorData?.error?.message || "Erreur de connexion";
      addMessage('ai', `⚠️ Désolé, une petite erreur technique est survenue (Code: ${response.status}). Merci de réessayer.`);
      hideTyping();
      return null;
    }

    const data = await response.json();
    hideTyping();
    console.log("Réponse Groq reçue.");

    if (data.choices && data.choices[0]) {
      const content = data.choices[0].message.content;
      console.log("Contenu brut:", content.substring(0, 100) + "...");
      
      try {
        const jsonMatch = content.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsed = JSON.parse(jsonMatch[0]);
          return {
            message: parsed.message || "Continuons ensemble !",
            extracted: parsed.extracted || {},
            enriched: parsed.enriched || {},
            collected: parsed.collected || collectedCount,
            complete: parsed.complete || false
          };
        }
      } catch(e) {
        console.warn("Échec parsing JSON, fallback texte brut.");
        return { message: content, extracted: {}, collected: collectedCount, complete: false };
      }
      return { message: content, extracted: {}, collected: collectedCount, complete: false };
    }
  } catch(error) {
    hideTyping();
    addMessage('ai', "Une erreur de connexion m'empêche de vous répondre. Merci de vérifier votre internet.");
    console.error("Network Exception:", error);
  }
  return null;
}

// ============================================================
// ENVOYER MESSAGE
// ============================================================
async function sendMessage() {
  const input = document.getElementById('user-input');
  const text = input.value.trim();
  if (!text) return;

  input.value = '';
  addMessage('user', text);

  conversationHistory.push({ role: "user", content: text });

  const response = await callGroq(conversationHistory);

  if (response) {
    // Extraire le message lisible — JAMAIS afficher du JSON brut
    let displayMsg = response.message || '';
    // Si le message ressemble encore à du JSON, on nettoie
    if (displayMsg.startsWith('{') || displayMsg.startsWith('[')) {
      try {
        const parsed = JSON.parse(displayMsg);
        displayMsg = parsed.message || "J'ai bien noté vos informations. Continuons !";
      } catch(e) {
        displayMsg = "J'ai bien noté vos informations. Continuons !";
      }
    }
    if (!displayMsg || displayMsg.trim() === '') {
      displayMsg = "Merci ! J'ai enregistré ces informations. Passons à la suite.";
    }
    addMessage('ai', displayMsg);
    conversationHistory.push({ role: "assistant", content: displayMsg });

    // Mettre à jour les données collectées
    if (response.extracted) {
      updateCVData(response.extracted);
    }

    if (response.enriched) {
      cvData.enriched = { ...cvData.enriched, ...response.enriched };
      if (response.enriched.profil_enrichi) {
        cvData.profil = response.enriched.profil_enrichi;
      }
      if (response.enriched.experience_enrichie && response.enriched.experience_enrichie.length > 0) {
        cvData.experience = response.enriched.experience_enrichie;
      }
      if (response.enriched.competences_enrichies && response.enriched.competences_enrichies.length > 0) {
        cvData.competences = response.enriched.competences_enrichies;
      }
    }

    if (response.collected !== undefined) {
      updateProgress(response.collected);
    }

    // Si toutes les infos sont collectées
    if (response.complete || response.collected >= 7) {
      generateProfile();
    }
  }
}

// ============================================================
// UI : MESSAGES & TYPING
// ============================================================
function addMessage(role, text) {
  const container = document.getElementById('chat-container');
  if (!container) return;
  const div = document.createElement('div');
  div.className = `flex ${role === 'ai' ? 'justify-start' : 'justify-end'}`;
  
  const bubble = document.createElement('div');
  bubble.className = `max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
    role === 'ai' ? 'chat-bubble-ai rounded-tl-none' : 'chat-bubble-user rounded-tr-none'
  }`;
  bubble.innerHTML = text.replace(/\n/g, '<br>');
  
  div.appendChild(bubble);
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function showTyping() {
  const container = document.getElementById('chat-container');
  if (!container) return;
  const div = document.createElement('div');
  div.id = 'typing-indicator';
  div.className = 'flex justify-start';
  div.innerHTML = `
    <div class="chat-bubble-ai p-4 rounded-2xl rounded-tl-none flex gap-1 items-center">
      <div class="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
      <div class="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
      <div class="w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
    </div>
  `;
  container.appendChild(div);
  container.scrollTop = container.scrollHeight;
}

function hideTyping() {
  const indicator = document.getElementById('typing-indicator');
  if (indicator) indicator.remove();
}

// ============================================================
// METTRE À JOUR LES DONNÉES CV
// ============================================================
function updateCVData(extracted) {
  Object.keys(extracted).forEach(key => {
    if (extracted[key] !== null && extracted[key] !== undefined) {
      if (Array.isArray(cvData[key])) {
        // Pour les tableaux, on remplace ou on merge intelligemment
        if (Array.isArray(extracted[key]) && extracted[key].length > 0) {
          cvData[key] = extracted[key];
        } else if (!Array.isArray(extracted[key]) && extracted[key]) {
          // Si c'est une seule valeur pour un tableau (ex: une compétence)
          if (!cvData[key].includes(extracted[key])) {
            cvData[key].push(extracted[key]);
          }
        }
      } else {
        cvData[key] = extracted[key];
      }
    }
  });
  renderCVData();
}

// ============================================================
// AFFICHER LES DONNÉES COLLECTÉES
// ============================================================
function renderCVData() {
  const container = document.getElementById('cv-data');
  const simpleFields = [
    { key: 'prenom', label: 'Prénom', icon: '👤' },
    { key: 'nom', label: 'Nom', icon: '👤' },
    { key: 'email', label: 'Email', icon: '📧' },
    { key: 'telephone', label: 'Téléphone', icon: '📞' },
    { key: 'ville', label: 'Ville', icon: '📍' },
    { key: 'poste', label: 'Poste', icon: '💼' },
    { key: 'competences', label: 'Compétences', icon: '⚡' },
    { key: 'langues', label: 'Langues', icon: '🌍' }
  ];

  let html = '';
  let filled = 0;

  simpleFields.forEach(f => {
    const val = cvData[f.key];
    const has = val && (Array.isArray(val) ? val.length > 0 : true);
    if (has) {
      filled++;
      const display = Array.isArray(val) ? val.join(', ') : val;
      html += `
        <div class="data-ok">
          <span class="check">✓</span>
          <div>
            <p class="text-[10px] text-gray-400 font-bold uppercase tracking-wider">${f.label}</p>
            <p class="text-xs text-gray-800 font-semibold">${display}</p>
          </div>
        </div>`;
    } else {
      html += `
        <div class="data-empty">
          <span class="text-gray-300 text-xs">○</span>
          <p class="text-xs text-gray-400 font-medium">${f.label}</p>
        </div>`;
    }
  });

  // Objets complexes
  [
    { key: 'experience', label: '💼 Expériences' }, 
    { key: 'formation', label: '🎓 Formations' },
    { key: 'certifications', label: '📜 Certifications' }
  ].forEach(f => {
    const arr = cvData[f.key];
    if (arr && arr.length > 0) {
      filled++;
      html += `
        <div class="data-section-block mt-3">
          <p class="font-black text-gray-900 text-[10px] uppercase tracking-widest border-b border-purple-100 pb-1 mb-2">${f.label}</p>
          <div class="space-y-1 pl-1 text-[11px] text-gray-700">`;
      arr.forEach(v => {
        if (typeof v === 'object' && v !== null) {
          if (v.employeur) html += `<p class="leading-tight"><b>${v.employeur}</b> — ${v.poste || ''}</p>`;
          else if (v.diplome) html += `<p class="leading-tight"><b>${v.diplome}</b> — ${v.ecole || ''}</p>`;
          else if (v.titre) html += `<p class="leading-tight"><b>${v.titre}</b> — ${v.organisme || ''}</p>`;
          else if (v.nom) html += `<p class="leading-tight"><b>${v.nom}</b> — ${v.description || v.poste || ''}</p>`;
          else html += `<p class="leading-tight">• ${Object.values(v).join(' — ')}</p>`;
        } else {
          html += `<p class="leading-tight">• ${v}</p>`;
        }
      });
      html += `</div></div>`;
    }
  });

  container.innerHTML = html || '<p class="text-gray-400 text-xs text-center py-4">En attente des informations...</p>';
}

// ============================================================
// BARRE DE PROGRESSION
// ============================================================
function updateProgress(count) {
  collectedCount = count;
  const totalInfos = 11; // 8 mandatory + 3 optional
  const percentage = Math.min((count / totalInfos) * 100, 100);
  document.getElementById('progress-bar').style.width = percentage + '%';
  document.getElementById('progress-text').textContent = `${count} / ${totalInfos} infos collectées`;

  if (count >= 7) {
    document.getElementById('generate-section').classList.remove('hidden');
  }
}

// ============================================================
// GÉNÉRER LE PROFIL IA
// ============================================================
async function generateProfile() {
  const profilePrompt = `
    Sur la base des informations collectées sur cet utilisateur :
    ${JSON.stringify(cvData, null, 2)}
    
    Rédige un profil professionnel percutant de 3-4 lignes pour son CV.
    Réponds UNIQUEMENT avec le texte du profil, rien d'autre.
  `;

  try {
    const response = await fetch("/api/groq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [{ role: "user", content: profilePrompt }],
        temperature: 0.8,
        max_tokens: 300
      })
    });

    if (response.status === 405) {
        console.error("405 sur la génération de profil.");
        return;
    }

    const data = await response.json();
    if (data.choices && data.choices[0]) {
      cvData.profil = data.choices[0].message.content;
      renderCVData();
    }
  } catch(e) {
    console.error(e);
  }
}

// ============================================================
// AFFICHER LES TEMPLATES
// ============================================================
function showEditor() {
  document.getElementById('cv-editor').classList.remove('hidden');
  document.getElementById('cv-editor').scrollIntoView({ behavior: 'smooth' });
  
  // On attend un court instant que le layout se stabilise
  setTimeout(() => {
    renderTemplatesGrid();
    if (!selectedTemplate) selectTemplate('royal'); // Changed default template to 'royal'
    else generateCV(); 
  }, 100);
}

let currentCategory = 'all';

function filterTemplates(category) {
  currentCategory = category;
  
  // Update UI buttons
  document.querySelectorAll('.cat-filter').forEach(btn => {
    btn.classList.remove('bg-purple-600', 'text-white');
    btn.classList.add('bg-gray-100', 'text-gray-600');
  });
  
  const activeBtn = Array.from(document.querySelectorAll('.cat-filter')).find(btn => 
    btn.getAttribute('onclick').includes(`'${category}'`)
  );
  if (activeBtn) {
    activeBtn.classList.remove('bg-gray-100', 'text-gray-600');
    activeBtn.classList.add('bg-purple-600', 'text-white');
  }
  
  renderTemplatesGrid();
}

function renderTemplatesGrid() {
  const allTemplates = [
    { id: 'ats1', name: 'ATS — PERFORMANCE', cat: 'ats', desc: 'Indicateurs chiffrés' },
    { id: 'ats2', name: 'ATS — ÉCHÉANCE', cat: 'ats', desc: 'Optimisé recruteur' },
    { id: 'ats3', name: 'ATS — MINIMAL', cat: 'ats', desc: 'Structure pure' },
    { id: 'ats4', name: 'ATS — SIDEBAR', cat: 'ats', desc: 'Design et score' },
    { id: 'a1', name: 'ATS — MODERN BLUE', cat: 'ats', desc: 'Quadrillage subtil' },
    { id: 'a2', name: 'ATS — CORPORATE GREEN', cat: 'ats', desc: 'Hexagones & Nature' },
    { id: 'a3', name: 'ATS — EXECUTIVE DARK', cat: 'ats', desc: 'Luxe & Diagonales' },
    { id: 'a4', name: 'ATS — MARINE STRIPE', cat: 'ats', desc: 'Structure latérale' },
    { id: 'royal', name: 'Mandala Royal (Gold)', cat: 'ultra-premium', desc: 'Élégant, motifs royaux' },
    { id: 'm1', name: 'Mandala Sapphire', cat: 'ultra-premium', desc: 'Bleu Marine & Or' },
    { id: 'm2', name: 'Mandala Sahel', cat: 'ultra-premium', desc: 'Terracotta & Or' },
    { id: 'm3', name: 'Mandala Forest', cat: 'ultra-premium', desc: 'Émeraude & Argent' },
    { id: 'm4', name: 'Mandala Mystique', cat: 'ultra-premium', desc: 'Violet & Rose' },
    { id: 'm5', name: 'Mandala Onyx', cat: 'ultra-premium', desc: 'Noir & Blanc pur' },
    { id: 'm6', name: 'Mandala Cardinal', cat: 'ultra-premium', desc: 'Bordeaux & Rose Gold' },
    { id: 's2', name: 'Kente Africain', cat: 'moderne', desc: 'Motifs tissés traditionnels' },
    { id: 't1', name: 'AFRIQUE GÉOMÉTRIQUE', cat: 'moderne', desc: 'Design épuré' },
    { id: 't2', name: 'DÉGRADÉ MODERNE', cat: 'moderne', desc: 'Couleurs vibrantes' },
    { id: 't3', name: 'TROPICAL VERT & OR', cat: 'moderne', desc: 'Élégance naturelle' },
    { id: 't4', name: 'DIPLOMATIQUE NAVY', cat: 'classique', desc: 'Sérieux, Institutionnel' },
    { id: 't5', name: 'Minimaliste Noir', cat: 'pro', desc: 'Épuré, typographie forte' },
    { id: 't6', name: 'Bordeaux & Or', cat: 'pro', desc: 'Élégant, premium' },
    { id: 't7', name: 'Canada Clean', cat: 'canada', desc: 'Format canadien strict' },
    { id: 't8', name: 'Canada Rouge Moderne', cat: 'canada', desc: 'Moderne et structuré' },
    { id: 't9', name: 'Canada ATS-Friendly', cat: 'canada', desc: 'Optimisé recruteurs' },
    { id: 't10', name: 'Créatif × Pro', cat: 'mix', desc: 'Motifs subtils + corporate' },
    { id: 't11', name: 'Canada × Design', cat: 'mix', desc: 'Identité visuelle forte' },
    { id: 't12', name: 'Africain × Canada', cat: 'mix', desc: 'Identité sénégalaise + norme Canada' },
    { id: 'p1', name: 'Obsidian Gold', cat: 'ultra-premium', desc: 'Vagues dorées, Playfair Display' },
    { id: 'p2', name: 'Diagonal Split', cat: 'ultra-premium', desc: 'Asymétrique, Space Grotesk' },
    { id: 'p3', name: 'Wave Emerald', cat: 'ultra-premium', desc: 'Motifs complexes, DM Sans' },
    { id: 'p4', name: 'Crimson Executive', cat: 'ultra-premium', desc: 'Géométrie, Raleway' },
    { id: 'p5', name: 'Noir Absolu', cat: 'ultra-premium', desc: 'Grille points, Minimaliste' },
    { id: 'p6', name: 'Neo Brutalist', cat: 'ultra-premium', desc: 'Bords épais, Jaune & Noir' },
    { id: 'p7', name: 'Circuit Board', cat: 'ultra-premium', desc: 'Motif Tech, Innovant' },
    { id: 'p8', name: 'Aurora Borealis', cat: 'ultra-premium', desc: 'Aurore SVG, Cosmique' },
    { id: 'p9', name: 'Marble & Gold', cat: 'ultra-premium', desc: 'Marbre SVG, Ultra-luxe' },
    { id: 'p10', name: 'Tokyo Night', cat: 'ultra-premium', desc: 'Grille néon, Cyberpunk' },
    { id: 'p11', name: 'Teranga Royale', cat: 'ultra-premium', desc: 'Kente africain, Vert & Or' },
    { id: 'p12', name: 'Architect', cat: 'ultra-premium', desc: 'Swiss design, Grille' }
  ];

  const templates = currentCategory === 'all' 
    ? allTemplates 
    : allTemplates.filter(t => t.cat === currentCategory);

  // Dummy data pour des previews magnifiques
  const previewData = {
    prenom: cvData.prenom || "Aminata",
    nom: cvData.nom || "Diallo",
    poste: cvData.poste || "Senior Product Manager",
    email: cvData.email || "aminata.diallo@email.com",
    telephone: cvData.telephone || "+221 77 123 45 67",
    ville: cvData.ville || "Dakar, Sénégal",
    profil: cvData.profil || "Professionnelle du produit digital avec 6 ans d'expérience à la croisée de la tech et du business. Spécialisée dans le lancement de produits de 0 à 1, j'ai contribué à générer +2,4M€ de revenus additionnels sur les 3 dernières années grâce à une approche Lean centrée sur les données.",
    experience: (cvData.experience && cvData.experience.length > 0) ? cvData.experience : [
      {poste: "Senior Product Manager", employeur: "Wave Mobile Money", dates: "2022–Présent", missions: "Lancement de 3 nouveaux produits financiers majeurs. Croissance MAU de +180% en 18 mois. Management d'une squad de 12 personnes (Tech & Design).", result: "+180% MAU"},
      {poste: "Product Manager", employeur: "Orange Digital Center", dates: "2020–2022", missions: "Refonte UX de l'application principale. Réduction du churn de 35%. Coordination avec 4 équipes techniques et marketing.", result: "-35% Churn"},
      {poste: "Business Analyst", employeur: "CFAO Technologies", dates: "2018–2020", missions: "Analyse des données clients. Mise en place d'un dashboard BI complet. Optimisation des processus internes entraînant un gain de 40% en rapidité d'exécution.", result: "+40% Efficacité"}
    ],
    formation: (cvData.formation && cvData.formation.length > 0) ? cvData.formation : [
      {diplome: "MBA — Digital Innovation", ecole: "CESAG Business School", annee: "2018"},
      {diplome: "Licence en Informatique", ecole: "UCAD — Dakar", annee: "2016"}
    ],
    competences: (cvData.competences && cvData.competences.length > 0) ? cvData.competences : ["Product Strategy", "Agile / Scrum", "Data Analytics", "User Research", "Figma", "SQL"],
    langues: (cvData.langues && cvData.langues.length > 0) ? cvData.langues : ["Français (Natif)", "Anglais (Bilingue)", "Wolof (Courant)"]
  };

  const slider = document.getElementById('templates-grid');
  if (!slider) return;
  
  if (!selectedTemplate) selectedTemplate = 'royal';
  
  slider.innerHTML = templates.map(t => {
    let genContent = '<div style="padding:20px;color:gray;font-size:10px;">Prévisualisation non disponible</div>';
    try {
        const generatorFunc = generators[t.id];
        if(generatorFunc && typeof generatorFunc === 'function') {
            genContent = generatorFunc(previewData);
        } else {
            console.warn("Générateur non trouvé pour l'ID: " + t.id);
        }
    } catch(e) {
        console.error("Erreur de rendu pour le template " + t.id, e);
    }
    
    // MINIATURES : cardWidth un peu plus grand pour voir les différences de design
    const cardWidth = 158; 
    const dynScale = (cardWidth / 794).toFixed(4);
    const cardHeightPx = Math.round(1123 * parseFloat(dynScale)); // height fixe en px = vrai ratio A4
    const isSelected = selectedTemplate === t.id;
    
    return `
    <div 
      onclick="selectTemplate('${t.id}')"
      class="flex-shrink-0 w-full cursor-pointer rounded-xl border-4 transition-all overflow-hidden bg-white flex flex-col group shadow-md hover:shadow-xl ${isSelected ? 'border-purple-600 ring-4 ring-purple-100' : 'border-transparent hover:border-purple-300'}"
      id="template-${t.id}"
    >
      <!-- Miniature preview : hauteur fixe = ratio A4 exact -->
      <div class="relative w-full bg-white overflow-hidden" style="height: ${cardHeightPx}px; flex-shrink: 0;">
         <div style="position:absolute;top:0;left:0;width:794px;height:1123px;transform:scale(${dynScale});transform-origin:top left;pointer-events:none;">
             ${genContent}
         </div>
         ${isSelected ? `
            <div class="absolute inset-0 bg-purple-600/10 flex items-end justify-center pb-2">
              <div class="bg-purple-600 text-white rounded-full px-2 py-0.5 text-[8px] font-black shadow-xl">✓ Sélectionné</div>
            </div>
          ` : `
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100">
               <span class="text-white text-[8px] font-black tracking-wide bg-black/50 px-2 py-0.5 rounded-full">Utiliser</span>
            </div>
          `}
      </div>
      <div class="p-2 bg-white text-center border-t border-gray-100">
        <h4 class="font-black text-gray-900 text-[9px] leading-tight uppercase truncate">${t.name}</h4>
        <p class="text-[8px] text-gray-400 mt-0.5 truncate">${t.desc}</p>
      </div>
    </div>`;
  }).join('');
}


function selectTemplate(id) {
  selectedTemplate = id;
  document.querySelectorAll('[id^="template-"]').forEach(el => el.classList.remove('border-purple-400', 'border-2'));
  const el = document.getElementById('template-' + id);
  if (el) { el.classList.add('border-purple-400'); el.classList.add('border-2'); }
  generateCV();
}

window.addEventListener('resize', generateCV);

function generateCV() {
  if (!selectedTemplate || !generators[selectedTemplate]) return;
  const cvDataForGen = {
    ...cvData,
    prenom: cvData.prenom || 'Aminata',
    nom: cvData.nom || 'Diallo',
    poste: cvData.poste || 'Senior Product Manager',
    email: cvData.email || 'aminata.diallo@email.com',
    telephone: cvData.telephone || '+221 77 123 45 67',
    ville: cvData.ville || 'Dakar, Sénégal',
    profil: cvData.profil || 'Professionnelle avec 6 ans d\'expérience dans la gestion de projets innovants.',
    experience: (cvData.experience && cvData.experience.length > 0) ? cvData.experience : [
      {poste: "Senior Product Manager", employeur: "Wave Mobile Money", dates: "2022–Présent", missions: "Lancement de 3 nouveaux produits financiers."},
      {poste: "Product Manager", employeur: "Orange Digital Center", dates: "2020–2022", missions: "Refonte UX de l\'application principale."}
    ],
    formation: (cvData.formation && cvData.formation.length > 0) ? cvData.formation : [
      {diplome: "MBA — Digital Innovation", ecole: "CESAG Business School", annee: "2018"}
    ],
    competences: (cvData.competences && cvData.competences.length > 0) ? cvData.competences : ["Gestion de projet", "Leadership", "Data Analytics"],
    langues: (cvData.langues && cvData.langues.length > 0) ? cvData.langues : ["Français (Natif)", "Anglais (Bilingue)", "Wolof (Courant)"],
    certifications: (cvData.certifications && cvData.certifications.length > 0) ? cvData.certifications : [],
    portfolio: (cvData.portfolio && cvData.portfolio.length > 0) ? cvData.portfolio : [],
    references: (cvData.references && cvData.references.length > 0) ? cvData.references : []
  };
  
  try {
    const html = generators[selectedTemplate](cvDataForGen);
    const cvPreview = document.getElementById('cv-preview');
    cvPreview.innerHTML = html;
    
    // Apply font scale
    cvPreview.style.fontSize = cvFontScale + 'em';
    // Deep apply to all elements that might have their own font-size
    cvPreview.querySelectorAll('*').forEach(el => {
      if (el.style.fontSize) {
         // Optionally handle existing font sizes, but for now we let em inheritance work
      }
    });
    
    // Scale the CV preview to fit its container
    setTimeout(() => {
      const wrapper = document.getElementById('cv-preview-wrapper');
      const parent = wrapper ? wrapper.parentElement : null;
      if (!parent || !wrapper) return;

      const vh = window.innerHeight;
      const vw = window.innerWidth;
      
      // On ignore le buffer vertical pour maximiser la largeur
      let pWidth = parent.clientWidth;
      if (pWidth < 100) pWidth = availableWidth_fallback || 800;
      
      // On utilise 95% de la largeur disponible pour un effet "bord à bord" élégant
      const availableWidth = pWidth - (vw < 768 ? 10 : 30); 
      
      const scaleW = availableWidth / 794;
      
      // Priorité ABSOLUE à la largeur comme demandé par l'utilisateur
      // On ne check plus availableHeight ici pour le scale
      let scale = scaleW; 
      
      // On limite quand même à 1.15 pour éviter un rendu trop "zoomé" sur écrans géants
      scale = Math.min(scale, 1.15);
      if (vw < 768) scale = Math.min(scale, 0.95); 
      
      wrapper.style.transform = `scale(${scale})`;
      wrapper.style.transformOrigin = 'top center';
      wrapper.style.width = '794px';
      
      // Le parent devient scrollable verticalement pour accommoder la hauteur
      const finalHeight = (1123 * scale);
      parent.style.height = 'auto'; // Hauteur flexible
      parent.style.maxHeight = '780px'; 
      parent.style.overflowY = 'auto'; 
      parent.style.overflowX = 'hidden'; 
      parent.style.display = 'flex'; // Retour au flex pour le centrage
      parent.style.flexDirection = 'column'; 
      parent.style.alignItems = 'center'; // Centrage horizontal parfait
      parent.style.justifyContent = 'flex-start'; // Aligné en haut pour le scroll
      
      // On retire les marges manuelles car le flex s'en occupe
      wrapper.style.margin = '0';
    }, 100);
  } catch(e) {
    console.error('Erreur génération CV:', e);
  }
}
let availableWidth_fallback = 800;

let isPaid = false; // Mémorise si le paiement de cette session a réussi

async function downloadCV() {
  const preview = document.getElementById('cv-preview-wrapper');
  if (!preview || !preview.querySelector('#cv-preview').innerHTML.trim()) {
    alert('Veuillez d\'abord sélectionner un modèle de CV.');
    return;
  }
  
  if (!isPaid) {
    const btn = document.getElementById('download-btn-top');
    const origBtnText = btn ? btn.innerHTML : '';
    if (btn) { btn.innerHTML = '⏳ Sécurisation...'; btn.disabled = true; }

    try {
      const res = await fetch('/api/senepay-session', { method: 'POST' });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur API SenePay");

      const paymentWindow = window.open(data.checkoutUrl, '_blank', 'width=500,height=700');
      if (btn) btn.innerHTML = '⏳ Attente paiement...';

      const pollInterval = setInterval(async () => {
        try {
          const statusRes = await fetch('/api/senepay-status?token=' + data.sessionToken);
          const statusData = await statusRes.json();
          if (statusData.status === "Complete") {
            clearInterval(pollInterval);
            isPaid = true;
            if (paymentWindow && !paymentWindow.closed) paymentWindow.close();
            if (btn) { btn.innerHTML = origBtnText; btn.disabled = false; }
            alert("Paiement réussi ! Génération du PDF...");
            generateAndDownloadPDF();
          } else if (["Failed", "Cancelled", "Expired"].includes(statusData.status)) {
            clearInterval(pollInterval);
            if (btn) { btn.innerHTML = origBtnText; btn.disabled = false; }
            alert("Paiement échoué ou annulé.");
          }
        } catch(e) { console.error("Polling", e); }
      }, 5000);

      const checkPop = setInterval(() => {
        if (!isPaid && paymentWindow && paymentWindow.closed) {
          clearInterval(checkPop);
          clearInterval(pollInterval);
          if (btn) { btn.innerHTML = origBtnText; btn.disabled = false; }
        }
      }, 1000);

    } catch (e) {
      if (e.message.includes('405')) {
          alert("Erreur 405 : Votre serveur bloque les paiements. Vérifiez que vous n'êtes pas sur GitHub Pages (utilisez Vercel ou Netlify).");
      } else {
          alert("Erreur SenePay : " + e.message);
      }
      if (btn) { btn.innerHTML = origBtnText; btn.disabled = false; }
    }
    return;
  } else {
    generateAndDownloadPDF();
  }
}

async function generateAndDownloadPDF() {
  const preview = document.getElementById('cv-preview-wrapper');
  const btn = document.getElementById('download-btn-top');
  const origBtnText = btn ? btn.innerHTML : '';
  if (btn) {
    btn.innerHTML = '⏳ Création PDF...';
    btn.disabled = true;
  }

  try {
    const parent = preview.parentElement;
    const nextSibling = preview.nextSibling;
    
    // Save original styles
    const origTransform = preview.style.transform;
    const origWidth = preview.style.width;
    const origHeight = preview.style.height;
    
    // Detach preview to avoid any flex/margin/scroll weirdness from its parents
    const isolateContainer = document.createElement('div');
    isolateContainer.style.position = 'absolute';
    isolateContainer.style.top = '0';
    isolateContainer.style.left = '0';
    isolateContainer.style.width = '794px';
    isolateContainer.style.height = '1123px';
    isolateContainer.style.zIndex = '-9999';
    isolateContainer.style.background = 'white';
    document.body.appendChild(isolateContainer);
    
    isolateContainer.appendChild(preview);

    preview.style.transform = 'none';
    preview.style.width = '794px';
    preview.style.height = '1123px';
    preview.style.margin = '0';
    preview.classList.remove('shadow-lg');

    await new Promise(r => setTimeout(r, 400));
    
    const currentScrollY = window.scrollY;
    window.scrollTo(0, 0);

    if (typeof html2canvas === 'undefined') {
        throw new Error('html2canvas non chargé');
    }

    const canvas = await html2canvas(preview, {
      scale: 2,
      useCORS: true,
      logging: false,
      width: 794,
      height: 1123,
      windowWidth: 794,
      windowHeight: 1123
    });

    window.scrollTo(0, currentScrollY);

    // Restore DOM
    if (nextSibling) {
      parent.insertBefore(preview, nextSibling);
    } else {
      parent.appendChild(preview);
    }
    document.body.removeChild(isolateContainer);

    preview.style.transform = origTransform;
    preview.style.width = origWidth;
    preview.style.height = origHeight;
    preview.classList.add('shadow-lg');

    // Verify canvas content
    if (canvas.width === 0 || canvas.height === 0) {
        throw new Error('Échec du rendu canvas');
    }

    const { jsPDF } = window.jspdf || {};
    if (!jsPDF) throw new Error('jsPDF non chargé');
    
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const imgData = canvas.toDataURL('image/jpeg', 0.98);
    pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
    
    const fileName = `CV_${(cvData.prenom || 'Teranga')}_${(cvData.nom || 'Forge')}.pdf`.replace(/\s+/g, '_');
    pdf.save(fileName);
  } catch(e) {
    console.error('Erreur PDF détailliée:', e);
    alert('Erreur lors de la création du PDF : ' + e.message);
  } finally {
    if (btn) {
      btn.innerHTML = origBtnText;
      btn.disabled = false;
    }
  }
}
// Logic pour le tiroir de modèles
function toggleTemplateDrawer(show) {
  const drawer = document.getElementById('template-drawer');
  const slot = document.getElementById('drawer-slot');
  const sidebar = document.getElementById('templates-sidebar');
  const inner = document.getElementById('templates-sidebar-inner');
  
  if (!drawer || !inner || !sidebar || !slot) return;
  
  if (show) {
    slot.appendChild(inner);
    drawer.style.display = 'flex';
    setTimeout(() => drawer.classList.add('active'), 10);
    document.body.style.overflow = 'hidden';
  } else {
    drawer.classList.remove('active');
    setTimeout(() => {
      drawer.style.display = 'none';
      sidebar.appendChild(inner);
      document.body.style.overflow = 'auto';
    }, 300);
  }
}

// Intercepter selectTemplate pour fermer sur mobile
const originalSelectTemplate = selectTemplate;
selectTemplate = function(id) {
  originalSelectTemplate(id);
  if (window.innerWidth < 1024) {
    toggleTemplateDrawer(false);
  }
};
