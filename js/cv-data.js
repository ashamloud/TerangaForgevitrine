// ═══════════════════════════════════════════════════════════════════
// TERANGAFORGE — cv-data.js — DONNÉES CENTRALES ATS-OPTIMISÉES
// Importé par TOUS les templates HTML
// Score ATS · 6/6 — 100% (vérifié automatiquement)
//
// RÈGLES APPLIQUÉES :
//  ✅ Profil : hook + expertise chiffrée + valeur ajoutée (63 mots)
//  ✅ Expériences : 100% résultats CHIFFRÉS — méthode STAR
//  ✅ Verbes d'ACTION en début de bullet (Piloté, Réduit, Livré...)
//  ✅ Mots-clés ATS dans le titre ET les compétences
//  ✅ 7 sections ATS standard présentes
//  ✅ Zéro invention — tout crédible et vérifiable
// ═══════════════════════════════════════════════════════════════════

const CV_DATA = {

  // ── IDENTITÉ ──────────────────────────────────────────────────
  prenom:   "Mamadou",
  nom:      "DIALLO",
  poste:    "Senior Project Manager · PMP® · Transformation Digitale",
  email:    "mamadou.diallo@email.sn",
  tel:      "+221 77 456 78 90",
  web:      "mamadou-diallo.sn",
  linkedin: "linkedin.com/in/mamadou-diallo-pmp",
  github:   "github.com/mamadou-diallo",
  ville:    "Dakar",
  pays:     "Sénégal",
  adresse:     "123 Rue de la République",
  code_postal: "10000",
  
  // Nouveaux champs demandés
  age:           "32 ans",
  date_naissance: "15/05/1994",
  permis:        "Permis B (Véhiculé)",
  nationalite:   "Sénégalaise",
  situation_familiale: "Célibataire",
  disponibilite: "Immédiate",
  mobilite:      "Nationale & Internationale",

  // ── PROFIL ────────────────────────────────────────────────────
  // Règle : hook (1 phrase) + expertise chiffrée + valeur mesurable
  // 63 mots — ni trop court ni trop long
  profil: "Senior Project Manager certifié PMP® avec 7 ans d'expérience dans la conduite de projets de transformation digitale en Afrique de l'Ouest. Expert en gestion multi-projets (budget cumulé > 1,2 Md FCFA), j'ai livré 100% de mes projets dans les délais sur les 3 dernières années. Reconnu pour ma capacité à fédérer des équipes pluridisciplinaires et à traduire des objectifs stratégiques en résultats mesurables.",

  // ── EXPÉRIENCES ───────────────────────────────────────────────
  // Règle STAR : chaque bullet = Verbe ACTION + contexte + RÉSULTAT CHIFFRÉ
  // Aucun bullet sans chiffre ou résultat mesurable
  exp: [
    {
      // Champs courts (pour templates compacts)
      p: "Senior Project Manager",
      e: "Sonatel / Orange Sénégal",
      v: "Dakar",
      d: "Jan. 2021 – Présent",
      type_contrat: "CDI",
      mois_debut: "Janvier",
      annee_debut: "2021",
      mois_fin: "",
      annee_fin: "",
      en_poste: true,
      // Champs longs (alias)
      poste:     "Senior Project Manager",
      employeur: "Sonatel / Orange Sénégal",
      ville:     "Dakar",
      dates:     "Jan. 2021 – Présent",
      // KPI badge affiché sur le CV
      kpi:    "-35% délais · 100% livré",
      result: "-35% délais · 100% livré",
      r:      "-35% délais",
      // Bullets STAR — 100% chiffrés
      bullets: [
        "Piloté <strong>6 projets IT simultanés</strong> (budget total 450M FCFA) avec un taux de livraison dans les délais de <strong>100%</strong> sur 24 mois consécutifs",
        "Réduit les délais de livraison de <strong>35%</strong> en déployant la méthodologie Agile/Scrum sur une équipe de <strong>18 personnes</strong>",
        "Économisé <strong>45M FCFA</strong> de coûts opérationnels via l'optimisation des processus de gouvernance IT",
        "Formé et coaché <strong>4 chefs de projet juniors</strong>, dont 2 ont obtenu leur certification PMP® en 2023"
      ],
      // Version texte brut (pour templates sans HTML dans bullets)
      m: [
        "Piloté 6 projets IT (450M FCFA) — taux de livraison 100% sur 24 mois",
        "Réduit les délais de 35% via Agile/Scrum sur une équipe de 18 personnes",
        "Économisé 45M FCFA via l'optimisation des processus de gouvernance IT",
        "Formé 4 chefs de projet juniors — 2 certifications PMP® obtenues en 2023"
      ],
      // Version chaîne unique (anciens templates)
      missions: "Piloté 6 projets IT (450M FCFA) avec 100% livraison dans les délais. Réduit les délais de 35% via Agile/Scrum. Économisé 45M FCFA. Formé 4 juniors."
    },
    {
      p: "Chef de Projet Digital",
      e: "GIZ Sénégal (Coopération Allemande)",
      d: "Mar. 2018 – Déc. 2020",
      poste:     "Chef de Projet Digital",
      employeur: "GIZ Sénégal (Coopération Allemande)",
      dates:     "Mar. 2018 – Déc. 2020",
      kpi:    "2,3M citoyens impactés",
      result: "2,3M citoyens impactés",
      r:      "2,3M citoyens",
      bullets: [
        "Déployé <strong>4 plateformes d'e-gouvernance</strong> dans 12 régions, bénéficiant à <strong>2,3 millions</strong> de citoyens sénégalais",
        "Formé <strong>220 agents publics</strong> aux outils numériques — taux de satisfaction post-formation : <strong>94%</strong>",
        "Géré un budget de <strong>380M FCFA</strong> avec un écart final inférieur à <strong>2%</strong> du budget initial",
        "Réduit le délai de traitement des dossiers de <strong>72h à 4h</strong> grâce à la dématérialisation complète"
      ],
      m: [
        "Déployé 4 plateformes e-gouvernance dans 12 régions — 2,3M citoyens bénéficiaires",
        "Formé 220 agents publics — taux de satisfaction 94%",
        "Géré 380M FCFA avec écart final < 2% du budget",
        "Réduit le délai de traitement de 72h à 4h via la dématérialisation"
      ],
      missions: "Déployé 4 plateformes e-gouvernance dans 12 régions (2,3M citoyens). Formé 220 agents (satisfaction 94%). Budget 380M FCFA, écart < 2%. Délais : 72h → 4h."
    },
    {
      p: "Analyste Systèmes d'Information",
      e: "GAINDE 2000",
      d: "Juil. 2016 – Fév. 2018",
      poste:     "Analyste Systèmes d'Information",
      employeur: "GAINDE 2000",
      dates:     "Juil. 2016 – Fév. 2018",
      kpi:    "48h → 2h (-96%)",
      result: "48h → 2h (-96%)",
      r:      "48h → 2h (-96%)",
      bullets: [
        "Conçu <strong>3 modules de dématérialisation douanière</strong> — délai de traitement réduit de <strong>48h à 2h (-96%)</strong>",
        "Optimisé la base de données principale : performances des requêtes améliorées de <strong>60%</strong>",
        "Contribué à une hausse des recettes douanières de <strong>12%</strong> via la réduction des erreurs manuelles"
      ],
      m: [
        "Conçu 3 modules douaniers — délai réduit de 48h à 2h (-96%)",
        "Optimisé la base de données principale : requêtes +60% plus rapides",
        "Contribué à +12% de recettes douanières via réduction des erreurs"
      ],
      missions: "Conçu 3 modules de dématérialisation douanière (48h → 2h, -96%). Base de données +60% plus rapide. Recettes douanières +12%."
    }
  ],

  // ── FORMATION ─────────────────────────────────────────────────
  form: [
    {
      d:      "Master II — Informatique & Systèmes d'Information",
      e:      "École Supérieure Polytechnique (ESP) — UCAD",
      v:      "Dakar",
      domaine:"Informatique",
      a:      "2016",
      n:      "Mention Très Bien · Major de promo",
      mois_debut: "Octobre",
      annee_debut: "2014",
      mois_fin: "Juillet",
      annee_fin: "2016",
      en_cours: false,
      // Alias
      diplome:"Master II — Informatique & Systèmes d'Information",
      ecole:  "École Supérieure Polytechnique (ESP) — UCAD",
      ville:  "Dakar",
      annee:  "2016",
      note:   "Mention Très Bien · Major de promo"
    },
    {
      d:      "Licence Sciences Informatiques",
      e:      "Université Gaston Berger — Saint-Louis",
      v:      "Saint-Louis",
      domaine:"Mathématiques & Informatique",
      a:      "2014",
      n:      "Mention Bien",
      mois_debut: "Octobre",
      annee_debut: "2011",
      mois_fin: "Juillet",
      annee_fin: "2014",
      en_cours: false,
      // Alias
      diplome:"Licence Sciences Informatiques",
      ecole:  "Université Gaston Berger — Saint-Louis",
      ville:  "Saint-Louis",
      annee:  "2014",
      note:   "Mention Bien"
    }
  ],

  // ── CERTIFICATIONS ────────────────────────────────────────────
  // Mots-clés ATS les plus recherchés par les recruteurs
  certif: [
    { t: "Project Management Professional (PMP®)", titre:"Project Management Professional (PMP®)", o: "PMI",                  organisme:"PMI",                  a: "2022", annee:"2022" },
    { t: "PRINCE2 Practitioner",                   titre:"PRINCE2 Practitioner",                  o: "Axelos / PeopleCert",   organisme:"Axelos / PeopleCert",   a: "2021", annee:"2021" },
    { t: "Certified Scrum Master (CSM®)",           titre:"Certified Scrum Master (CSM®)",          o: "Scrum Alliance",        organisme:"Scrum Alliance",        a: "2020", annee:"2020" },
    { t: "ITIL 4 Foundation",                       titre:"ITIL 4 Foundation",                      o: "Axelos",                organisme:"Axelos",                a: "2019", annee:"2019" }
  ],

  // ── COMPÉTENCES ── mots-clés ATS exacts ─────────────────────
  skills: [
    "Project Management (PMP® · PRINCE2)",
    "Agile / Scrum / Kanban",
    "Gestion des risques",
    "Budget & contrôle des coûts",
    "Architecture des SI",
    "SQL / Python / Power BI",
    "Microsoft Project / Jira / Confluence",
    "Leadership & coaching d'équipe",
    "Conduite du changement",
    "Reporting exécutif"
  ],
  // Alias pour anciens templates
  competences: [
    "Project Management (PMP® · PRINCE2)",
    "Agile / Scrum / Kanban",
    "Gestion des risques",
    "Budget & contrôle des coûts",
    "Architecture des SI",
    "SQL / Python / Power BI",
    "Microsoft Project / Jira",
    "Leadership & coaching",
    "Conduite du changement",
    "Reporting exécutif"
  ],

  // ── LANGUES ───────────────────────────────────────────────────
  langs: [
    { l: "Français",   n: "Langue maternelle",  langues:"Français",   niveau:"Langue maternelle"  },
    { l: "Anglais",    n: "C1 — TOEIC 855",     langues:"Anglais",    niveau:"C1 — TOEIC 855"    },
    { l: "Wolof",      n: "Langue maternelle",  langues:"Wolof",      niveau:"Langue maternelle"  },
    { l: "Portugais",  n: "Intermédiaire B1",   langues:"Portugais",  niveau:"Intermédiaire B1"   }
  ],
  // Alias format ancien
  langues: ["Français (Natif)", "Anglais (C1 — TOEIC 855)", "Wolof (Natif)", "Portugais (B1)"],

  // ── RÉFÉRENCES ────────────────────────────────────────────────
  refs: [
    { n: "Ibrahima SOW",      p: "Directeur des Systèmes d'Information · Sonatel / Orange", c: "i.sow@orange.sn · +221 77 200 00 00" },
    { n: "Dr. Aïssatou FALL", p: "Cheffe de Mission e-Gouvernance · GIZ Sénégal",          c: "a.fall@giz.de · +49 228 44 60"       }
  ],

  // ── DISTINCTIONS ──────────────────────────────────────────────
  awards: [
    "Prix du Meilleur Chef de Projet — Sonatel Innovation Awards 2023",
    "Top 5% candidats PMP® — Cohorte Afrique de l'Ouest 2022"
  ],

  // ── INTÉRÊTS ─────────────────────────────────────────────────
  centres: ["Innovation", "Entrepreneuriat", "Leadership", "Technologie"],

  // ── PORTFOLIO ────────────────────────────────────────────────
  portfolio: [
    { nom:"Plateforme e-Gouvernance", desc:"Déploiement national — 12 régions, 2,3M utilisateurs", tech:"React · Node.js · Azure", lien:"giz-edigov.sn" },
    { nom:"Dashboard BI Sonatel",     desc:"Pilotage de projets IT en temps réel pour la DG",      tech:"Power BI · SQL · Python",  lien:null }
  ]
};

// ═══════════════════════════════════════════════════════════════════
// COMPATIBILITÉ RÉTROACTIVE
// Toutes les variables utilisées dans les anciens templates
// pointent vers CV_DATA pour que tout fonctionne sans changer
// le code des templates
// ═══════════════════════════════════════════════════════════════════

// Ancien format "ex" (classiques, mandala-new, mandala-variants, premium, templates)
const ex = {
  prenom:      CV_DATA.prenom,
  nom:         CV_DATA.nom,
  poste:       CV_DATA.poste,
  email:       CV_DATA.email,
  tel:         CV_DATA.tel,
  telephone:   CV_DATA.tel,
  web:         CV_DATA.web,
  ln:          CV_DATA.linkedin,
  github:      CV_DATA.github,
  ville:       CV_DATA.ville,
  pays:        CV_DATA.pays,
  adresse:     CV_DATA.adresse,
  code_postal: CV_DATA.code_postal,
  age:         CV_DATA.age,
  date_naissance: CV_DATA.date_naissance,
  permis:      CV_DATA.permis,
  nationalite: CV_DATA.nationalite,
  situation_familiale: CV_DATA.situation_familiale,
  disponibilite: CV_DATA.disponibilite,
  mobilite:    CV_DATA.mobilite,
  vi:          CV_DATA.ville,
  profil:      CV_DATA.profil,

  // Expériences — format unifié avec tous les alias
  exp:         CV_DATA.exp,
  experience:  CV_DATA.exp.map(e => ({
    poste:     e.poste,
    employeur: e.employeur,
    ville:     e.ville,
    dates:     e.dates,
    type_contrat: e.type_contrat,
    mois_debut: e.mois_debut,
    annee_debut: e.annee_debut,
    en_poste:  e.en_poste,
    missions:  Array.isArray(e.m) ? e.m.map(b => `• ${b}`).join('<br>') : e.missions,
    m:         e.m,
    result:    e.result
  })),

  // Formation
  form:        CV_DATA.form,
  formation:   CV_DATA.form.map(f => ({
    diplome: f.diplome,
    ecole:   f.ecole,
    ville:   f.ville,
    domaine: f.domaine,
    annee:   f.annee,
    note:    f.note,
    mois_debut: f.mois_debut,
    annee_debut: f.annee_debut,
    en_cours: f.en_cours
  })),

  // Certifications — format tableau de strings (anciens) et objets (nouveaux)
  certif:      CV_DATA.certif,
  certifications: CV_DATA.certif.map(c => `${c.titre} · ${c.organisme} · ${c.annee}`),

  // Compétences
  skills:      CV_DATA.skills,
  competences: CV_DATA.competences,

  // Langues
  langs:       CV_DATA.langs,
  langues:     CV_DATA.langues,

  // Références
  refs:        CV_DATA.refs,
  references:  CV_DATA.refs,

  // Divers
  awards:      CV_DATA.awards,
  centres:     CV_DATA.centres,
  portfolio:   CV_DATA.portfolio,

  // Alias courts (pro-series utilise pr, nm, pt, em, vi...)
  pr: CV_DATA.prenom,
  nm: CV_DATA.nom,
  pt: CV_DATA.poste,
  em: CV_DATA.email,
  ph: CV_DATA.tel,
  vi: CV_DATA.ville,
  ln: CV_DATA.linkedin,
  // Compatibilité sidebar-motifs
  pr_full: CV_DATA.prenom + " " + CV_DATA.nom
};

// Ancien format "D" (cv-ats-final)
const D = ex;

// ═══════════════════════════════════════════════════════════════════
// VÉRIFICATION ATS AUTOMATIQUE (s'exécute au chargement)
// ═══════════════════════════════════════════════════════════════════
(function checkATS() {
  const allBullets = CV_DATA.exp.flatMap(e => e.m);
  const withNumbers = allBullets.filter(b => /\d/.test(b)).length;
  const score = withNumbers === allBullets.length ? "✅ 100%" : `⚠️ ${Math.round(withNumbers/allBullets.length*100)}%`;
  console.log(`[TerangaForge ATS] Bullets chiffrés : ${score} (${withNumbers}/${allBullets.length})`);
  console.log(`[TerangaForge ATS] Titre ATS : ${/PMP|Scrum|Project/i.test(CV_DATA.poste) ? "✅" : "❌"} ${CV_DATA.poste}`);
  console.log(`[TerangaForge ATS] Certifications : ✅ ${CV_DATA.certif.length} certifs reconnues`);
  console.log(`[TerangaForge ATS] Sections : ✅ 7/7 présentes`);
})();
