/**
 * CV Generators ATS - TerangaForge
 * Contains templates optimized for Applicant Tracking Systems.
 */
(function() {
  const { getSmartLayout, ATS_ICONS, atsSec, atsBullet, atsLangBar } = window;

  function genATS1(cv) {
  const s = getSmartLayout(cv);
  return `<div style="width:794px;min-height:1123px;font-family:'Inter',sans-serif;background:#F8FAFF;position:relative;overflow:hidden; display:flex; flex-direction:column; justify-content:flex-start;">
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;" viewBox="0 0 794 1123" preserveAspectRatio="xMidYMid slice">
      <defs><pattern id="qd" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0 L0 0 0 32" fill="none" stroke="#1D4ED8" stroke-width="0.35" opacity="0.1"/></pattern></defs>
      <rect width="100%" height="100%" fill="url(#qd)"/>
      <polygon points="0,0 48,0 0,48" fill="#1D4ED8" opacity="0.08"/>
      <rect x="0" y="0" width="5" height="1123" fill="#1D4ED8" opacity="0.7"/>
    </svg>
    <div style="background:#1e3a8a;padding:32px 40px 28px 45px;position:relative;z-index:2;overflow:hidden; margin-bottom:${s.sectionGap};">
      <div style="position:relative;z-index:2;display:flex;align-items:center;gap:24px;">
        <div style="width:${s.isVeryShort ? '110px' : '90px'};height:${s.isVeryShort ? '110px' : '90px'};border-radius:50%;background:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="color:rgba(255,255,255,0.3);">${ATS_ICONS.usr}</span>
        </div>
        <div style="flex:1;">
          <h1 style="font-size:${s.nameSize};font-weight:800;color:white;letter-spacing:-0.5px;line-height:0.9;margin-bottom:8px;">${cv.prenom} ${cv.nom}</h1>
          <p style="font-size:${s.headerSize};color:rgba(255,255,255,0.75);letter-spacing:1.5px;margin-bottom:12px;">${cv.poste}</p>
          <div style="display:flex;gap:16px;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:rgba(255,255,255,0.55);transform:translateY(1.5px);">${ATS_ICONS.mail}</span><p style="font-size:10px;color:rgba(255,255,255,0.8);line-height:1;">${cv.email}</p></div>
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:rgba(255,255,255,0.55);transform:translateY(1.5px);">${ATS_ICONS.ph}</span><p style="font-size:10px;color:rgba(255,255,255,0.8);line-height:1;">${cv.telephone}</p></div>
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:rgba(255,255,255,0.55);transform:translateY(1.5px);">${ATS_ICONS.pin}</span><p style="font-size:10px;color:rgba(255,255,255,0.8);line-height:1;">${cv.adresse ? cv.adresse + ', ' : ''}${cv.code_postal ? cv.code_postal + ' ' : ''}${cv.ville}</p></div>
          </div>
        </div>
        <!-- ATS Ready Badge Removed -->
      </div>
    </div>
    <div style="margin:0 40px ${s.sectionGap} 45px;padding:14px 16px;background:#EFF6FF;border-left:4px solid #1D4ED8;border-radius:0 6px 6px 0;position:relative;z-index:2;">
      <p style="font-size:8.5px;font-weight:700;color:#1D4ED8;letter-spacing:2px;text-transform:uppercase;margin-bottom:7px;">Profil</p>
      <p style="font-size:${s.profileSize};color:#1f2937;line-height:${s.lineHeight};">${cv.profil}</p>
    </div>
    <div style="display:flex;gap:0;margin:0 40px 20px 45px;position:relative;z-index:2;">
      <div style="flex:1.6;padding-right:24px;border-right:1px solid #DBEAFE;">
        ${atsSec(ATS_ICONS.bag, "EXPÉRIENCES", "#1D4ED8", "#DBEAFE")}
        ${(cv.experience||[]).map(e => `
          <div style="margin-bottom:${s.itemGap};">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:3px;">
              <p style="font-size:15px;font-weight:900;color:#1e3a8a;letter-spacing:-0.2px;">${typeof e === 'string' ? e : e.poste}</p>
              ${e.result ? `<span style="font-size:9px;background:#1e3a8a;color:white;padding:3px 10px;border-radius:3px;font-weight:700;">${e.result}</span>`:''}
            </div>
            <p style="font-size:11px;color:#2563EB;font-weight:600;margin-bottom:6px;">
              ${e.employeur||''} ${e.ville ? `· ${e.ville}` : ''} ${e.type_contrat ? `· ${e.type_contrat}` : ''}
              <span style="font-weight:400;color:#9CA3AF;"> · ${e.mois_debut ? e.mois_debut + ' ' : ''}${e.annee_debut || ''} – ${e.en_poste ? 'Présent' : (e.mois_fin ? e.mois_fin + ' ' : '') + (e.annee_fin || '')}</span>
            </p>
            ${Array.isArray(e.missions) ? e.missions.map(b => atsBullet(b, "#1D4ED8", s.lineHeight)).join('') : atsBullet(e.missions || '', "#1D4ED8", s.lineHeight)}
          </div>`).join('')}
        ${atsSec(ATS_ICONS.sch, "FORMATION", "#1D4ED8", "#DBEAFE")}
        ${(cv.formation||[]).map(f => `
          <div style="margin-bottom:10px;display:flex;justify-content:space-between;padding:12px 14px;background:white;border:1px solid #DBEAFE;border-radius:6px;box-shadow:0 1px 2px rgba(0,0,0,0.03);">
            <div>
              <p style="font-size:14px;font-weight:800;color:#1e3a8a;">${f.diplome}</p>
              <p style="font-size:11px;color:#6B7280;">${f.ecole}${f.ville ? ' · ' + f.ville : ''}${f.domaine ? ' · ' + f.domaine : ''}</p>
            </div>
            <div style="text-align:right;">
              <p style="font-size:11px;color:#1D4ED8;font-weight:700;">
                ${f.mois_debut ? f.mois_debut + ' ' : ''}${f.annee_debut || ''} – ${f.en_cours ? 'En cours' : (f.mois_fin ? f.mois_fin + ' ' : '') + (f.annee_fin || '')}
              </p>
            </div>
          </div>`).join('')}
      </div>
      <div style="width:230px;flex-shrink:0;padding:25px 22px;background:rgba(29,78,216,0.03);border-left:1px solid #DBEAFE;margin-top:10px;border-radius:12px 0 0 12px;">
        ${atsSec(ATS_ICONS.usr, "DÉTAILS", "#1D4ED8", "#DBEAFE")}
        <div style="margin-bottom:15px;">
          ${cv.age ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.age}</span><p style="font-size:10px;color:#374151;">${cv.age}</p></div>` : ''}
          ${cv.nationalite ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.nat}</span><p style="font-size:10px;color:#374151;">${cv.nationalite}</p></div>` : ''}
          ${cv.situation_familiale ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.fam}</span><p style="font-size:10px;color:#374151;">${cv.situation_familiale}</p></div>` : ''}
          ${cv.permis ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.dr}</span><p style="font-size:10px;color:#374151;">${cv.permis}</p></div>` : ''}
          ${cv.mobilite ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.pin}</span><p style="font-size:10px;color:#374151;">${cv.mobilite}</p></div>` : ''}
          ${cv.disponibilite ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.cal}</span><p style="font-size:10px;color:#374151;">${cv.disponibilite}</p></div>` : ''}
        </div>
        ${atsSec(ATS_ICONS.chk, "COMPÉTENCES", "#1D4ED8", "#DBEAFE")}
        ${(cv.competences||[]).map((s, i) => window.atsSkillBar(s, i < 3 ? 'Expert' : i < 6 ? 'Avancé' : 'Intermédiaire', "#1D4ED8")).join('')}
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.ln, "LANGUES", "#1D4ED8", "#DBEAFE")}
          ${(cv.langues||[]).map(l => `<div style="margin-bottom:9px;"><div style="display:flex;justify-content:space-between;margin-bottom:3px;"><p style="font-size:9.5px;color:#1f2937;font-weight:600;">${typeof l === 'string' ? l : l.langues}</p></div>${atsLangBar(typeof l === 'string' ? l : l.niveau, "#1e3a8a", "#3b82f6")}</div>`).join('')}
        </div>
        ${(cv.certifications && cv.certifications.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.cert, "CERTIFICATIONS", "#1D4ED8", "#DBEAFE")}
          ${cv.certifications.map(c => `<p style="font-size:9.5px;color:#374151;margin-bottom:5px;">▪ ${typeof c === 'string' ? c : c.titre}</p>`).join('')}
        </div>` : ''}
        ${(cv.centres && cv.centres.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.inf, "LOISIRS", "#1D4ED8", "#DBEAFE")}
          <p style="font-size:9px;color:#4B5563;line-height:1.4;">${cv.centres.join(' • ')}</p>
        </div>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.ref, "RÉFÉRENCES", "#1D4ED8", "#DBEAFE")}
          ${cv.references.map(r => `<div style="margin-bottom:8px;"><p style="font-size:9.5px;font-weight:700;color:#1e3a8a;">${r.n || r.nom}</p><p style="font-size:8.5px;color:#6B7280;">${r.p || r.poste}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.bag, "PROJETS", "#1D4ED8", "#DBEAFE")}
          ${cv.portfolio.map(p => `<div style="margin-bottom:6px;"><p style="font-size:9.5px;font-weight:700;color:#1e3a8a;">${p.nom}</p><p style="font-size:8.5px;color:#4B5563;">${p.desc}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.awards && cv.awards.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.star, "DISTINCTIONS", "#1D4ED8", "#DBEAFE")}
          ${cv.awards.map(a => `<div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;"><span style="color:#1D4ED8;font-size:10px;">★</span><p style="font-size:9px;color:#374151;">${a}</p></div>`).join('')}
        </div>` : ''}
      </div>
    </div>
  </div>`;
}

function genATS2(cv) {
  const s = getSmartLayout(cv);
  return `<div style="width:794px;min-height:1123px;font-family:'DM Sans',sans-serif;background:#F7FAF7;position:relative;overflow:hidden;display:flex; align-items:stretch;">
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;" viewBox="0 0 794 1123" preserveAspectRatio="xMidYMid slice">
      <defs><pattern id="hex" x="0" y="0" width="52" height="60" patternUnits="userSpaceOnUse"><polygon points="26,2 50,16 50,44 26,58 2,44 2,16" fill="none" stroke="#166534" stroke-width="0.5" opacity="0.07"/></pattern></defs>
      <rect width="100%" height="100%" fill="url(#hex)"/>
    </svg>
    <div style="width:252px;flex-shrink:0;background:linear-gradient(175deg,#14532d,#166534,#14532d);position:relative;z-index:2;padding:36px 20px 28px;overflow:hidden; display:flex; flex-direction:column; justify-content:center;">
      <div style="width:100px;height:100px;border-radius:50%;background:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.35);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;">
        <span style="color:rgba(255,255,255,0.3);">${ATS_ICONS.usr}</span>
      </div>
      <h2 style="font-size:16px;font-weight:700;color:white;text-align:center;margin-bottom:2px;">${cv.prenom} ${cv.nom}</h2>
      <p style="font-size:8px;color:rgba(255,255,255,0.55);text-align:center;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:18px;">${cv.poste}</p>
      <div style="margin-bottom:18px;">
        <div style="display:flex;align-items:center;gap:7px;margin-bottom:7px;"><span style="color:rgba(255,255,255,0.5);transform:translateY(1.5px);">${ATS_ICONS.mail}</span><p style="font-size:10px;color:rgba(255,255,255,0.78);line-height:1;">${cv.email}</p></div>
        <div style="display:flex;align-items:center;gap:7px;margin-bottom:7px;"><span style="color:rgba(255,255,255,0.5);transform:translateY(1.5px);">${ATS_ICONS.ph}</span><p style="font-size:10px;color:rgba(255,255,255,0.78);line-height:1;">${cv.telephone}</p></div>
        <div style="display:flex;align-items:center;gap:7px;"><span style="color:rgba(255,255,255,0.5);transform:translateY(1.5px);">${ATS_ICONS.pin}</span><p style="font-size:10px;color:rgba(255,255,255,0.78);line-height:1.2;">
          ${cv.adresse ? cv.adresse + '<br>' : ''}${cv.code_postal ? cv.code_postal + ' ' : ''}${cv.ville}
        </p></div>
      </div>
      
      <!-- Détails genATS2 -->
      <div style="margin-bottom:18px;">
        <p style="font-size:8px;font-weight:700;color:rgba(255,255,255,0.45);letter-spacing:2.5px;margin-bottom:9px;">DÉTAILS</p>
        ${cv.age ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#4ade80;">${ATS_ICONS.age}</span><p style="font-size:10px;color:white;">${cv.age}</p></div>` : ''}
        ${cv.nationalite ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#4ade80;">${ATS_ICONS.nat}</span><p style="font-size:10px;color:white;">${cv.nationalite}</p></div>` : ''}
        ${cv.permis ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#4ade80;">${ATS_ICONS.dr}</span><p style="font-size:10px;color:white;">${cv.permis}</p></div>` : ''}
      </div>
      <p style="font-size:7.5px;font-weight:700;color:rgba(255,255,255,0.45);letter-spacing:2.5px;margin:20px 0 12px;">COMPÉTENCES</p>
      ${(cv.competences||[]).slice(0, 8).map((s, i) => `
        <div style="margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:3px;"><p style="font-size:9px;color:rgba(255,255,255,0.9);font-weight:600;">${s}</p><p style="font-size:7px;color:#4ade80;font-weight:700;">${i < 3 ? 'EXPERT' : 'ADV'}</p></div>
          <div style="height:2px;background:rgba(255,255,255,0.1);border-radius:1px;"><div style="height:100%;background:#4ade80;width:${i < 3 ? '95%' : '75%'};border-radius:1px;"></div></div>
        </div>`).join('')}
      <div style="height:20px;"></div>
      ${(cv.langues||[]).map(l => `<div style="display:flex;align-items:center;gap:7px;margin-bottom:8px;"><span style="color:#4ade80;">${ATS_ICONS.ln}</span><p style="font-size:9px;color:rgba(255,255,255,0.78);">${typeof l === 'string' ? l : l.langue || l}</p></div>`).join('')}
      ${(cv.awards && cv.awards.length > 0) ? `
      <div style="margin-top:20px;">
        <p style="font-size:7.5px;font-weight:700;color:rgba(255,255,255,0.45);letter-spacing:2.5px;margin-bottom:9px;">DISTINCTIONS</p>
        ${cv.awards.map(a => `<div style="display:flex;align-items:center;gap:7px;margin-bottom:6px;"><span style="color:#fbbf24;font-size:10px;">✦</span><p style="font-size:9px;color:rgba(255,255,255,0.78);">${a}</p></div>`).join('')}
      </div>` : ''}
    </div>
    <div style="flex:1;padding:24px 28px;position:relative;z-index:2; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="margin-bottom:${s.sectionGap};padding:13px 15px;background:#ECFDF5;border-left:4px solid #166534;border-radius:0 6px 6px 0;">
        <p style="font-size:8.5px;font-weight:700;color:#166534;letter-spacing:2px;text-transform:uppercase;margin-bottom:7px;">Profil</p>
        <p style="font-size:${s.profileSize};color:#1f2937;line-height:1.8;">${cv.profil}</p>
      </div>
      ${atsSec(ATS_ICONS.bag, "EXPÉRIENCES", "#166534", "#D1FAE5")}
      ${(cv.experience||[]).map(e => `
        <div style="margin-bottom:${s.itemGap};padding:12px 14px;background:white;border:1px solid #D1FAE5;border-left:4px solid #166534;border-radius:0 6px 6px 0;">
          <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
            <p style="font-size:15px;font-weight:900;color:#14532d;">${typeof e === 'string' ? e : e.poste}</p>
            ${e.result ? `<span style="font-size:9px;background:#166534;color:white;padding:3px 9px;border-radius:3px;">${e.result}</span>`:''}
          </div>
          <p style="font-size:11px;color:#16a34a;font-weight:600;margin-bottom:6px;">
            ${e.employeur||''} ${e.ville ? `· ${e.ville}` : ''} ${e.type_contrat ? `· ${e.type_contrat}` : ''}
            <span style="font-weight:400;color:#9CA3AF;"> · ${e.mois_debut ? e.mois_debut + ' ' : ''}${e.annee_debut || ''} – ${e.en_poste ? 'Présent' : (e.mois_fin ? e.mois_fin + ' ' : '') + (e.annee_fin || '')}</span>
          </p>
          ${Array.isArray(e.missions) ? e.missions.map(b => atsBullet(b, "#166534", s.lineHeight)).join('') : atsBullet(e.missions || '', "#166534", s.lineHeight)}
        </div>`).join('')}
      ${atsSec(ATS_ICONS.sch, "FORMATION", "#166534", "#D1FAE5")}
      <div style="display:flex;gap:10px;margin-bottom:16px;">
        ${(cv.formation||[]).map(f => `
          <div style="flex:1;padding:10px 12px;background:white;border:1px solid #D1FAE5;border-radius:5px;">
            <p style="font-size:11px;font-weight:700;color:#14532d;">${f.diplome}</p>
            <p style="font-size:9px;color:#6B7280;">${f.ecole}${f.ville ? ' · ' + f.ville : ''}</p>
            <p style="font-size:9px;color:#166534;font-weight:700;">
              ${f.mois_debut ? f.mois_debut + ' ' : ''}${f.annee_debut || ''} – ${f.en_cours ? 'En cours' : (f.mois_fin ? f.mois_fin + ' ' : '') + (f.annee_fin || '')}
            </p>
          </div>`).join('')}
      </div>
      ${(cv.portfolio && cv.portfolio.length > 0) ? `
      ${atsSec(ATS_ICONS.bag, "PROJETS", "#166534", "#D1FAE5")}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:16px;">
        ${cv.portfolio.map(p => `
          <div style="padding:10px 12px;background:white;border:1px solid #D1FAE5;border-left:4px solid #16a34a;border-radius:0 5px 5px 0;">
            <p style="font-size:10.5px;font-weight:700;color:#14532d;">${p.nom}</p>
            <p style="font-size:9x;color:#4b5563;line-height:${s.lineHeight};">${p.desc}</p>
          </div>`).join('')}
      </div>` : ''}
      ${(cv.references && cv.references.length > 0) ? `
      ${atsSec(ATS_ICONS.ref, "RÉFÉRENCES", "#166534", "#D1FAE5")}
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
        ${cv.references.map(r => `
          <div style="padding:10px 12px;background:white;border:1px solid #D1FAE5;border-radius:5px;">
            <p style="font-size:10.5px;font-weight:700;color:#14532d;">${r.n || r.nom}</p>
            <p style="font-size:9px;color:#16a34a;">${r.p || r.poste}</p>
          </div>`).join('')}
      </div>` : ''}
    </div>
  </div>`;
}

function genATS3(cv) {
  const s = getSmartLayout(cv);
  return `<div style="width:794px;min-height:1123px;font-family:'Montserrat',sans-serif;background:white;position:relative;overflow:hidden; display:flex; flex-direction:column; justify-content:flex-start;">
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;" viewBox="0 0 794 1123" preserveAspectRatio="xMidYMid slice">
      <defs><pattern id="diag" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse"><line x1="0" y1="28" x2="28" y2="0" stroke="#374151" stroke-width="0.4" opacity="0.06"/></pattern></defs>
      <rect y="165" width="100%" height="958" fill="url(#diag)"/><rect x="0" y="0" width="4" height="1123" fill="#374151" opacity="0.8"/>
    </svg>
    <div style="background:linear-gradient(135deg,#111827 0%,#1f2937 60%,#111827 100%);padding:36px 40px 32px 44px;position:relative;z-index:2;overflow:hidden; margin-bottom:${s.sectionGap};">
      <div style="display:flex;align-items:center;gap:24px;">
        <div style="width:${s.isVeryShort ? '120px' : '100px'};height:${s.isVeryShort ? '120px' : '100px'};border-radius:12px;background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.15);display:flex;align-items:center;justify-content:center;">
          <span style="color:rgba(255,255,255,0.25);">${ATS_ICONS.usr}</span>
        </div>
        <div style="flex:1;">
          <h1 style="font-size:${s.nameSize};font-weight:800;color:white;letter-spacing:-0.5px;line-height:0.9;margin-bottom:6px;">${cv.prenom} ${cv.nom}</h1>
          <p style="font-size:${s.headerSize};color:rgba(255,255,255,0.65);letter-spacing:1.5px;margin-bottom:12px;">${cv.poste}</p>
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:rgba(255,255,255,0.45);transform:translateY(1.5px);">${ATS_ICONS.mail}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.72);line-height:1;">${cv.email}</p></div>
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:rgba(255,255,255,0.45);transform:translateY(1.5px);">${ATS_ICONS.ph}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.72);line-height:1;">${cv.telephone}</p></div>
            <div style="display:flex;align-items:center;gap:5px;"><span style="color:rgba(255,255,255,0.45);transform:translateY(1.5px);">${ATS_ICONS.pin}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.72);line-height:1;">${cv.adresse ? cv.adresse + ', ' : ''}${cv.code_postal ? cv.code_postal + ' ' : ''}${cv.ville}</p></div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin:0 40px ${s.sectionGap} 44px;padding:14px 16px;background:#F9FAFB;border-left:4px solid #374151;border-radius:0 6px 6px 0;position:relative;z-index:2;">
      <p style="font-size:8.5px;font-weight:700;color:#111827;letter-spacing:2px;text-transform:uppercase;margin-bottom:7px;">Profil</p>
      <p style="font-size:${s.profileSize};color:#374151;line-height:${s.lineHeight};">${cv.profil}</p>
    </div>
    <div style="display:flex;gap:0;margin:0 40px 20px 44px;position:relative;z-index:2;">
      <div style="flex:1.5;padding-right:22px;border-right:1px solid #E5E7EB;">
        ${atsSec(ATS_ICONS.bag, "EXPÉRIENCES", "#111827", "#E5E7EB")}
        ${(cv.experience||[]).map(e => `
          <div style="margin-bottom:${s.itemGap};padding:12px 14px;background:#F9FAFB;border:1px solid #E5E7EB;border-left:4px solid #111827;">
            <div style="display:flex;justify-content:space-between;margin-bottom:3px;">
              <p style="font-size:14px;font-weight:900;color:#111827;letter-spacing:-0.3px;">${typeof e === 'string' ? e : e.poste}</p>
              ${e.result ? `<span style="font-size:8px;background:#111827;color:white;padding:3px 9px;border-radius:3px;">${e.result}</span>`:''}
            </div>
            <p style="font-size:10px;color:#374151;font-weight:600;margin-bottom:6px;">${e.employeur||''} <span style="font-weight:400;color:#9CA3AF;">· ${e.dates||''}</span></p>
            ${Array.isArray(e.missions) ? e.missions.map(b => atsBullet(b, "#374151", s.lineHeight)).join('') : atsBullet(e.missions || '', "#374151", s.lineHeight)}
          </div>`).join('')}
        ${(cv.formation && cv.formation.length > 0) ? `
        <div style="margin-top:20px;">
          ${atsSec(ATS_ICONS.sch, "FORMATION", "#111827", "#E5E7EB")}
          ${cv.formation.map(f => `
            <div style="margin-bottom:10px;padding:12px 14px;background:#F9FAFB;border:1px solid #E5E7EB;border-left:4px solid #111827;">
              <p style="font-size:12px;font-weight:700;color:#111827;">${f.diplome}</p>
              <p style="font-size:10px;color:#374151;">${f.ecole} · ${f.annee}</p>
            </div>`).join('')}
        </div>` : ''}
      </div>
      </div>
      <div style="width:225px;flex-shrink:0;padding:25px 20px;background:#F9FAFB;border-left:1px solid #E5E7EB;margin-top:10px;border-radius:12px 0 0 12px;">
        ${atsSec(ATS_ICONS.usr, "DÉTAILS", "#111827", "#E5E7EB")}
        <div style="margin-bottom:15px;">
          ${cv.age ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#374151;">${ATS_ICONS.age}</span><p style="font-size:10px;color:#374151;">${cv.age}</p></div>` : ''}
          ${cv.nationalite ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#374151;">${ATS_ICONS.nat}</span><p style="font-size:10px;color:#374151;">${cv.nationalite}</p></div>` : ''}
          ${cv.permis ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#374151;">${ATS_ICONS.dr}</span><p style="font-size:10px;color:#374151;">${cv.permis}</p></div>` : ''}
        </div>
        ${atsSec(ATS_ICONS.chk, "COMPÉTENCES", "#111827", "#E5E7EB")}
        ${(cv.competences||[]).map(s => `<div style="display:flex;align-items:center;gap:7px;margin-bottom:7px;"><div style="width:5px;height:5px;background:#374151;border-radius:50%;"></div><p style="font-size:9.5px;color:#374151;">${s}</p></div>`).join('')}
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.ln, "LANGUES", "#111827", "#E5E7EB")}
          ${(cv.langues||[]).map(l => `<div style="margin-bottom:9px;display:flex;justify-content:space-between;"><p style="font-size:9.5px;color:#1f2937;font-weight:600;">${typeof l === 'string' ? l : l.langues}</p></div>`).join('')}
        </div>
        ${(cv.certifications && cv.certifications.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.cert, "CERTIFICATIONS", "#111827", "#E5E7EB")}
          ${cv.certifications.map(c => `<div style="display:flex;align-items:center;gap:7px;margin-bottom:7px;"><div style="width:5px;height:5px;background:#374151;border-radius:50%;"></div><p style="font-size:9.5px;color:#374151;">${typeof c === 'string' ? c : c.titre}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.bag, "PROJETS", "#111827", "#E5E7EB")}
          ${cv.portfolio.map(p => `<div style="margin-bottom:8px;"><p style="font-size:10px;font-weight:700;color:#111827;">${p.nom}</p><p style="font-size:8.5px;color:#4B5563;">${p.desc}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.ref, "RÉFÉRENCES", "#111827", "#E5E7EB")}
          ${cv.references.map(r => `<div style="margin-bottom:8px;"><p style="font-size:9.5px;font-weight:700;color:#111827;">${r.n || r.nom}</p><p style="font-size:8.5px;color:#374151;">${r.p || r.poste}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.awards && cv.awards.length > 0) ? `
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.star, "DISTINCTIONS", "#111827", "#E5E7EB")}
          ${cv.awards.map(a => `<div style="padding:8px;background:white;border-radius:4px;border:1px solid #E5E7EB;margin-bottom:6px;"><p style="font-size:9px;color:#111827;font-weight:600;">${a}</p></div>`).join('')}
        </div>` : ''}
      </div>
    </div>
  </div>`;
}

function genATS4(cv) {
  const s = getSmartLayout(cv);
  return `<div style="width:794px;min-height:1123px;font-family:'Raleway',sans-serif;background:white;position:relative;overflow:hidden; display:flex; flex-direction:column; justify-content:flex-start;">
    <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;" viewBox="0 0 794 1123" preserveAspectRatio="xMidYMid slice">
      <rect x="0" y="0" width="7" height="1123" fill="#0f2a4a" opacity="0.85"/>
    </svg>
    <div style="padding:36px 40px 28px 30px;margin-left:7px;position:relative;z-index:2;border-bottom:2px solid #0f2a4a; margin-bottom:${s.sectionGap};">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;">
        <div style="display:flex;align-items:center;gap:22px;">
          <div style="width:${s.isVeryShort ? '110px' : '95px'};height:${s.isVeryShort ? '110px' : '95px'};border-radius:50%;background:#EFF6FF;border:2px solid #BFDBFE;display:flex;align-items:center;justify-content:center;"><span style="color:#93C5FD;">${ATS_ICONS.usr}</span></div>
          <div><h1 style="font-size:${s.nameSize};font-weight:900;color:#0f2a4a;line-height:0.9;">${cv.prenom} <br><span style="font-weight:300;">${cv.nom}</span></h1><p style="font-size:${s.headerSize};color:#6B7280;letter-spacing:2px;text-transform:uppercase;">${cv.poste}</p></div>
        </div>
        <div style="text-align:right;">
          <p style="font-size:10.5px;color:#4B5563;display:flex;align-items:center;justify-content:flex-end;gap:5px;line-height:1.2;word-break:break-word;">${cv.email} <span style="transform:translateY(1.5px);">${ATS_ICONS.mail}</span></p>
          <p style="font-size:10.5px;color:#4B5563;display:flex;align-items:center;justify-content:flex-end;gap:5px;line-height:1.2;word-break:break-word;">${cv.telephone} <span style="transform:translateY(1.5px);">${ATS_ICONS.ph}</span></p>
          <p style="font-size:10.5px;color:#4B5563;display:flex;align-items:center;justify-content:flex-end;gap:5px;line-height:1.2;width:180px;word-break:break-word;">
            ${`${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim()} 
            <span style="transform:translateY(1.5px);">${ATS_ICONS.pin}</span>
          </p>
        </div>
      </div>
    </div>
    <div style="margin:0 40px ${s.sectionGap} 30px;position:relative;z-index:2;display:flex;gap:16px;">
      <div style="flex:1.8;padding:13px 15px;background:#EFF6FF;border-left:4px solid #0f2a4a;border-radius:0 6px 6px 0;">
        <p style="font-size:8.5px;font-weight:700;color:#0f2a4a;text-transform:uppercase;margin-bottom:7px;">Profil</p><p style="font-size:${s.profileSize};color:#1f2937;line-height:${s.lineHeight};">${cv.profil}</p>
      </div>

    </div>
    <div style="display:flex;gap:0;margin:0 40px 20px 30px;position:relative;z-index:2;">
      <div style="flex:1.5;padding-right:22px;border-right:1px solid #BFDBFE;">
        ${atsSec(ATS_ICONS.bag, "EXPÉRIENCES", "#0f2a4a", "#BFDBFE")}
        ${(cv.experience||[]).map(e => `
          <div style="margin-bottom:${s.itemGap};padding:12px 14px;background:#F8FAFF;border:1px solid #DBEAFE;border-left:4px solid #0f2a4a;border-radius:0 6px 6px 0;">
            <p style="font-size:14px;font-weight:900;color:#0f2a4a;letter-spacing:-0.5px;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:10px;color:#1e3a8a;font-weight:600;">${e.employeur||''} · ${e.dates||''}</p>
            ${Array.isArray(e.missions) ? e.missions.map(b => atsBullet(b, "#0f2a4a")).join('') : atsBullet(e.missions || '', "#0f2a4a")}
          </div>`).join('')}
        ${(cv.formation && cv.formation.length > 0) ? `
        <div style="margin-top:24px;">
          ${atsSec(ATS_ICONS.sch, "FORMATION", "#0f2a4a", "#BFDBFE")}
          ${cv.formation.map(f => `
            <div style="margin-bottom:12px;padding:12px 14px;background:#F8FAFF;border:1px solid #DBEAFE;border-left:4px solid #0f2a4a;border-radius:0 6px 6px 0;">
              <p style="font-size:12px;font-weight:700;color:#0f2a4a;">${f.diplome}</p>
              <p style="font-size:10px;color:#1e3a8a;">${f.ecole} · ${f.annee}</p>
            </div>`).join('')}
        </div>` : ''}
      </div>
      </div>
      <div style="width:220px;flex-shrink:0;padding:25px 20px;background:#F8FAFF;border-left:1px solid #BFDBFE;margin-top:10px;border-radius:12px 0 0 12px;">
        ${atsSec(ATS_ICONS.usr, "DÉTAILS", "#0f2a4a", "#BFDBFE")}
        ${window.renderDetailsSection(cv, '#0f2a4a', '#374151', { fontSize: '9.5px', marginBottom: '8px' })}
        <div style="height:10px;"></div>
        ${(cv.competences && cv.competences.length > 0) ? `
        ${atsSec(ATS_ICONS.chk, "COMPÉTENCES", "#0f2a4a", "#BFDBFE")}
        ${cv.competences.map(c => `<div style="display:flex;align-items:center;gap:7px;margin-bottom:7px;"><div style="width:5px;height:5px;background:#0f2a4a;border-radius:50%;"></div><p style="font-size:9.5px;color:#374151;">${c}</p></div>`).join('')}` : ''}
        ${(cv.langues && cv.langues.length > 0) ? `
        <div style="margin-top:16px;">
          ${atsSec(ATS_ICONS.ln, "LANGUES", "#0f2a4a", "#BFDBFE")}
          ${cv.langues.map(l => `<p style="font-size:9.5px;color:#1e3a8a;font-weight:600;margin-bottom:3px;">${typeof l === 'string' ? l : l.langues}</p>`).join('')}
        </div>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div style="margin-top:20px;">
          ${atsSec(ATS_ICONS.ref, "RÉFÉRENCES", "#0f2a4a", "#BFDBFE")}
          ${cv.references.map(r => `<div style="margin-bottom:8px;"><p style="font-size:9.5px;font-weight:700;color:#0f2a4a;">${r.n || r.nom}</p><p style="font-size:8.5px;color:#6B7280;">${r.p || r.poste}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <div style="margin-top:16px;">
          ${atsSec(ATS_ICONS.bag, "PROJETS", "#0f2a4a", "#BFDBFE")}
          ${cv.portfolio.map(p => `<div style="margin-bottom:8px;padding:8px;background:#F8FAFF;border-radius:4px;border:1px solid #DBEAFE;"><p style="font-size:10px;font-weight:700;color:#0f2a4a;">${p.nom}</p><p style="font-size:9px;color:#4B5563;">${p.desc}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.awards && cv.awards.length > 0) ? `
        <div style="margin-top:16px;">
          ${atsSec(ATS_ICONS.star, "DISTINCTIONS", "#0f2a4a", "#BFDBFE")}
          ${cv.awards.map(a => `<div style="display:flex;align-items:center;gap:7px;margin-bottom:6px;"><span style="color:#0f2a4a;">🏆</span><p style="font-size:9.5px;color:#374151;font-weight:600;">${a}</p></div>`).join('')}
        </div>` : ''}
      </div>
    </div>
  </div>`;
}

function genA1(cv) {
  const s = getSmartLayout(cv);
  return `<div style="width:794px;min-height:1123px;font-family:'Inter',sans-serif;background:#F8FAFF;position:relative;overflow:hidden;display:flex;flex-direction:column;">
    <div style="background:#1e3a8a;padding:32px 45px;position:relative;z-index:2;">
      <div style="display:flex;align-items:center;gap:24px;">
        <div style="width:90px;height:90px;border-radius:50%;background:rgba(255,255,255,0.1);border:2px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><span style="color:rgba(255,255,255,0.3);">${ATS_ICONS.usr}</span></div>
        <div style="flex:1;">
          <h1 style="font-size:${s.nameSize};font-weight:800;color:white;margin-bottom:8px;line-height:0.9;">${cv.prenom} ${cv.nom}</h1>
          <p style="font-size:${s.headerSize};color:rgba(255,255,255,0.75);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:10px;">${cv.poste}</p>
          <div style="display:flex;gap:14px;flex-wrap:wrap;">
            <div style="display:flex;align-items:center;gap:5px;"><span style="transform:translateY(1.5px);">${ATS_ICONS.mail}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.8);line-height:1;">${cv.email}</p></div>
            <div style="display:flex;align-items:center;gap:5px;"><span style="transform:translateY(1.5px);">${ATS_ICONS.ph}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.8);line-height:1;">${cv.telephone}</p></div>
            <div style="display:flex;align-items:center;gap:5px;"><span style="transform:translateY(1.5px);">${ATS_ICONS.pin}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.8);line-height:1;">${cv.adresse ? cv.adresse + ', ' : ''}${cv.code_postal ? cv.code_postal + ' ' : ''}${cv.ville}</p></div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin:18px 45px;padding:13px 16px;background:#EFF6FF;border-left:4px solid #1D4ED8;border-radius:0 6px 6px 0;">
      <p style="font-size:8px;font-weight:700;color:#1D4ED8;letter-spacing:2px;text-transform:uppercase;margin-bottom:6px;">PROFIL</p>
      <p style="font-size:${s.profileSize};color:#1f2937;line-height:1.75;">${cv.profil}</p>
    </div>
    <div style="display:flex;gap:0;margin:0 45px 20px;flex:1;">
      <div style="flex:1.6;padding-right:24px;border-right:1px solid #DBEAFE;">
        ${atsSec(ATS_ICONS.bag,"EXPÉRIENCES","#1D4ED8","#DBEAFE")}
        ${(cv.experience||[]).map(e=>`<div style="margin-bottom:${s.itemGap};">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2px;">
            <p style="font-size:14px;font-weight:900;color:#1e3a8a;letter-spacing:-0.3px;">${typeof e==='string'?e:e.poste}</p>
            ${e.result?`<span style="font-size:8px;background:#1e3a8a;color:white;padding:2px 8px;border-radius:3px;">${e.result}</span>`:''}
          </div>
          <p style="font-size:9.5px;color:#2563EB;font-weight:600;margin-bottom:5px;">${e.employeur||''} <span style="font-weight:400;color:#9CA3AF;">· ${e.dates||''}</span></p>
          ${Array.isArray(e.missions)?e.missions.map(b=>atsBullet(b,"#1D4ED8")).join(''):atsBullet(e.missions||'',"#1D4ED8")}
        </div>`).join('')}
        ${atsSec(ATS_ICONS.sch,"FORMATION","#1D4ED8","#DBEAFE")}
        ${(cv.formation||[]).map(f=>`<div style="margin-bottom:9px;display:flex;justify-content:space-between;padding:9px 12px;background:white;border:1px solid #DBEAFE;border-radius:5px;">
          <div><p style="font-size:10.5px;font-weight:700;color:#1e3a8a;">${f.diplome}</p><p style="font-size:9px;color:#6B7280;">${f.ecole}</p></div>
          <p style="font-size:10px;color:#1D4ED8;font-weight:700;">${f.annee}</p>
        </div>`).join('')}
        ${(cv.certifications||[]).length>0?atsSec(ATS_ICONS.cert,"CERTIFICATIONS","#1D4ED8","#DBEAFE")+''+cv.certifications.map(c=>`<p style="font-size:9.5px;margin-bottom:5px;">· <b>${c.titre||c}</b>${c.organisme?' — '+c.organisme:''}</p>`).join(''):''}
        ${(cv.awards||[]).length>0?atsSec(ATS_ICONS.cert,"DISTINCTIONS","#1D4ED8","#DBEAFE")+''+cv.awards.map(a=>`<p style="font-size:9.5px;margin-bottom:5px;">· ${a}</p>`).join(''):''}
        ${(cv.portfolio||[]).length>0?atsSec(ATS_ICONS.bag,"PORTFOLIO","#1D4ED8","#DBEAFE")+''+cv.portfolio.map(p=>`<div style="margin-bottom:8px;"><p style="font-size:10px;font-weight:700;color:#1e3a8a;">${p.nom}</p><p style="font-size:9px;color:#374151;">${p.desc}</p></div>`).join(''):''}
      </div>
      <div style="width:210px;flex-shrink:0;padding-left:20px;">
        ${atsSec(ATS_ICONS.chk,"COMPÉTENCES","#1D4ED8","#DBEAFE")}
        ${(cv.competences||[]).map(s=>`<div style="display:flex;align-items:center;gap:7px;margin-bottom:7px;"><div style="width:5px;height:5px;background:#1D4ED8;border-radius:50%;flex-shrink:0;"></div><p style="font-size:9.5px;color:#374151;">${s}</p></div>`).join('')}
        
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.usr,"DÉTAILS","#1D4ED8","#DBEAFE")}
          <div style="margin-bottom:15px;">
            ${cv.age ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.age}</span><p style="font-size:10.5px;color:#374151;">${cv.age}</p></div>` : ''}
            ${cv.nationalite ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.nat}</span><p style="font-size:10.5px;color:#374151;">${cv.nationalite}</p></div>` : ''}
            ${cv.permis ? `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:#1D4ED8;">${ATS_ICONS.dr}</span><p style="font-size:10.5px;color:#374151;">${cv.permis}</p></div>` : ''}
          </div>
        </div>

        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.ln,"LANGUES","#1D4ED8","#DBEAFE")}
          ${(cv.langues||[]).map(l=>`<div style="margin-bottom:9px;"><p style="font-size:9.5px;color:#1f2937;font-weight:600;margin-bottom:3px;">${typeof l==='string'?l:l.langue||l}</p>${atsLangBar(typeof l==='string'?l:l.niveau||l,"#1e3a8a","#3b82f6")}</div>`).join('')}
        </div>
        ${(cv.references||[]).length>0?`<div style="margin-top:14px;">${atsSec(ATS_ICONS.ref,"RÉFÉRENCES","#1D4ED8","#DBEAFE")}${cv.references.map(r=>`<div style="margin-bottom:9px;"><p style="font-size:9.5px;font-weight:700;color:#1e3a8a;">${r.nom||r}</p><p style="font-size:8.5px;color:#6B7280;">${r.poste||''} · ${r.entreprise||''}</p></div>`).join('')}</div>`:''}
      </div>
    </div>
  </div>`;
}

function genA2(cv) {
  const s = getSmartLayout(cv);
  return `<div style="width:794px;min-height:1123px;font-family:'DM Sans',sans-serif;background:#F0FDF4;display:flex;flex-direction:column;">
    <div style="background:#166534;padding:30px 45px;color:white;">
      <h1 style="font-size:${s.nameSize};font-weight:800;line-height:0.9;margin-bottom:8px;">${cv.prenom} ${cv.nom}</h1>
      <p style="font-size:${s.headerSize};opacity:0.8;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">${cv.poste}</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;">
        <div style="display:flex;align-items:center;gap:5px;"><span style="transform:translateY(1.5px);">${ATS_ICONS.mail}</span><span style="font-size:10.5px;opacity:0.85;line-height:1.2;word-break:break-word;">${cv.email}</span></div>
        <div style="display:flex;align-items:center;gap:5px;"><span style="transform:translateY(1.5px);">${ATS_ICONS.ph}</span><span style="font-size:10.5px;opacity:0.85;line-height:1.2;word-break:break-word;">${cv.telephone}</span></div>
        <div style="display:flex;align-items:center;gap:5px;"><span style="transform:translateY(1.5px);">${ATS_ICONS.pin}</span><span style="font-size:10.5px;opacity:0.85;line-height:1.2;word-break:break-word;">
          ${`${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim()}
        </span></div>
      </div>
    </div>
    <div style="margin:16px 45px;padding:12px 16px;background:#DCFCE7;border-left:4px solid #166534;border-radius:0 6px 6px 0;">
      <p style="font-size:8px;font-weight:700;color:#166534;letter-spacing:2px;margin-bottom:5px;">PROFIL</p>
      <p style="font-size:${s.profileSize};color:#1f2937;line-height:1.75;">${cv.profil}</p>
    </div>
    <div style="display:flex;gap:0;margin:0 45px 20px;flex:1;">
      <div style="flex:1.6;padding-right:24px;border-right:1px solid #DCFCE7;">
        ${atsSec(ATS_ICONS.bag,"EXPÉRIENCES","#166534","#DCFCE7")}
        ${(cv.experience||[]).map(e=>`<div style="margin-bottom:${s.itemGap};border-left:3px solid #166534;padding-left:14px;">
          <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
            <p style="font-size:14px;font-weight:900;color:#14532d;letter-spacing:-0.2px;">${typeof e==='string'?e:e.poste}</p>
            ${e.result?`<span style="font-size:8px;background:#166534;color:white;padding:2px 8px;border-radius:3px;">${e.result}</span>`:''}
          </div>
          <p style="font-size:9.5px;color:#16a34a;font-weight:600;margin-bottom:5px;">${e.employeur||''} <span style="font-weight:400;color:#9CA3AF;">· ${e.dates||''}</span></p>
          ${Array.isArray(e.missions)?e.missions.map(b=>atsBullet(b,"#166534")).join(''):atsBullet(e.missions||'',"#166534")}
        </div>`).join('')}
        ${atsSec(ATS_ICONS.sch,"FORMATION","#166534","#DCFCE7")}
        ${(cv.formation||[]).map(f=>`<div style="margin-bottom:9px;padding:9px 12px;background:white;border:1px solid #DCFCE7;border-radius:5px;display:flex;justify-content:space-between;">
          <div><p style="font-size:10.5px;font-weight:700;color:#14532d;">${f.diplome}</p><p style="font-size:9px;color:#6B7280;">${f.ecole}</p></div>
          <p style="font-size:10px;color:#166534;font-weight:700;">${f.annee}</p>
        </div>`).join('')}
        ${(cv.certifications||[]).length>0?atsSec(ATS_ICONS.cert,"CERTIFICATIONS","#166534","#DCFCE7")+cv.certifications.map(c=>`<p style="font-size:9.5px;margin-bottom:5px;">· <b>${c.titre||c}</b>${c.organisme?' — '+c.organisme:''}</p>`).join(''):''}
        ${(cv.awards||[]).length>0?atsSec(ATS_ICONS.cert,"DISTINCTIONS","#166534","#DCFCE7")+cv.awards.map(a=>`<p style="font-size:9.5px;margin-bottom:5px;">· ${a}</p>`).join(''):''}
        ${(cv.portfolio||[]).length>0?atsSec(ATS_ICONS.bag,"PROJETS","#166534","#DCFCE7")+cv.portfolio.map(p=>`<div style="margin-bottom:8px;padding:8px;background:white;border:1px solid #DCFCE7;border-radius:4px;"><p style="font-size:10px;font-weight:700;color:#14532d;">${p.nom}</p><p style="font-size:9px;color:#374151;">${p.desc}</p></div>`).join(''):''}
        ${(cv.references||[]).length>0?atsSec(ATS_ICONS.ref,"RÉFÉRENCES","#166534","#DCFCE7")+cv.references.map(r=>`<div style="margin-bottom:8px;"><p style="font-size:10px;font-weight:700;color:#14532d;">${r.n||r.nom}</p><p style="font-size:9px;color:#16a34a;">${r.p||r.poste}</p></div>`).join(''):''}
      </div>
      <div style="width:210px;flex-shrink:0;padding-left:20px;">
        ${atsSec(ATS_ICONS.usr,"DÉTAILS","#166534","#DCFCE7")}
        ${window.renderDetailsSection(cv, '#166534', '#374151', { fontSize: '9.5px', marginBottom: '8px' })}
        <div style="height:10px;"></div>
        ${atsSec(ATS_ICONS.chk,"COMPÉTENCES","#166534","#DCFCE7")}
        ${(cv.competences||[]).map(s=>`<div style="display:flex;align-items:center;gap:7px;margin-bottom:7px;"><span style="color:#166534;">${ATS_ICONS.chk}</span><p style="font-size:9.5px;color:#374151;">${s}</p></div>`).join('')}
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.ln,"LANGUES","#166534","#DCFCE7")}
          ${(cv.langues||[]).map(l=>`<div style="margin-bottom:9px;"><p style="font-size:9.5px;font-weight:600;color:#1f2937;margin-bottom:3px;">${typeof l==='string'?l:l.langue||l}</p>${atsLangBar(typeof l==='string'?l:l.niveau||l,"#166534","#4ade80")}</div>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

function genA3(cv) {
  const s = getSmartLayout(cv);
  return `<div style="width:794px;min-height:1123px;font-family:'Montserrat',sans-serif;background:white;display:flex;flex-direction:column;">
    <div style="background:#111827;padding:36px 45px;color:white;">
      <h1 style="font-size:${s.nameSize};font-weight:900;margin-bottom:8px;line-height:0.9;">${cv.prenom} ${cv.nom}</h1>
      <p style="font-size:${s.headerSize};color:#9CA3AF;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">${cv.poste}</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;">
        <span style="font-size:10.5px;color:#D1D5DB;line-height:1.2;word-break:break-word;">${cv.email}</span>
        <span style="color:#4B5563;">|</span>
        <span style="font-size:10.5px;color:#D1D5DB;line-height:1.2;word-break:break-word;">${cv.telephone}</span>
        <span style="color:#4B5563;">|</span>
        <span style="font-size:10.5px;color:#D1D5DB;line-height:1.2;word-break:break-word;">${`${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim()}</span>
      </div>
    </div>
    <div style="margin:16px 45px;padding:12px 16px;background:#F9FAFB;border-left:4px solid #374151;border-radius:0 6px 6px 0;">
      <p style="font-size:8px;font-weight:700;color:#111827;letter-spacing:2px;margin-bottom:5px;">PROFIL</p>
      <p style="font-size:${s.profileSize};color:#374151;line-height:1.75;">${cv.profil}</p>
    </div>
    <div style="display:flex;gap:0;margin:0 45px 20px;flex:1;">
      <div style="flex:1.6;padding-right:24px;border-right:1px solid #E5E7EB;">
        ${atsSec(ATS_ICONS.bag,"EXPÉRIENCES","#111827","#E5E7EB")}
        ${(cv.experience||[]).map(e=>`<div style="margin-bottom:${s.itemGap};padding:11px 13px;background:#F9FAFB;border-left:4px solid #111827;">
          <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
            <p style="font-size:14px;font-weight:900;color:#111827;letter-spacing:-0.4px;">${typeof e==='string'?e:e.poste}</p>
            ${e.result?`<span style="font-size:8px;background:#111827;color:white;padding:2px 8px;border-radius:3px;">${e.result}</span>`:''}
          </div>
          <p style="font-size:9.5px;color:#374151;font-weight:600;margin-bottom:5px;">${e.employeur||''} <span style="font-weight:400;color:#9CA3AF;">· ${e.dates||''}</span></p>
          ${Array.isArray(e.missions)?e.missions.map(b=>atsBullet(b,"#374151")).join(''):atsBullet(e.missions||'',"#374151")}
        </div>`).join('')}
        ${atsSec(ATS_ICONS.sch,"FORMATION","#111827","#E5E7EB")}
        ${(cv.formation||[]).map(f=>`<div style="margin-bottom:9px;padding:9px 12px;border:1px solid #E5E7EB;border-radius:4px;display:flex;justify-content:space-between;">
          <div><p style="font-size:10.5px;font-weight:700;color:#111827;">${f.diplome}</p><p style="font-size:9px;color:#6B7280;">${f.ecole}</p></div>
          <p style="font-size:10px;color:#374151;font-weight:700;">${f.annee}</p>
        </div>`).join('')}
        ${(cv.certifications||[]).length>0?atsSec(ATS_ICONS.cert,"CERTIFICATIONS","#111827","#E5E7EB")+cv.certifications.map(c=> `<p style="font-size:9.5px;margin-bottom:5px;">· <b>${c.titre||c}</b>${c.organisme?' — '+c.organisme:''}</p>`).join(''):''}
        ${(cv.awards||[]).length>0?atsSec(ATS_ICONS.cert,"DISTINCTIONS","#111827","#E5E7EB")+cv.awards.map(a=>`<p style="font-size:9.5px;margin-bottom:5px;">· ${a}</p>`).join(''):''}
        ${(cv.portfolio||[]).length>0?atsSec(ATS_ICONS.bag,"PROJECTS","#111827","#E5E7EB")+cv.portfolio.map(p=>`<div style="margin-bottom:8px;"><p style="font-size:10.5px;font-weight:700;color:#111827;">${p.nom}</p><p style="font-size:9px;color:#374151;">${p.desc}</p></div>`).join(''):''}
      </div>
      <div style="width:210px;flex-shrink:0;padding-left:20px;">
        ${atsSec(ATS_ICONS.usr,"DÉTAILS","#111827","#E5E7EB")}
        ${window.renderDetailsSection(cv, '#111827', '#374151', { fontSize: '9.5px', marginBottom: '8px' })}
        <div style="height:10px;"></div>
        ${atsSec(ATS_ICONS.chk,"COMPÉTENCES","#111827","#E5E7EB")}
        ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#111827")).join('')}
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.ln,"LANGUES","#111827","#E5E7EB")}
          ${(cv.langues||[]).map(l=>`<div style="margin-bottom:9px;"><p style="font-size:9.5px;font-weight:600;margin-bottom:3px;">${typeof l==='string'?l:l.langue||l}</p>${atsLangBar(typeof l==='string'?l:l.niveau||l,"#111827","#6B7280")}</div>`).join('')}
        </div>
        ${(cv.references||[]).length>0?`<div style="margin-top:14px;">${atsSec(ATS_ICONS.ref,"RÉFÉRENCES","#111827","#E5E7EB")}${cv.references.map(r=>`<div style="margin-bottom:9px;"><p style="font-size:9.5px;font-weight:700;">${r.nom||r}</p><p style="font-size:8.5px;color:#6B7280;">${r.poste||''}</p></div>`).join('')}</div>`:''}
      </div>
    </div>
  </div>`;
}

function genA4(cv) {
  const s = getSmartLayout(cv);
  return `<div style="width:794px;min-height:1123px;font-family:'Raleway',sans-serif;background:white;display:flex;flex-direction:column;">
    <div style="border-left:8px solid #0f2a4a;padding:36px 45px;display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1px solid #BFDBFE;">
      <div>
        <h1 style="font-size:${s.nameSize};font-weight:900;color:#0f2a4a;margin-bottom:8px;line-height:0.9;">${cv.prenom} <span style="font-weight:300;">${cv.nom}</span></h1>
        <p style="font-size:${s.headerSize};color:#6B7280;letter-spacing:1.5px;text-transform:uppercase;">${cv.poste}</p>
      </div>
      <div style="text-align:right;">
        <p style="font-size:11px;color:#4B5563;margin-bottom:3px;line-height:1.2;word-break:break-word;">${cv.email}</p>
        <p style="font-size:11px;color:#4B5563;margin-bottom:3px;line-height:1.2;word-break:break-word;">${cv.telephone}</p>
        <p style="font-size:11px;color:#4B5563;line-height:1.2;word-break:break-word;">${`${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim()}</p>
      </div>
    </div>
    <div style="margin:16px 45px 16px 53px;padding:12px 16px;background:#EFF6FF;border-radius:6px;">
      <p style="font-size:8px;font-weight:700;color:#0f2a4a;letter-spacing:2px;margin-bottom:5px;">PROFIL</p>
      <p style="font-size:${s.profileSize};color:#1f2937;line-height:1.75;">${cv.profil}</p>
    </div>
    <div style="display:flex;gap:0;margin:0 45px 20px 53px;flex:1;">
      <div style="flex:1.5;padding-right:22px;border-right:1px solid #BFDBFE;">
        ${atsSec(ATS_ICONS.bag,"EXPÉRIENCES","#0f2a4a","#BFDBFE")}
        ${(cv.experience||[]).map(e=>`<div style="margin-bottom:${s.itemGap};padding:11px 13px;background:#F8FAFF;border:1px solid #DBEAFE;border-left:4px solid #0f2a4a;">
          <div style="display:flex;justify-content:space-between;margin-bottom:2px;">
            <p style="font-size:14px;font-weight:900;color:#0f2a4a;letter-spacing:-0.3px;">${typeof e==='string'?e:e.poste}</p>
            ${e.result?`<span style="font-size:8px;background:#0f2a4a;color:white;padding:2px 8px;border-radius:3px;">${e.result}</span>`:''}
          </div>
          <p style="font-size:9.5px;color:#1e3a8a;font-weight:600;margin-bottom:5px;">${e.employeur||''} <span style="font-weight:400;color:#9CA3AF;">· ${e.dates||''}</span></p>
          ${Array.isArray(e.missions)?e.missions.map(b=>atsBullet(b,"#0f2a4a")).join(''):atsBullet(e.missions||'',"#0f2a4a")}
        </div>`).join('')}
        ${atsSec(ATS_ICONS.sch,"FORMATION","#0f2a4a","#BFDBFE")}
        ${(cv.formation||[]).map(f=>`<div style="margin-bottom:9px;padding:9px 12px;border:1px solid #BFDBFE;border-radius:4px;display:flex;justify-content:space-between;">
          <div><p style="font-size:10.5px;font-weight:700;color:#0f2a4a;">${f.diplome}</p><p style="font-size:9px;color:#6B7280;">${f.ecole}</p></div>
          <p style="font-size:10px;color:#0f2a4a;font-weight:700;">${f.annee}</p>
        </div>`).join('')}
        ${(cv.certifications||[]).length>0?atsSec(ATS_ICONS.cert,"CERTIFICATIONS","#0f2a4a","#BFDBFE")+cv.certifications.map(c=>`<p style="font-size:9.5px;margin-bottom:5px;">· <b>${c.titre||c}</b>${c.organisme?' — '+c.organisme:''}</p>`).join(''):''}
        ${(cv.awards||[]).length>0?atsSec(ATS_ICONS.cert,"DISTINCTIONS","#0f2a4a","#BFDBFE")+cv.awards.map(a=>`<p style="font-size:9.5px;margin-bottom:5px;">· ${a}</p>`).join(''):''}
        ${(cv.portfolio||[]).length>0?atsSec(ATS_ICONS.bag,"PROJETS","#0f2a4a","#BFDBFE")+cv.portfolio.map(p=>`<div style="margin-bottom:8px;padding:8px;background:#F8FAFF;border:1px solid #BFDBFE;border-radius:4px;"><p style="font-size:10px;font-weight:700;color:#0f2a4a;">${p.nom}</p><p style="font-size:9px;color:#1e3a8a;">${p.desc}</p></div>`).join(''):''}
      </div>
      <div style="width:200px;flex-shrink:0;padding-left:20px;">
        ${atsSec(ATS_ICONS.usr,"DÉTAILS","#0f2a4a","#BFDBFE")}
        ${window.renderDetailsSection(cv, '#0f2a4a', '#374151', { fontSize: '9.5px', marginBottom: '8px' })}
        <div style="height:10px;"></div>
        ${atsSec(ATS_ICONS.chk,"COMPÉTENCES","#0f2a4a","#BFDBFE")}
        ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#0f2a4a")).join('')}
        <div style="margin-top:14px;">
          ${atsSec(ATS_ICONS.ln,"LANGUES","#0f2a4a","#BFDBFE")}
          ${(cv.langues||[]).map(l=>`<div style="margin-bottom:9px;"><p style="font-size:9.5px;font-weight:600;color:#0f2a4a;margin-bottom:3px;">${typeof l==='string'?l:l.langue||l}</p>${atsLangBar(typeof l==='string'?l:l.niveau||l,"#0f2a4a","#3b82f6")}</div>`).join('')}
        </div>
        ${(cv.references||[]).length>0?`<div style="margin-top:14px;">${atsSec(ATS_ICONS.ref,"RÉFÉRENCES","#0f2a4a","#BFDBFE")}${cv.references.map(r=>`<div style="margin-bottom:9px;"><p style="font-size:9.5px;font-weight:700;color:#0f2a4a;">${r.nom||r}</p><p style="font-size:8.5px;color:#6B7280;">${r.poste||''}</p></div>`).join('')}</div>`:''}
      </div>
    </div>
  </div>`;
}

  // Export to global scope
  Object.assign(window.cvGenerators, {
    genATS1, genATS2, genATS3, genATS4,
    genA1, genA2, genA3, genA4
  });
})();
