/**
 * Traditional and Cultural CV Templates - TerangaForge
 */

(function() {
  const { atsSec, ATS_ICONS, getSmartLayout, atsBullet } = window; // Fallback if not on cvGenerators yet

  function genT1(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-afrique" style="font-family:'Raleway',sans-serif; min-height:1123px; display:flex;">
      <svg style="position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none;" viewBox="0 0 794 1123" preserveAspectRatio="none">
        <polygon points="0,0 120,0 0,120" fill="#D4AF37" opacity="0.15"/>
        <polygon points="794,0 674,0 794,120" fill="#D4AF37" opacity="0.1"/>
      </svg>
      <div class="sidebar" style="background:#130b29;color:white; display:flex; flex-direction:column; justify-content:center;">
        <div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,#D4AF37,#b38d22);margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:40px;font-weight:900;color:white;border:3px solid #D4AF37;">${(cv.prenom||'U')[0]}</div>
        <h1 style="color:#D4AF37;font-size:16px;font-weight:800;text-align:center;letter-spacing:2px;margin-bottom:4px;">${(cv.prenom||'').toUpperCase()}</h1>
        <h1 style="color:white;font-size:16px;font-weight:800;text-align:center;letter-spacing:2px;margin-bottom:6px;">${(cv.nom||'').toUpperCase()}</h1>
        <p style="color:#b38d22;font-size:9px;text-align:center;letter-spacing:3px;margin-bottom:${s.sectionGap};text-transform:uppercase;">${cv.poste||''}</p>
        <div style="height:1px;background:linear-gradient(90deg,transparent,#D4AF37,transparent);margin-bottom:${s.sectionGap};"></div>
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;">CONTACT</p>
        ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="color:#c4b5fd;font-size:9px;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
        <div style="margin-bottom:${s.itemGap};"></div>
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;">COMPÉTENCES</p>
        ${(cv.competences||[]).map(c => `<p style="color:#e2d9f3;font-size:9px;margin-bottom:4px;">▪ ${c}</p>`).join('')}
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;">LANGUES</p>
        ${(cv.langues||[]).map(c => `<p style="color:#e2d9f3;font-size:9px;margin-bottom:4px;">▪ ${c}</p>`).join('')}

        ${(cv.references && cv.references.length > 0) ? `
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;margin-top:20px;">RÉFÉRENCES</p>
        ${cv.references.map(r => `<div style="margin-bottom:8px;"><p style="color:white;font-size:9px;font-weight:700;">${r.nom}</p><p style="color:#c4b5fd;font-size:8px;">${r.poste} @ ${r.entreprise}</p></div>`).join('')}` : ''}
      </div>
      <div class="main" style="padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:flex-start;">
        <p style="color:#7c3aed;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:2px;">PROFIL</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:12px;"></div>
        <p style="font-size:${s.profileSize};color:#374151;line-height:1.7;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
        <p style="color:#7c3aed;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:2px;">EXPÉRIENCES</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:14px;"></div>
        ${(cv.experience||[]).map(e => `
          <div style="margin-bottom:${s.itemGap};padding-left:14px;border-left:3px solid #D4AF37;">
            <p style="font-size:11px;font-weight:700;color:#130b29;">${typeof e === 'string' ? e : e.poste}</p>
            ${e.employeur ? `<p style="font-size:10px;color:#6b21a8;font-weight:600;">${e.employeur}</p>` : ''}
            ${e.dates ? `<p style="font-size:9px;color:#D4AF37;margin-bottom:4px;">${e.dates}</p>` : ''}
            <div style="font-size:${s.baseSize};color:#4b5563;line-height:1.6;">${e.missions||''}</div>
          </div>`).join('')}

        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <p style="color:#7c3aed;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:2px;margin-top:20px;">PORTFOLIO & PROJETS</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:14px;"></div>
        ${cv.portfolio.map(p => `<div style="margin-bottom:10px;padding-left:14px;border-left:3px solid #6366f1;"><p style="font-size:10px;font-weight:700;">${p.nom}</p><p style="font-size:9px;color:#4b5563;">${p.description}</p></div>`).join('')}` : ''}

        ${(cv.certifications && cv.certifications.length > 0) ? `
        <p style="color:#7c3aed;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:2px;margin-top:20px;">CERTIFICATIONS</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:14px;"></div>
        ${cv.certifications.map(c => `<div style="margin-bottom:8px;padding-left:14px;border-left:3px solid #D4AF37;"><p style="font-size:10px;font-weight:700;">${c.titre}</p><p style="font-size:9px;color:#6b21a8;">${c.organisme} (${c.annee})</p></div>`).join('')}` : ''}
      </div>
    </div>`;
  }

  function genT2(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-degrade" style="font-family:'Montserrat',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div class="hero" style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding:${s.isVeryShort ? '65px 40px' : '48px 40px'};">
        <div style="display:flex;align-items:center;gap:28px;position:relative;z-index:2;">
          <div style="width:${s.isVeryShort ? '130px' : '110px'};height:${s.isVeryShort ? '130px' : '110px'};border-radius:50%;background:rgba(255,255,255,0.1);border:3px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:900;color:white;flex-shrink:0;">${(cv.prenom||'U')[0]}</div>
          <div>
            <h1 style="color:white;font-size:32px;font-weight:800;letter-spacing:-1px;margin-bottom:4px;">${cv.prenom||''} ${cv.nom||''}</h1>
            <p style="color:rgba(255,255,255,0.7);font-size:13px;font-weight:500;letter-spacing:3px;text-transform:uppercase;">${cv.poste||''}</p>
          </div>
        </div>
      </div>
      <div class="body" style="padding:${s.mainPadding}; flex:1;">
        <div class="sidebar" style="display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:10px;font-weight:700;color:#1e293b;letter-spacing:2px;margin-bottom:12px;">CONTACT</p>
          ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:9px;color:#475569;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
          <div style="height:1px;background:#e2e8f0;margin:16px 0;"></div>
          <p style="font-size:10px;font-weight:700;color:#1e293b;letter-spacing:2px;margin-bottom:12px;">COMPÉTENCES</p>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            ${(cv.competences||[]).map(c => `<div style="background:white;border:1px solid #cbd5e1;border-radius:4px;padding:6px 10px;font-size:9px;color:#334155;">${c}</div>`).join('')}
          </div>
        </div>
        <div class="main" style="display:flex; flex-direction:column; justify-content:center;">
          <div style="margin-bottom:${s.sectionGap};">
            <p style="font-size:11px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:10px;">PROFIL</p>
            <p style="font-size:${s.profileSize};color:#475569;line-height:1.8;">${cv.profil||''}</p>
          </div>
          <p style="font-size:11px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:14px;">EXPÉRIENCES</p>
          ${(cv.experience||[]).map(e => `
            <div style="margin-bottom:${s.itemGap};padding:14px;background:#f8fafc;border-radius:8px;border-left:3px solid #3b82f6;">
              <p style="font-size:11px;font-weight:700;color:#0f172a;">${typeof e === 'string' ? e : e.poste}</p>
              <p style="font-size:10px;color:#3b82f6;margin-bottom:4px;">${e.employeur||''} ${e.dates ? `— ${e.dates}` : ''}</p>
              <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
            </div>`).join('')}
          <p style="font-size:11px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:14px;">FORMATION</p>
          ${(cv.formation||[]).map(e => `
            <div style="margin-bottom:24px;">
              <p style="font-weight:800;font-size:12px;color:#0f172a;">${typeof e === 'string' ? e : e.diplome}</p>
              <p style="font-size:10px;color:#3b82f6;margin-bottom:6px;font-weight:600;">${e.ecole||''} ${e.annee ? `· ${e.annee}` : ''}</p>
              <p style="font-size:9.5px;color:#475569;line-height:1.7;">${e.missions||''}</p>
            </div>`).join('')}

          ${(cv.certifications && cv.certifications.length > 0) ? `
          <p style="font-size:11px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:14px;margin-top:20px;">CERTIFICATIONS</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${cv.certifications.map(c => `<div style="background:#f8fafc;padding:10px;border-radius:6px;border-top:2px solid #3b82f6;"><p style="font-size:10px;font-weight:700;">${c.titre}</p><p style="font-size:8px;color:#64748b;">${c.organisme}</p></div>`).join('')}
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genT3(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-tropical" style="font-family:'Playfair Display',serif; min-height:1123px; display:flex;">
      <div class="sidebar" style="background:#1a2e0f; display:flex; flex-direction:column; justify-content:center;">
        <div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,#D4AF37,#a6882b);margin:0 auto 20px;display:flex;align-items:center;justify-content:center;font-size:42px;font-weight:900;color:white;">${(cv.prenom||'U')[0]}</div>
        <h1 style="color:#D4AF37;font-size:18px;font-weight:700;text-align:center;">${(cv.prenom||'').toUpperCase()} ${(cv.nom||'').toUpperCase()}</h1>
        <p style="color:rgba(212,175,55,0.7);font-size:9px;text-align:center;letter-spacing:2px;margin-bottom:28px;">${cv.poste||''}</p>
        <div style="height:1px;background:rgba(212,175,55,0.3);margin-bottom:16px;"></div>
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:2px;margin-bottom:10px;">Contact</p>
        ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="color:#d1fae5;font-size:9px;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
      </div>
      <div class="main" style="padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:flex-start;">
        <h2 style="font-size:18px;font-weight:700;color:#1a2e0f;margin-bottom:10px;border-bottom:1px solid #e5f0dc;padding-bottom:6px;">PROFIL</h2>
        <p style="font-size:${s.profileSize};color:#374151;line-height:1.8;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
        <h2 style="font-size:10px;font-weight:700;color:#2d5016;letter-spacing:2px;margin-bottom:14px;">EXPÉRIENCES</h2>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};padding-left:16px;border-left:2px solid #D4AF37;">
          <p style="font-size:12px;font-weight:700;color:#1a2e0f;">${typeof e === 'string' ? e : e.poste}</p>
          <p style="font-size:10px;color:#a6882b;margin-bottom:4px;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
          <div style="font-size:${s.baseSize};color:#4b5563;line-height:1.6;">${e.missions||''}</div>
        </div>`).join('')}

        <h2 style="font-size:10px;font-weight:700;color:#2d5016;letter-spacing:2px;margin-bottom:14px;">FORMATION</h2>
        ${(cv.formation||[]).map(e => `<div style="margin-bottom:16px;padding-left:16px;border-left:2px solid #D4AF37;">
          <p style="font-size:12px;font-weight:700;color:#1a2e0f;">${typeof e === 'string' ? e : e.diplome}</p>
          <p style="font-size:10px;color:#a6882b;margin-bottom:4px;">${e.ecole||''} ${e.annee ? `· ${e.annee}` : ''}</p>
          <p style="font-size:9.5px;color:#4b5563;line-height:1.6;">${e.missions||''}</p>
        </div>`).join('')}

        ${(cv.certifications && cv.certifications.length > 0) ? `
        <h2 style="font-size:10px;font-weight:700;color:#2d5016;letter-spacing:2px;margin-bottom:14px;margin-top:20px;">CERTIFICATIONS</h2>
        ${cv.certifications.map(c => `<div style="margin-bottom:10px;padding-left:16px;border-left:2px solid #D4AF37;"><p style="font-size:11px;font-weight:700;color:#1a2e0f;">${c.titre}</p><p style="font-size:9px;color:#a6882b;">${c.organisme} (${c.annee})</p></div>`).join('')}` : ''}
      </div>
    </div>`;
  }

  function genT4(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-diplo" style="font-family:'Inter',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div class="header" style="color:white;background:#0f172a; padding:${s.isVeryShort ? '60px 40px' : '40px'};">
        <h1 style="font-size:28px;font-weight:700;margin-bottom:4px;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="color:#94a3b8;font-size:10px;letter-spacing:3px;text-transform:uppercase;">${cv.poste||''}</p>
      </div>
      <div class="body" style="flex:1;">
        <div class="sidebar" style="background:#f1f5f9; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:9px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:12px;border-bottom:2px solid #0f172a;padding-bottom:6px;">CONTACT</p>
          ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:9px;color:#475569;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
          <div style="height:12px;"></div>
          <p style="font-size:9px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:12px;border-bottom:2px solid #0f172a;padding-bottom:6px;">COMPÉTENCES</p>
          ${(cv.competences||[]).map(c => `<p style="font-size:9px;color:#475569;margin-bottom:4px;">▪ ${c}</p>`).join('')}
        </div>
        <div class="main" style="padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:center;">
          <div style="margin-bottom:${s.sectionGap};padding:16px;background:#f8fafc;border-left:4px solid #0f172a;">
            <p style="font-size:${s.profileSize};color:#334155;line-height:1.7;">${cv.profil||''}</p>
          </div>
          ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
            <p style="font-size:12px;font-weight:700;color:#0f172a;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:10px;color:#64748b;margin-bottom:6px;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
            <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  function genT5(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-minimal-design" style="position:relative; font-family:'Inter',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div class="top-bar"></div><svg style="position:absolute;top:0;right:0;width:400px;height:100%;pointer-events:none;opacity:0.02;" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="0" y1="0" x2="100" y2="100" stroke="#000" stroke-width="0.5"/><line x1="100" y1="0" x2="0" y2="100" stroke="#000" stroke-width="0.5"/></svg>
      <div class="header">
        <h1 style="font-size:${s.isVeryShort ? '42px' : '36px'};font-weight:800;color:#111;margin-bottom:4px;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="font-size:11px;color:#666;letter-spacing:3px;text-transform:uppercase;">${cv.poste||''}</p>
      </div>
      <div class="body" style="padding:${s.mainPadding}; flex:1;">
        <div class="sidebar" style="display:flex; flex-direction:column; justify-content:center;">
          <p style="font-weight:700;font-size:9px;text-transform:uppercase;color:#111;margin-bottom:10px;letter-spacing:2px;">Contact</p>
          ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:9px;color:#555;margin-bottom:4px;display:flex;align-items:center;gap:5px;line-height:1;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
          <div style="height:20px;"></div>
          <p style="font-weight:700;font-size:9px;text-transform:uppercase;color:#111;margin-bottom:10px;letter-spacing:2px;">Skills</p>
          ${(cv.competences||[]).map(c => `<p style="font-size:9px;color:#555;margin-bottom:4px;">${c}</p>`).join('')}
        </div>
        <div class="main" style="display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:${s.profileSize};line-height:1.8;color:#333;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
          <p style="font-weight:700;font-size:9px;text-transform:uppercase;color:#111;margin-bottom:16px;letter-spacing:2px;border-bottom:1px solid #eee;padding-bottom:4px;">Experience</p>
          ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
            <p style="font-weight:700;font-size:11px;color:#111;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:9px;color:#888;margin-bottom:4px;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
            <div style="font-size:${s.baseSize};color:#555;line-height:1.6;">${e.missions||''}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  function genT6(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-bordeaux" style="font-family:'Raleway',sans-serif; min-height:1123px; display:flex;">
      <div class="sidebar" style="color:white;background:#4a0e22; display:flex; flex-direction:column; justify-content:center;">
        <h1 style="color:#D4AF37;font-size:18px;font-weight:700;text-align:center;">${(cv.prenom||'').toUpperCase()} ${(cv.nom||'').toUpperCase()}</h1>
        <p style="font-size:9px;text-align:center;letter-spacing:2px;color:#e2e8f0;margin-bottom:24px;">${cv.poste||''}</p>
        <div style="height:1px;background:rgba(212,175,55,0.3);margin-bottom:16px;"></div>
        ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:9px;color:#cbd5e1;margin-bottom:6px;display:flex;align-items:center;justify-content:center;gap:5px;line-height:1;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
        <div style="height:1px;background:rgba(212,175,55,0.3);margin:16px 0;"></div>
        <p style="font-size:9px;font-weight:700;color:#D4AF37;letter-spacing:2px;margin-bottom:10px;text-align:center;">COMPÉTENCES</p>
        ${(cv.competences||[]).map(c => `<p style="font-size:9px;color:#cbd5e1;margin-bottom:4px;text-align:center;">${c}</p>`).join('')}
      </div>
      <div class="main" style="padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:flex-start;">
        <h2 style="font-size:${s.isVeryShort ? '38px' : '32px'};color:#4a0e22;font-weight:800;margin-bottom:12px;">${cv.prenom||''} <span style="color:#D4AF37;">${cv.nom||''}</span></h2>
        <p style="font-size:${s.profileSize};line-height:1.8;color:#334155;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
        <p style="font-size:10px;font-weight:800;color:#4a0e22;letter-spacing:2px;margin-bottom:16px;text-transform:uppercase;">Expériences</p>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};border-left:2px solid #D4AF37;padding-left:14px;">
          <p style="font-weight:800;font-size:12px;color:#1e293b;">${typeof e === 'string' ? e : e.poste}</p>
          <p style="font-size:10px;color:#64748b;margin-bottom:4px;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
          <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
        </div>`).join('')}
      </div>
    </div>`;
  }

  function genT7(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-canada1" style="font-family:'Inter',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start; padding:${s.mainPadding};">
      <div style="text-align:center;border-bottom:2px solid #0f172a;padding-bottom:16px;">
        <h1 style="font-size:28px;font-weight:800;color:#0f172a;margin-bottom:8px;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="font-size:10px;color:#475569;display:flex;align-items:center;justify-content:center;gap:15px;flex-wrap:wrap;line-height:1;">${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<span style="display:flex;align-items:center;gap:5px;white-space:nowrap;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</span>`).join('')}</p>
      </div>
      <div style="margin-top:20px;">
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:11px;margin-bottom:8px;">Summary</p>
        <p style="font-size:${s.profileSize};line-height:1.8;color:#334155;">${cv.profil||''}</p>
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:11px;margin-top:20px;margin-bottom:12px;">Experience</p>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
          <div style="display:flex;justify-content:space-between;align-items:baseline;">
            <p style="font-weight:700;font-size:11px;color:#0f172a;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:9px;color:#64748b;">${e.dates||''}</p>
          </div>
          <p style="font-size:10px;color:#334155;margin-bottom:4px;font-weight:500;">${e.employeur||''}</p>
          <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
        </div>`).join('')}
      </div>
    </div>`;
  }

  function genT8(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-canada2" style="font-family:'Montserrat',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:stretch;">
      <div class="header" style="background:#991b1b;padding:32px 40px;color:white;">
        <h1 style="font-size:26px;font-weight:800;margin-bottom:4px;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#fca5a5;">${cv.poste||''}</p>
        <p style="font-size:9px;color:#fecaca;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:15px;flex-wrap:wrap;line-height:1;">${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<span style="display:flex;align-items:center;gap:5px;white-space:nowrap;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</span>`).join('')}</p>
      </div>
      <div class="body" style="padding:${s.mainPadding}; flex:1;">
        <div class="sidebar" style="background:#f8fafc;border-right:1px solid #e2e8f0; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-weight:800;color:#991b1b;font-size:9px;letter-spacing:1px;margin-bottom:12px;">COMPÉTENCES</p>
          ${(cv.competences||[]).map(c => `<p style="font-size:9px;color:#334155;margin-bottom:6px;">${c}</p>`).join('')}
        </div>
        <div class="main" style="display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:${s.profileSize};line-height:1.8;color:#334155;background:#fef2f2;padding:16px;border-left:4px solid #991b1b;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
          <p style="font-weight:800;color:#991b1b;font-size:11px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">Expérience</p>
          ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
            <p style="font-weight:800;font-size:12px;color:#1e293b;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:10px;color:#991b1b;margin-bottom:6px;font-weight:600;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
            <div style="font-size:${s.baseSize};color:#475569;line-height:1.7;">${e.missions||''}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  function genT9(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-modern-split" style="font-family:'Outfit',sans-serif; min-height:1123px; display:flex;">
      <div class="sidebar" style="width:280px;background:#f8fafc;border-right:1px solid #e2e8f0;padding:40px 30px; display:flex; flex-direction:column; justify-content:center;">
        <div style="width:120px;height:120px;border-radius:24px;background:#0f172a;margin-bottom:24px;display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:900;color:white;transform:rotate(-3deg);">${(cv.prenom||'U')[0]}</div>
        <h1 style="font-size:24px;font-weight:900;color:#0f172a;line-height:1.1;margin-bottom:8px;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="font-size:10px;color:#6366f1;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${cv.poste||''}</p>
        <div style="height:30px;"></div>
        <p style="font-size:9px;font-weight:800;color:#0f172a;letter-spacing:1px;margin-bottom:12px;">CONTACT</p>
        ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: cv.ville, i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:9px;color:#475569;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
        <div style="height:30px;"></div>
        <p style="font-size:9px;font-weight:800;color:#0f172a;letter-spacing:1px;margin-bottom:12px;">SKILLS</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${(cv.competences||[]).map(c => `<span style="font-size:9px;background:white;border:1px solid #e2e8f0;padding:4px 10px;border-radius:6px;color:#334155;font-weight:600;">${c}</span>`).join('')}
        </div>
      </div>
      <div class="main" style="padding:${s.mainPadding}; flex:1; display:flex; flex-direction:column; justify-content:stretch;">
        <div style="margin-bottom:${s.sectionGap};">
          <p style="font-size:11px;font-weight:900;color:#0f172a;letter-spacing:2px;margin-bottom:12px;">PROFILE</p>
          <p style="font-size:${s.profileSize};color:#475569;line-height:1.7;">${cv.profil||''}</p>
        </div>
        <p style="font-size:11px;font-weight:900;color:#0f172a;letter-spacing:2px;margin-bottom:16px;">EXPERIENCE</p>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};position:relative;padding-left:20px;">
          <div style="position:absolute;left:0;top:6px;width:6px;height:6px;background:#6366f1;border-radius:50%;"></div>
          <p style="font-size:12px;font-weight:800;color:#0f172a;margin-bottom:2px;">${typeof e === 'string' ? e : e.poste}</p>
          <p style="font-size:10px;color:#6366f1;font-weight:700;margin-bottom:6px;">${e.employeur||''} · ${e.dates||''}</p>
          <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
        </div>`).join('')}
      </div>
    </div>`;
  }

  function genT10(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-elegant-gold" style="font-family:'Lora',serif; background:#fff; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start; padding:${s.mainPadding};">
      <div style="text-align:center;margin-bottom:${s.sectionGap};">
        <h1 style="font-size:38px;font-weight:400;color:#1a1a1a;margin-bottom:6px;letter-spacing:2px;">${cv.prenom||''} <span style="font-weight:700;color:#b38d22;">${cv.nom||''}</span></h1>
        <p style="font-size:11px;color:#b38d22;letter-spacing:4px;text-transform:uppercase;font-weight:700;">${cv.poste||''}</p>
        <div style="width:60px;height:1px;background:#b38d22;margin:16px auto;"></div>
        <p style="font-size:9.5px;color:#666;display:flex;align-items:center;justify-content:center;gap:12px;">${[{v: cv.email}, {v: cv.telephone}, {v: cv.ville}].filter(x => x.v).map(x => x.v).join('  ·  ')}</p>
      </div>
      <div style="flex:1;">
        <div style="margin-bottom:${s.sectionGap};">
          <p style="font-size:11px;font-weight:700;color:#1a1a1a;letter-spacing:2px;margin-bottom:12px;border-bottom:1px solid #e5e5e5;padding-bottom:6px;">PROFIL PERSONNEL</p>
          <p style="font-size:${s.profileSize};color:#444;line-height:1.8;font-style:italic;">"${cv.profil||''}"</p>
        </div>
        <p style="font-size:11px;font-weight:700;color:#1a1a1a;letter-spacing:2px;margin-bottom:16px;border-bottom:1px solid #e5e5e5;padding-bottom:6px;">PARCOURS PROFESSIONNEL</p>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
          <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px;">
            <p style="font-size:12px;font-weight:700;color:#1a1a1a;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:9.5px;color:#b38d22;font-weight:700;">${e.dates||''}</p>
          </div>
          <p style="font-size:10px;color:#666;font-weight:600;margin-bottom:8px;">${e.employeur||''}</p>
          <div style="font-size:${s.baseSize};color:#444;line-height:1.7;">${e.missions||''}</div>
        </div>`).join('')}
      </div>
    </div>`;
  }

  function genT11(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-creative-blue" style="font-family:'Inter',sans-serif; min-height:1123px; display:flex;">
      <div class="sidebar" style="width:80px;background:#2563eb;display:flex;flex-direction:column;align-items:center;padding:40px 0; display:flex; flex-direction:column; justify-content:center;">
        <div style="width:40px;height:40px;background:white;border-radius:12px;display:flex;align-items:center;justify-content:center;color:#2563eb;font-weight:900;font-size:18px;margin-bottom:40px;">${(cv.prenom||'U')[0]}</div>
        ${['EXP','EDU','SKL','CNT'].map(t => `<div style="writing-mode:vertical-rl;text-orientation:mixed;color:rgba(255,255,255,0.6);font-size:9px;font-weight:700;letter-spacing:4px;margin-bottom:40px;">${t}</div>`).join('')}
      </div>
      <div class="main" style="flex:1;padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:flex-start;">
        <div style="margin-bottom:${s.sectionGap};">
          <h1 style="font-size:42px;font-weight:900;color:#1e3a8a;line-height:1;margin-bottom:8px;">${cv.prenom||''}</h1>
          <h1 style="font-size:42px;font-weight:900;color:#2563eb;line-height:1;margin-bottom:12px;">${cv.nom||''}</h1>
          <p style="font-size:11px;color:#64748b;letter-spacing:4px;text-transform:uppercase;font-weight:700;">${cv.poste||''}</p>
        </div>
        <div style="margin-bottom:${s.sectionGap};">
          <p style="font-size:${s.profileSize};line-height:1.7;color:#475569;border-left:4px solid #2563eb;padding-left:20px;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
        </div>
        ${(cv.experience||[]).map(e => `
          <div style="margin-bottom:${s.itemGap};">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:4px;">
              <div style="width:8px;height:8px;background:#2563eb;border-radius:2px;"></div>
              <p style="font-size:12px;font-weight:800;color:#1e3a8a;">${typeof e === 'string' ? e : e.poste}</p>
            </div>
            <p style="font-size:10px;color:#2563eb;font-weight:600;margin-left:20px;">${e.employeur||''} · ${e.dates||''}</p>
            <div style="font-size:${s.baseSize};color:#64748b;line-height:1.6;margin-left:20px;margin-top:6px;">${e.missions||''}</div>
          </div>`).join('')}
      </div>
    </div>`;
  }

  function genT12(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-onyx-minimal" style="font-family:'Manrope',sans-serif; background:#fff; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start; padding:${s.mainPadding};">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:${s.sectionGap};border-bottom:4px solid #000;padding-bottom:20px;">
        <h1 style="font-size:48px;font-weight:900;letter-spacing:-2px;color:#000;line-height:0.9;">${cv.prenom||'UN'}<br>${cv.nom||'KNOWN'}</h1>
        <div style="text-align:right;">
          <p style="font-size:11px;font-weight:700;color:#000;text-transform:uppercase;letter-spacing:3px;">${cv.poste||''}</p>
          <p style="font-size:9px;color:#666;margin-top:8px;">${cv.email} · ${cv.telephone}</p>
        </div>
      </div>
      <div style="display:grid;grid-template-columns: 1fr 220px; gap:48px;">
        <div>
          <div style="margin-bottom:${s.sectionGap};">
            <p style="font-size:${s.profileSize};line-height:1.6;color:#333;font-weight:500;">${cv.profil||''}</p>
          </div>
          <p style="font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:24px;color:#000;">Work Experience</p>
          ${(cv.experience||[]).map(e => `
            <div style="margin-bottom:${s.itemGap};">
              <p style="font-size:13px;font-weight:800;color:#000;margin-bottom:2px;">${typeof e === 'string' ? e : e.poste}</p>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;"><p style="font-size:10px;color:#666;">${e.employeur||''}</p><p style="font-size:10px;font-weight:700;color:#000;">${e.dates||''}</p></div>
              <div style="font-size:${s.baseSize};color:#444;line-height:1.6;">${e.missions||''}</div>
            </div>`).join('')}
        </div>
        <div style="display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:20px;color:#000;">Skills</p>
          ${(cv.competences||[]).map(c => `<div style="margin-bottom:12px;"><p style="font-size:11px;font-weight:700;color:#000;margin-bottom:4px;">${c}</p><div style="height:4px;background:#eee;"><div style="width:85%;height:100%;background:#000;"></div></div></div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  function genS2(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-kente" style="width:794px;min-height:1123px;display:flex;font-family:'Lora',serif;background:#FFFCF7;overflow:hidden; justify-content:flex-start;">
      <div style="width:268px;flex-shrink:0;position:relative;overflow:hidden; background:linear-gradient(170deg,#6B2318 0%,#8B3A2C 30%,#7a2e20 60%,#5a1d14 100%);">
        <svg style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;" viewBox="0 0 268 1123" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="kente_main" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <rect x="0" y="0"  width="32" height="8"  fill="#D4AF37" opacity="0.18"/>
              <rect x="0" y="8"  width="32" height="8"  fill="#000"    opacity="0.1"/>
              <rect x="0" y="16" width="32" height="8"  fill="#E8C860" opacity="0.12"/>
              <rect x="0" y="24" width="32" height="8"  fill="#000"    opacity="0.06"/>
              <rect x="0"  y="0" width="8"  height="32" fill="#D4AF37" opacity="0.1"/>
              <rect x="16" y="0" width="8"  height="32" fill="#D4AF37" opacity="0.08"/>
            </pattern>
          </defs>
          <rect width="268" height="1123" fill="url(#kente_main)"/>
          <line x1="267" y1="0" x2="267" y2="1123" stroke="#D4AF37" stroke-width="1.5" opacity="0.5"/>
        </svg>
        <div style="position:relative;z-index:10;padding:32px 20px 28px;display:flex;flex-direction:column;align-items:center;height:100%; justify-content:center;">
          <div style="width:120px;height:120px;border-radius:50%;background:rgba(255,255,255,0.12);border:3px solid rgba(212,175,55,0.7);display:flex;align-items:center;justify-content:center;margin-bottom:14px;"><span style="color:rgba(255,255,220,0.45);">${ATS_ICONS.usr}</span></div>
          <h2 style="font-size:16px;font-weight:700;color:#FFF5DC;text-align:center;letter-spacing:0.5px;margin-bottom:3px;">${cv.prenom} ${cv.nom}</h2>
          <p style="font-size:8px;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;text-align:center;margin-bottom:18px;">${cv.poste}</p>
          <div style="width:100%;margin-bottom:16px;">
            <p style="font-size:8px;font-weight:700;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:9px;text-align:center;">CONTACT</p>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.mail}</span><p style="font-size:9px;color:rgba(255,245,220,0.8);line-height:1;">${cv.email}</p></div>
            <div style="display:flex;align-items:center;gap:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.ph}</span><p style="font-size:9px;color:rgba(255,245,220,0.8);line-height:1;">${cv.telephone}</p></div>
          </div>
        </div>
      </div>
      <div style="flex:1;background:#FFFCF7;padding:42px 34px;display:flex;flex-direction:column; justify-content:flex-start;">
        <div style="margin-bottom:22px;">
          <h1 style="font-size:38px;font-weight:700;color:#2C1810;line-height:1;">${cv.prenom}<br><span style="font-style:italic;color:#8B3A2C;">${cv.nom}</span></h1>
          <p style="font-size:10px;color:#8B3A2C;letter-spacing:4px;text-transform:uppercase;">${cv.poste}</p>
        </div>
        <div style="margin-bottom:${s.sectionGap};padding:16px 18px;background:rgba(139,58,44,0.05);border-left:3px solid #D4AF37;border-radius:0 6px 6px 0;">
          <p style="font-size:9px;font-weight:700;color:#8B3A2C;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:8px;">PROFIL</p>
          <p style="font-size:${s.baseSize};color:#4A3020;line-height:${s.lineHeight};font-style:italic;">${cv.profil}</p>
        </div>
        <div style="margin-bottom:${s.sectionGap};">
          ${atsSec(ATS_ICONS.bag, "EXPÉRIENCES", "#2C1810", "#E8D5B0")}
          ${(cv.experience || []).map(e => `
            <div style="margin-bottom:${s.itemGap};padding-left:14px;border-left:2px solid #E8D5B0;position:relative;">
              <div style="position:absolute;left:-5px;top:5px;width:8px;height:8px;background:#D4AF37;border-radius:50%;"></div>
              <p style="font-size:12px;font-weight:700;color:#2C1810;">${typeof e === 'string' ? e : e.poste}</p>
              <p style="font-size:10px;color:#8B3A2C;font-style:italic;">${e.employeur || ''}</p>
            </div>`).join('')}
        </div>
      </div>
    </div>`;
  }

  // Registering templates
  Object.assign(window.cvGenerators, {
    genT1, genT2, genT3, genT4, genT5, genT6, genT7, genT8, genT9, genT10, genT11, genT12, genS2
  });
})();

