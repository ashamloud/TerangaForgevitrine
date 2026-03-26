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
        <h1 style="color:#D4AF37;font-size:calc(${s.nameSize} * 0.45);font-weight:800;text-align:center;letter-spacing:2px;margin-bottom:4px;line-height:1;">${(cv.prenom||'').toUpperCase()}</h1>
        <h1 style="color:white;font-size:calc(${s.nameSize} * 0.45);font-weight:800;text-align:center;letter-spacing:2px;margin-bottom:6px;line-height:1;">${(cv.nom||'').toUpperCase()}</h1>
        <p style="color:#b38d22;font-size:9px;text-align:center;letter-spacing:3px;margin-bottom:${s.sectionGap};text-transform:uppercase;">${cv.poste||''}</p>
        <div style="height:1px;background:linear-gradient(90deg,transparent,#D4AF37,transparent);margin-bottom:${s.sectionGap};"></div>
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;">CONTACT</p>
        ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="color:#c4b5fd;font-size:9px;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
        <div style="margin-bottom:${s.itemGap};"></div>
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;">DÉTAILS</p>
        ${window.renderDetailsSection(cv, '#D4AF37', '#e2d9f3', { fontSize: '9px', marginBottom: '6px' })}
        <div style="margin-bottom:${s.itemGap};"></div>
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;">COMPÉTENCES</p>
        ${(cv.competences||[]).map(c => `<p style="color:#e2d9f3;font-size:9px;margin-bottom:4px;">▪ ${c}</p>`).join('')}
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;">LANGUES</p>
        ${(cv.langues||[]).map(c => `<p style="color:#e2d9f3;font-size:9px;margin-bottom:4px;">▪ ${typeof c === 'string' ? c : c.langues}</p>`).join('')}
        ${(cv.centres && cv.centres.length > 0) ? `
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;margin-top:20px;">LOISIRS</p>
        ${cv.centres.map(c => `<p style="color:#e2d9f3;font-size:9px;margin-bottom:4px;">▪ ${c}</p>`).join('')}` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <p style="color:#D4AF37;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:12px;margin-top:20px;">RÉFÉRENCES</p>
        ${cv.references.map(r => `<div style="margin-bottom:8px;"><p style="color:white;font-size:9px;font-weight:700;">${r.n || r.nom}</p><p style="color:#c4b5fd;font-size:8px;">${r.p || r.poste}</p></div>`).join('')}` : ''}
      </div>
      <div class="main" style="padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:flex-start;">
        <p style="color:#7c3aed;font-size:11px;font-weight:900;letter-spacing:2px;margin-bottom:4px;">PROFIL</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:12px;"></div>
        <p style="font-size:${s.profileSize};color:#374151;line-height:1.7;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
        <p style="color:#7c3aed;font-size:11px;font-weight:900;letter-spacing:2px;margin-bottom:4px;">EXPÉRIENCES</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:14px;"></div>
        ${(cv.experience||[]).map(e => `
          <div style="margin-bottom:${s.itemGap};padding-left:14px;border-left:3px solid #D4AF37;">
            <p style="font-size:14px;font-weight:900;color:#130b29;letter-spacing:-0.2px;">${typeof e === 'string' ? e : e.poste}</p>
            ${e.employeur ? `<p style="font-size:10.5px;color:#6b21a8;font-weight:700;">${e.employeur}</p>` : ''}
            ${e.dates ? `<p style="font-size:9px;color:#D4AF37;margin-bottom:6px;">${e.dates}</p>` : ''}
            <div style="font-size:${s.baseSize};color:#4b5563;line-height:1.6;">${e.missions||''}</div>
          </div>`).join('')}
        
        ${(cv.formation && cv.formation.length > 0) ? `
        <p style="color:#7c3aed;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:2px;margin-top:20px;">FORMATION</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:14px;"></div>
        ${cv.formation.map(f => `
          <div style="margin-bottom:12px;padding-left:14px;border-left:3px solid #D4AF37;">
            <p style="font-size:11px;font-weight:700;color:#130b29;">${f.diplome}</p>
            <p style="font-size:10px;color:#6b21a8;">${f.ecole} (${f.annee})</p>
          </div>`).join('')}
        ` : ''}

        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <p style="color:#7c3aed;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:2px;margin-top:20px;">PORTFOLIO & PROJETS</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:14px;"></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
          ${cv.portfolio.map(p => `
            <div style="margin-bottom:10px;padding-left:14px;border-left:3px solid #6366f1;">
              <p style="font-size:10px;font-weight:700;color:#130b29;">${p.nom}</p>
              <p style="font-size:9px;color:#4b5563;">${p.desc}</p>
            </div>`).join('')}
        </div>` : ''}

        ${(cv.certifications && cv.certifications.length > 0) ? `
        <p style="color:#7c3aed;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:2px;margin-top:20px;">CERTIFICATIONS</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:14px;"></div>
        ${cv.certifications.map(c => `<div style="margin-bottom:8px;padding-left:14px;border-left:3px solid #D4AF37;"><p style="font-size:10px;font-weight:700;">${typeof c === 'string' ? c : c.titre}</p><p style="font-size:9px;color:#6b21a8;">${c.organisme || ''} (${c.annee || ''})</p></div>`).join('')}` : ''}
        
        ${(cv.awards && cv.awards.length > 0) ? `
        <p style="color:#7c3aed;font-size:9px;font-weight:700;letter-spacing:3px;margin-bottom:2px;margin-top:20px;">DISTINCTIONS</p>
        <div style="height:2px;background:linear-gradient(90deg,#D4AF37,#b38d22,transparent);margin-bottom:14px;"></div>
        ${cv.awards.map(a => `<div style="margin-bottom:6px;padding-left:14px;border-left:3px solid #D4AF37;display:flex;align-items:center;gap:8px;"><span style="color:#D4AF37;">★</span><p style="font-size:10px;color:#374151;">${a}</p></div>`).join('')}` : ''}
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
            <h1 style="color:white;font-size:${s.nameSize};font-weight:900;letter-spacing:-1.5px;margin-bottom:4px;line-height:0.9;">${cv.prenom||''} ${cv.nom||''}</h1>
            <p style="color:rgba(255,255,255,0.75);font-size:${s.headerSize};font-weight:600;letter-spacing:3px;text-transform:uppercase;">${cv.poste||''}</p>
          </div>
        </div>
      </div>
      <div class="body" style="padding:${s.mainPadding}; flex:1; display:flex; gap:40px;">
        <div class="sidebar" style="width:220px; flex-shrink:0; background:#f8fafc; border-right:1px solid #e2e8f0; padding:30px 20px; border-radius:12px; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:10px;font-weight:700;color:#1e293b;letter-spacing:2px;margin-bottom:12px;">CONTACT</p>
          ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:9.5px;color:#475569;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1.2;word-break:break-word;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
          <div style="height:1px;background:#e2e8f0;margin:16px 0;"></div>
          <p style="font-size:11.5px;font-weight:700;color:#1e293b;letter-spacing:2px;margin-bottom:12px;">DÉTAILS</p>
          ${window.renderDetailsSection(cv, '#1e293b', '#475569', { fontSize: '9.5px', marginBottom: '6px' })}
          <div style="height:1px;background:#e2e8f0;margin:16px 0;"></div>
          <p style="font-size:11.5px;font-weight:700;color:#1e293b;letter-spacing:2px;margin-bottom:12px;">COMPÉTENCES</p>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            ${(cv.competences||[]).map(c => `<div style="background:white;border:1px solid #cbd5e1;border-radius:4px;padding:6px 10px;font-size:10.5px;color:#334155;">${c}</div>`).join('')}
          </div>
          ${(cv.langues && cv.langues.length > 0) ? `
          <div style="margin-top:16px;">
            <p style="font-size:11.5px;font-weight:700;color:#1e293b;letter-spacing:2px;margin-bottom:10px;">LANGUES</p>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${cv.langues.map(l => `<div style="background:#f1f5f9;border:1px solid #e2e8f0;border-radius:4px;padding:4px 8px;font-size:10px;color:#475569;">${typeof l === 'string' ? l : l.langues}</div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.centres && cv.centres.length > 0) ? `
          <div style="margin-top:16px;">
            <p style="font-size:11.5px;font-weight:700;color:#1e293b;letter-spacing:2px;margin-bottom:10px;">LOISIRS</p>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${cv.centres.map(c => `<span style="font-size:10.5px;color:#64748b;">${c}</span>`).join(' • ')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-size:11.5px;font-weight:700;color:#1e293b;letter-spacing:2px;margin-bottom:12px;">RÉFÉRENCES</p>
            ${cv.references.map(r => `
              <div style="margin-bottom:10px;">
                <p style="font-size:11px;font-weight:700;color:#0f172a;">${r.n || r.nom}</p>
                <p style="font-size:10px;color:#3b82f6;">${r.p || r.poste}</p>
              </div>`).join('')}
          </div>` : ''}
          </div>
        </div>
        <div class="main" style="flex:1; display:flex; flex-direction:column; justify-content:center;">
          <div style="margin-bottom:${s.sectionGap};">
            <p style="font-size:12.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:10px;">PROFIL</p>
            <p style="font-size:${s.profileSize};color:#475569;line-height:${s.lineHeight};">${cv.profil||''}</p>
          </div>
          <p style="font-size:12.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:14px;">EXPÉRIENCES</p>
          ${(cv.experience||[]).map(e => `
            <div style="margin-bottom:${s.itemGap};padding:14px;background:#f8fafc;border-radius:8px;border-left:3px solid #3b82f6;">
              <p style="font-size:12.5px;font-weight:700;color:#0f172a;">${typeof e === 'string' ? e : e.poste}</p>
              <p style="font-size:11.5px;color:#3b82f6;margin-bottom:4px;">${e.employeur||''} ${e.dates ? `— ${e.dates}` : ''}</p>
              <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
            </div>`).join('')}
          <p style="font-size:12.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:14px;">FORMATION</p>
          ${(cv.formation||[]).map(e => `
            <div style="margin-bottom:24px;">
              <p style="font-weight:800;font-size:13.5px;color:#0f172a;">${typeof e === 'string' ? e : e.diplome}</p>
              <p style="font-size:11.5px;color:#3b82f6;margin-bottom:6px;font-weight:600;">${e.ecole||''} ${e.annee ? `· ${e.annee}` : ''}</p>
              <p style="font-size:11px;color:#475569;line-height:1.7;">${e.missions||''}</p>
            </div>`).join('')}

          ${(cv.certifications && cv.certifications.length > 0) ? `
          <p style="font-size:12.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:14px;margin-top:20px;">CERTIFICATIONS</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${cv.certifications.map(c => `<div style="background:#f8fafc;padding:10px;border-radius:6px;border-top:2px solid #3b82f6;"><p style="font-size:11.5px;font-weight:700;">${typeof c === 'string' ? c : c.titre}</p><p style="font-size:9.5px;color:#64748b;">${c.organisme || ''}</p></div>`).join('')}
          </div>` : ''}

          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <p style="font-size:12.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:14px;margin-top:20px;">PORTFOLIO</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            ${cv.portfolio.map(p => `<div style="background:white;padding:12px;border:1px solid #e2e8f0;border-radius:10px;"><p style="font-size:12px;font-weight:800;color:#1e40af;margin-bottom:4px;">${p.nom}</p><p style="font-size:10.5px;color:#64748b;">${p.desc}</p></div>`).join('')}
          </div>` : ''}

          ${(cv.awards && cv.awards.length > 0) ? `
          <p style="font-size:12.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:14px;margin-top:20px;">DISTINCTIONS</p>
          <div style="display:flex;flex-direction:column;gap:8px;">
            ${cv.awards.map(a => `<div style="background:#eff6ff;padding:10px 14px;border-radius:12px;display:flex;align-items:center;gap:10px;"><span style="color:#3b82f6;">⭐</span><p style="font-size:11.5px;color:#1e3a8a;font-weight:600;">${a}</p></div>`).join('')}
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
        <h1 style="color:#D4AF37;font-size:${s.nameSize};font-weight:700;text-align:center;line-height:0.9;margin-bottom:8px;">${(cv.prenom||'').toUpperCase()} ${(cv.nom||'').toUpperCase()}</h1>
        <p style="color:rgba(212,175,55,0.7);font-size:${s.headerSize};text-align:center;letter-spacing:2px;margin-bottom:28px;">${cv.poste||''}</p>
        <div style="height:1px;background:rgba(212,175,55,0.3);margin-bottom:16px;"></div>
        <p style="color:#D4AF37;font-size:10.5px;font-weight:700;letter-spacing:2px;margin-bottom:10px;">Contact</p>
        ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="color:#d1fae5;font-size:10.5px;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1.2;word-break:break-word;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
        <div style="margin-top:20px;">
          <p style="color:#D4AF37;font-size:10.5px;font-weight:700;letter-spacing:2px;margin-bottom:10px;">Détails</p>
          ${window.renderDetailsSection(cv, '#D4AF37', '#d1fae5', { fontSize: '10.5px', marginBottom: '6px' })}
        </div>
        ${(cv.langues && cv.langues.length > 0) ? `
        <div style="margin-top:20px;">
          <p style="color:#D4AF37;font-size:10.5px;font-weight:700;letter-spacing:2px;margin-bottom:10px;">Langues</p>
          ${cv.langues.map(l => `<p style="color:#d1fae5;font-size:10.5px;margin-bottom:4px;">• ${typeof l === 'string' ? l : l.langues}</p>`).join('')}
        </div>` : ''}
        ${(cv.centres && cv.centres.length > 0) ? `
        <div style="margin-top:20px;">
          <p style="color:#D4AF37;font-size:10.5px;font-weight:700;letter-spacing:2px;margin-bottom:10px;">Loisirs</p>
          <p style="color:#d1fae5;font-size:10px;line-height:1.4;">${cv.centres.join(' • ')}</p>
        </div>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div style="margin-top:24px;">
          <p style="color:#D4AF37;font-size:10.5px;font-weight:700;letter-spacing:2px;margin-bottom:12px;">Références</p>
          ${cv.references.map(r => `<div style="margin-bottom:10px;"><p style="color:white;font-size:10.5px;font-weight:700;">${r.n || r.nom}</p><p style="color:#D4AF37;font-size:9.5px;">${r.p || r.poste}</p></div>`).join('')}
        </div>` : ''}
      </div>
      <div class="main" style="padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:flex-start;">
        <h2 style="font-size:19.5px;font-weight:700;color:#1a2e0f;margin-bottom:10px;border-bottom:1px solid #e5f0dc;padding-bottom:6px;">PROFIL</h2>
        <p style="font-size:${s.profileSize};color:#374151;line-height:${s.lineHeight};margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
        <h2 style="font-size:11.5px;font-weight:700;color:#2d5016;letter-spacing:2px;margin-bottom:14px;">EXPÉRIENCES</h2>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};padding-left:16px;border-left:2px solid #D4AF37;">
          <p style="font-size:13.5px;font-weight:700;color:#1a2e0f;">${typeof e === 'string' ? e : e.poste}</p>
          <p style="font-size:11.5px;color:#a6882b;margin-bottom:4px;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
          <div style="font-size:${s.baseSize};color:#4b5563;line-height:1.6;">${e.missions||''}</div>
        </div>`).join('')}

        <h2 style="font-size:11.5px;font-weight:700;color:#2d5016;letter-spacing:2px;margin-bottom:14px;">FORMATION</h2>
        ${(cv.formation||[]).map(e => `<div style="margin-bottom:16px;padding-left:16px;border-left:2px solid #D4AF37;">
          <p style="font-size:13.5px;font-weight:700;color:#1a2e0f;">${typeof e === 'string' ? e : e.diplome}</p>
          <p style="font-size:11.5px;color:#a6882b;margin-bottom:4px;">${e.ecole||''} ${e.annee ? `· ${e.annee}` : ''}</p>
          <p style="font-size:11px;color:#4b5563;line-height:1.6;">${e.missions||''}</p>
        </div>`).join('')}

        ${(cv.certifications && cv.certifications.length > 0) ? `
        <h2 style="font-size:11.5px;font-weight:700;color:#2d5016;letter-spacing:2px;margin-bottom:14px;margin-top:20px;">CERTIFICATIONS</h2>
        ${cv.certifications.map(c => `<div style="margin-bottom:10px;padding-left:16px;border-left:2px solid #D4AF37;"><p style="font-size:12.5px;font-weight:700;color:#1a2e0f;">${typeof c === 'string' ? c : c.titre}</p><p style="font-size:10.5px;color:#a6882b;">${c.organisme || ''} (${c.annee || ''})</p></div>`).join('')}` : ''}

        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <h2 style="font-size:11.5px;font-weight:700;color:#2d5016;letter-spacing:2px;margin-bottom:14px;margin-top:20px;">PROJETS</h2>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
          ${cv.portfolio.map(p => `<div style="padding:10px;background:#f0f7e9;border-radius:8px;border:1px solid #d1e2c4;"><p style="font-size:12px;font-weight:700;color:#1a2e0f;">${p.nom}</p><p style="font-size:10.5px;color:#4b5563;">${p.desc}</p></div>`).join('')}
        </div>` : ''}

        ${(cv.awards && cv.awards.length > 0) ? `
        <h2 style="font-size:11.5px;font-weight:700;color:#2d5016;letter-spacing:2px;margin-bottom:14px;margin-top:20px;">DISTINCTIONS</h2>
        <div style="display:flex;flex-wrap:wrap;gap:10px;">
          ${cv.awards.map(a => `<div style="padding:8px 12px;background:#fffbeb;border:1px solid #fef3c7;border-radius:20px;display:flex;align-items:center;gap:8px;"><span style="color:#D4AF37;">⚡</span><p style="font-size:11px;color:#846a14;font-style:italic;">${a}</p></div>`).join('')}
        </div>` : ''}
      </div>
    </div>`;
  }

  function genT4(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-diplo" style="font-family:'Inter',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div class="header" style="color:white;background:#0f172a; padding:${s.isVeryShort ? '60px 40px' : '40px'};">
      <div class="header" style="color:white;background:#0f172a; padding:${s.isVeryShort ? '60px 40px' : '40px'};">
        <h1 style="font-size:${s.nameSize};font-weight:700;margin-bottom:8px;line-height:0.9;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="color:#94a3b8;font-size:${s.headerSize};letter-spacing:3px;text-transform:uppercase;">${cv.poste||''}</p>
      </div>
      </div>
      <div class="body" style="flex:1;">
        <div class="sidebar" style="background:#f1f5f9; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:10.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:12px;border-bottom:2px solid #0f172a;padding-bottom:6px;">CONTACT</p>
          ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:10.5px;color:#475569;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1.2;word-break:break-word;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
          <div style="height:12px;"></div>
          <p style="font-size:10.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:12px;border-bottom:2px solid #0f172a;padding-bottom:6px;">DÉTAILS</p>
          ${window.renderDetailsSection(cv, '#0f172a', '#475569', { fontSize: '10.5px', marginBottom: '6px' })}
          <p style="font-size:10.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:12px;border-bottom:2px solid #0f172a;padding-bottom:6px;">COMPÉTENCES</p>
          ${(cv.competences||[]).map(c => `<p style="font-size:10.5px;color:#475569;margin-bottom:4px;">▪ ${c}</p>`).join('')}
          ${(cv.langues && cv.langues.length > 0) ? `
          <div style="height:12px;"></div>
          <p style="font-size:10.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:12px;border-bottom:2px solid #0f172a;padding-bottom:6px;">LANGUES</p>
          ${cv.langues.map(l => `<p style="font-size:10.5px;color:#475569;margin-bottom:4px;">▪ ${typeof l === 'string' ? l : l.langues}</p>`).join('')}
          ` : ''}
          ${(cv.centres && cv.centres.length > 0) ? `
          <div style="height:12px;"></div>
          <p style="font-size:10.5px;font-weight:700;color:#0f172a;letter-spacing:2px;margin-bottom:12px;border-bottom:2px solid #0f172a;padding-bottom:6px;">LOISIRS</p>
          <p style="font-size:10px;color:#475569;">${cv.centres.join(' · ')}</p>` : ''}
        </div>
        <div class="main" style="padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:center;">
          <div style="margin-bottom:${s.sectionGap};padding:16px;background:#f8fafc;border-left:4px solid #0f172a;">
            <p style="font-size:${s.profileSize};color:#334155;line-height:${s.lineHeight};">${cv.profil||''}</p>
          </div>
          ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
            <p style="font-size:13.5px;font-weight:700;color:#0f172a;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:11.5px;color:#64748b;margin-bottom:6px;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
            <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
          </div>`).join('')}
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-top:20px;">
            <p style="font-size:12.5px;font-weight:700;color:#0f2a4a;letter-spacing:2px;margin-bottom:15px;border-bottom:2px solid #0f2a4a;padding-bottom:6px;">FORMATION</p>
            ${cv.formation.map(f => `
              <div style="margin-bottom:15px;">
                <p style="font-size:13px; font-weight:700; color:#1a1a1a;">${f.diplome}</p>
                <p style="font-size:11.5px; color:#4b5563;">${f.ecole} | ${f.annee}</p>
              </div>
`).join('')}
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-top:20px;">
            <p style="font-size:12.5px;font-weight:700;color:#0f2a4a;letter-spacing:2px;margin-bottom:15px;border-bottom:2px solid #0f2a4a;padding-bottom:6px;">PROJETS</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
              ${cv.portfolio.map(p => `<div><p style="font-size:12.5px;font-weight:700;color:#0f172a;">${p.nom}</p><p style="font-size:11px;color:#475569;">${p.desc}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-size:12.5px;font-weight:700;color:#0f2a4a;letter-spacing:2px;margin-bottom:15px;border-bottom:2px solid #0f2a4a;padding-bottom:6px;">DISTINCTIONS</p>
            <div style="background:#f8fafc;padding:12px;border:1px solid #e2e8f0;border-radius:8px;">
              ${cv.awards.map(a => `<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;"><span style="color:#0f172a;font-size:13.5px;">★</span><p style="font-size:11.5px;color:#334155;">${a}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-size:12.5px;font-weight:700;color:#0f2a4a;letter-spacing:2px;margin-bottom:15px;border-bottom:2px solid #0f2a4a;padding-bottom:6px;">RÉFÉRENCES</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
              ${cv.references.map(r => `<div><p style="font-size:12.5px;font-weight:700;color:#0f172a;">${r.n || r.nom}</p><p style="font-size:11px;color:#64748b;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genT5(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-minimal-design" style="position:relative; font-family:'Inter',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div class="top-bar"></div><svg style="position:absolute;top:0;right:0;width:400px;height:100%;pointer-events:none;opacity:0.02;" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="0" y1="0" x2="100" y2="100" stroke="#000" stroke-width="0.5"/><line x1="100" y1="0" x2="0" y2="100" stroke="#000" stroke-width="0.5"/></svg>
      <div class="header">
        <h1 style="font-size:${s.nameSize};font-weight:800;color:#111;margin-bottom:8px;line-height:0.9;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="font-size:${s.headerSize};color:#666;letter-spacing:3px;text-transform:uppercase;">${cv.poste||''}</p>
      </div>
      <div class="body" style="padding:0; display:flex; flex:1;">
        <div class="sidebar" style="width:240px; background:#fcfcfc; border-right:1px solid #f0f0f0; padding:${s.sidebarPadding}; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:10px;letter-spacing:2px;">Contact</p>
          ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:10.5px;color:#555;margin-bottom:4px;display:flex;align-items:center;gap:5px;line-height:1.2;word-break:break-word;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
          <div style="height:20px;"></div>
          <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:10px;letter-spacing:2px;">Details</p>
          ${window.renderDetailsSection(cv, '#111', '#555', { fontSize: '10.5px', marginBottom: '4px' })}
          <div style="height:20px;"></div>
          <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:10px;letter-spacing:2px;">Skills</p>
          ${(cv.competences||[]).map(c => `<p style="font-size:10.5px;color:#555;margin-bottom:4px;">${c}</p>`).join('')}
          ${(cv.langues && cv.langues.length > 0) ? `
          <div style="height:20px;"></div>
          <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:10px;letter-spacing:2px;">Languages</p>
          ${cv.langues.map(l => `<p style="font-size:10.5px;color:#555;margin-bottom:4px;">${typeof l === 'string' ? l : l.langues}</p>`).join('')}
          ` : ''}
          ${(cv.centres && cv.centres.length > 0) ? `
          <div style="height:20px;"></div>
          <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:10px;letter-spacing:2px;">Interests</p>
          <p style="font-size:10.5px;color:#555;line-height:1.4;">${cv.centres.join(' · ')}</p>` : ''}
          </div>
        </div>
        <div class="main" style="flex:1; padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:${s.profileSize};line-height:${s.lineHeight};color:#333;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
          <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:16px;letter-spacing:2px;border-bottom:1px solid #eee;padding-bottom:4px;">Experience</p>
          ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
            <p style="font-weight:700;font-size:12.5px;color:#111;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:10.5px;color:#888;margin-bottom:4px;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
            <div style="font-size:${s.baseSize};color:#555;line-height:1.6;">${e.missions||''}</div>
          </div>`).join('')}
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:16px;letter-spacing:2px;border-bottom:1px solid #eee;padding-bottom:4px;">Education</p>
            ${cv.formation.map(f => `
              <div style="margin-bottom:15px;">
                <p style="font-weight:700;font-size:12.5px;color:#111;">${f.diplome}</p>
                <p style="font-size:10.5px;color:#888;">${f.ecole} (${f.annee})</p>
              </div>`).join('')}
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:16px;letter-spacing:2px;border-bottom:1px solid #eee;padding-bottom:4px;">Portfolio</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
              ${cv.portfolio.map(p => `<div><p style="font-size:12px;font-weight:700;color:#111;">${p.nom}</p><p style="font-size:10.5px;color:#666;">${p.desc}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:16px;letter-spacing:2px;border-bottom:1px solid #eee;padding-bottom:4px;">Awards & Distinctions</p>
            ${cv.awards.map(a => `<p style="font-size:11px;color:#555;margin-bottom:6px;display:flex;gap:10px;"><span style="color:#000;">✦</span>${a}</p>`).join('')}
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-weight:700;font-size:10.5px;text-transform:uppercase;color:#111;margin-bottom:16px;letter-spacing:2px;border-bottom:1px solid #eee;padding-bottom:4px;">References</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
              ${cv.references.map(r => `<div><p style="font-size:12px;font-weight:700;color:#111;">${r.n || r.nom}</p><p style="font-size:10.5px;color:#666;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genT6(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-bordeaux" style="font-family:'Raleway',sans-serif; min-height:1123px; display:flex;">
      <div class="sidebar" style="color:white;background:#4a0e22; display:flex; flex-direction:column; justify-content:center;">
        <h1 style="color:#D4AF37;font-size:calc(${s.nameSize} * 0.45);font-weight:700;text-align:center;line-height:1;">${(cv.prenom||'').toUpperCase()} ${(cv.nom||'').toUpperCase()}</h1>
        <p style="font-size:${s.headerSize};text-align:center;letter-spacing:2px;color:#e2e8f0;margin-bottom:24px;">${cv.poste||''}</p>
        <div style="height:1px;background:rgba(212,175,55,0.3);margin-bottom:16px;"></div>
        ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:10.5px;color:#cbd5e1;margin-bottom:6px;display:flex;align-items:center;justify-content:center;gap:5px;line-height:1.2;word-break:break-word;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
        <div style="height:1px;background:rgba(212,175,55,0.3);margin:16px 0;"></div>
        <p style="font-size:10.5px;font-weight:700;color:#D4AF37;letter-spacing:2px;margin-bottom:10px;text-align:center;">DÉTAILS</p>
        ${window.renderDetailsSection(cv, '#D4AF37', '#cbd5e1', { fontSize: '10.5px', marginBottom: '4px', textAlign: 'center' })}
        <div style="height:1px;background:rgba(212,175,55,0.3);margin:16px 0;"></div>
        <p style="font-size:10.5px;font-weight:700;color:#D4AF37;letter-spacing:2px;margin-bottom:10px;text-align:center;">COMPÉTENCES</p>
        ${(cv.competences||[]).map(c => `<p style="font-size:10.5px;color:#cbd5e1;margin-bottom:4px;text-align:center;">${c}</p>`).join('')}
        ${(cv.langues && cv.langues.length > 0) ? `
        <div style="height:1px;background:rgba(212,175,55,0.3);margin:16px 0;"></div>
        <p style="font-size:10.5px;font-weight:700;color:#D4AF37;letter-spacing:2px;margin-bottom:10px;text-align:center;">LANGUES</p>
        ${cv.langues.map(l => `<p style="font-size:10.5px;color:#cbd5e1;margin-bottom:4px;text-align:center;">${typeof l === 'string' ? l : l.langues}</p>`).join('')}
        ` : ''}
        ${(cv.centres && cv.centres.length > 0) ? `
        <div style="height:1px;background:rgba(212,175,55,0.3);margin:16px 0;"></div>
        <p style="font-size:10.5px;font-weight:700;color:#D4AF37;letter-spacing:2px;margin-bottom:10px;text-align:center;">LOISIRS</p>
        <p style="font-size:10px;color:#cbd5e1;text-align:center;line-height:1.4;">${cv.centres.join(' • ')}</p>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div style="height:1px;background:rgba(212,175,55,0.3);margin:16px 0;"></div>
        <p style="font-size:10.5px;font-weight:700;color:#D4AF37;letter-spacing:2px;margin-bottom:10px;text-align:center;">RÉFÉRENCES</p>
        ${cv.references.map(r => `<div style="margin-bottom:8px;text-align:center;"><p style="font-size:11px;font-weight:700;color:white;">${r.n || r.nom}</p><p style="font-size:9.5px;color:#D4AF37;">${r.p || r.poste}</p></div>`).join('')}
        ` : ''}
      </div>
      <div class="main" style="padding:${s.mainPadding}; display:flex; flex-direction:column; justify-content:flex-start;">
        <h2 style="font-size:${s.isVeryShort ? '38px' : '32px'};color:#4a0e22;font-weight:800;margin-bottom:12px;line-height:0.9;">${cv.prenom||''} <span style="color:#D4AF37;">${cv.nom||''}</span></h2>
        <p style="font-size:${s.profileSize};line-height:${s.lineHeight};color:#334155;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
        <p style="font-size:11.5px;font-weight:800;color:#4a0e22;letter-spacing:2px;margin-bottom:16px;text-transform:uppercase;">Expériences</p>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};border-left:2px solid #D4AF37;padding-left:14px;">
          <p style="font-weight:800;font-size:13.5px;color:#1e293b;">${typeof e === 'string' ? e : e.poste}</p>
          <p style="font-size:11.5px;color:#64748b;margin-bottom:4px;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
          <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
        </div>`).join('')}
        ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-top:20px;">
            <p style="font-size:11.5px;font-weight:800;color:#4a0e22;letter-spacing:2px;margin-bottom:16px;text-transform:uppercase;border-bottom:1px solid #eee;padding-bottom:4px;">Formation</p>
            ${cv.formation.map(f => `
              <div style="margin-bottom:12px;border-left:2px solid #D4AF37;padding-left:14px;">
                <p style="font-weight:800;font-size:13.5px;color:#1e293b;">${f.diplome}</p>
                <p style="font-size:11.5px;color:#64748b;">${f.ecole} (${f.annee})</p>
              </div>`).join('')}
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-top:20px;">
            <p style="font-size:11.5px;font-weight:800;color:#4a0e22;letter-spacing:2px;margin-bottom:16px;text-transform:uppercase;border-bottom:1px solid #eee;padding-bottom:4px;">Distinctions</p>
            ${cv.awards.map(a => `<div style="margin-bottom:8px;padding:10px;background:#fdf2f8;border-radius:6px;border-left:3px solid #db2777;display:flex;gap:10px;"><span style="color:#be185d;">★</span><p style="font-size:11px;color:#831843;font-weight:600;">${a}</p></div>`).join('')}
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-top:20px;">
            <p style="font-size:11.5px;font-weight:800;color:#4a0e22;letter-spacing:2px;margin-bottom:16px;text-transform:uppercase;border-bottom:1px solid #eee;padding-bottom:4px;">Projets</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
              ${cv.portfolio.map(p => `<div style="padding-left:14px;border-left:2px solid #D4AF37;"><p style="font-size:12.5px;font-weight:700;color:#1e293b;">${p.nom}</p><p style="font-size:11px;color:#64748b;">${p.desc}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div style="margin-top:20px;">
            <p style="font-size:11.5px;font-weight:800;color:#4a0e22;letter-spacing:2px;margin-bottom:16px;text-transform:uppercase;border-bottom:1px solid #eee;padding-bottom:4px;">Références</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
              ${cv.references.map(r => `<div><p style="font-size:11.5px;font-weight:700;color:#1e293b;">${r.n || r.nom}</p><p style="font-size:10.5px;color:#4a0e22;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
      </div>
    </div>`;
  }

  function genT7(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-canada1" style="font-family:'Inter',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start; padding:${s.mainPadding};">
      <div style="text-align:center;border-bottom:2px solid #0f172a;padding-bottom:16px;">
        <h1 style="font-size:${s.nameSize};font-weight:800;color:#0f172a;margin-bottom:8px;line-height:0.9;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="font-size:${s.headerSize};color:#475569;display:flex;align-items:center;justify-content:center;gap:15px;flex-wrap:wrap;line-height:1;">${cv.poste||''}</p>
      </div>
      <div style="margin-top:20px;">
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:12.5px;margin-bottom:8px;">Summary</p>
        <p style="font-size:${s.profileSize};line-height:${s.lineHeight};color:#334155;">${cv.profil||''}</p>
        <div style="margin-top:20px;display:flex;gap:15px;flex-wrap:wrap;border-bottom:1px solid #e2e8f0;padding-bottom:15px;">
          ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:10px;color:#475569;display:flex;align-items:center;gap:5px;"><span style="display:flex;align-items:center;transform:translateY(1px);">${x.i}</span>${x.v}</p>`).join('')}
        </div>
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:12.5px;margin-top:20px;margin-bottom:8px;">Details</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
           ${window.renderDetailsSection(cv, '#0f172a', '#475569', { fontSize: '10px', marginBottom: '4px' })}
        </div>
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:12.5px;margin-top:20px;margin-bottom:12px;">Experience</p>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
          <div style="display:flex;justify-content:space-between;align-items:baseline;">
            <p style="font-weight:700;font-size:12.5px;color:#0f172a;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:10.5px;color:#64748b;">${e.dates||''}</p>
          </div>
          <p style="font-size:11.5px;color:#334155;margin-bottom:4px;font-weight:500;">${e.employeur||''}</p>
        <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
        </div>`).join('')}
        ${(cv.competences && cv.competences.length > 0) ? `
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:12.5px;margin-top:20px;margin-bottom:8px;">Skills</p>
        <p style="font-size:11.5px;color:#334155;">${cv.competences.join('  ·  ')}</p>` : ''}
        ${(cv.formation && cv.formation.length > 0) ? `
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:12.5px;margin-top:20px;margin-bottom:12px;">Education</p>
        ${cv.formation.map(f => `
          <div style="margin-bottom:12px;">
            <div style="display:flex;justify-content:space-between;align-items:baseline;">
              <p style="font-weight:700;font-size:12.5px;color:#0f172a;">${f.diplome}</p>
              <p style="font-size:10.5px;color:#64748b;">${f.annee}</p>
            </div>
            <p style="font-size:11.5px;color:#334155;">${f.ecole}</p>
          </div>`).join('')}` : ''}
        ${(cv.certifications && cv.certifications.length > 0) || (cv.awards && cv.awards.length > 0) ? `
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:12.5px;margin-top:20px;margin-bottom:8px;">Certifications & Awards</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
          ${(cv.awards || []).map(a => `<p style="font-size:10px;color:#334155;">★ ${a}</p>`).join('')}
        </div>` : ''}
        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:11px;margin-top:20px;margin-bottom:8px;">Projects</p>
        ${cv.portfolio.map(p => `<div style="margin-bottom:10px;"><p style="font-size:10px;font-weight:700;color:#0f172a;">${p.nom}</p><p style="font-size:9.5px;color:#475569;">${p.desc}</p></div>`).join('')}` : ''}
        ${(cv.langues && cv.langues.length > 0) ? `
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:11px;margin-top:20px;margin-bottom:8px;">Languages</p>
        <p style="font-size:10px;color:#334155;">${cv.langues.map(l => typeof l === 'string' ? l : l.langues).join('  ·  ')}</p>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <p style="font-weight:800;color:#0f172a;text-transform:uppercase;font-size:11px;margin-top:20px;margin-bottom:8px;">References</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
          ${cv.references.map(r => `<div><p style="font-size:10px;font-weight:700;color:#0f172a;">${r.n || r.nom}</p><p style="font-size:9px;color:#475569;">${r.p || r.poste}</p></div>`).join('')}
        </div>` : ''}
      </div>
    </div>`;
  }

  function genT8(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-canada2" style="font-family:'Montserrat',sans-serif; min-height:1123px; display:flex; flex-direction:column; justify-content:stretch;">
      <div class="header" style="background:#991b1b;padding:32px 40px;color:white;">
        <h1 style="font-size:${s.nameSize};font-weight:800;margin-bottom:8px;line-height:0.9;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="font-size:${s.headerSize};text-transform:uppercase;letter-spacing:2px;color:#fca5a5;">${cv.poste||''}</p>
        <p style="font-size:9px;color:#fecaca;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:15px;flex-wrap:wrap;line-height:1.2;">${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<span style="display:flex;align-items:center;gap:5px;white-space:nowrap;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</span>`).join('')}</p>
      </div>
      <div class="body" style="padding:${s.mainPadding}; flex:1;">
        <div class="sidebar" style="background:#f8fafc;border-right:1px solid #e2e8f0; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-weight:800;color:#991b1b;font-size:9px;letter-spacing:1px;margin-bottom:12px;">DÉTAILS</p>
          ${window.renderDetailsSection(cv, '#991b1b', '#334155', { fontSize: '9px', marginBottom: '6px' })}
          <div style="height:20px;"></div>
          <p style="font-weight:800;color:#991b1b;font-size:9px;letter-spacing:1px;margin-bottom:12px;">COMPÉTENCES</p>
          ${(cv.competences||[]).map(c => `<p style="font-size:9px;color:#334155;margin-bottom:6px;">${c}</p>`).join('')}
          ${(cv.langues && cv.langues.length > 0) ? `
          <p style="font-weight:800;color:#991b1b;font-size:9px;letter-spacing:1px;margin-top:20px;margin-bottom:12px;">LANGUES</p>
          ${cv.langues.map(l => `<p style="font-size:9px;color:#334155;margin-bottom:6px;">${typeof l === 'string' ? l : l.langue || l}</p>`).join('')}
          ` : ''}
        </div>
        <div class="main" style="display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:${s.profileSize};line-height:${s.lineHeight};color:#334155;background:#fef2f2;padding:16px;border-left:4px solid #991b1b;margin-bottom:${s.sectionGap};">${cv.profil||''}</p>
          <p style="font-weight:800;color:#991b1b;font-size:11px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">Expérience</p>
          ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};">
            <p style="font-weight:800;font-size:12px;color:#1e293b;">${typeof e === 'string' ? e : e.poste}</p>
            <p style="font-size:10px;color:#991b1b;margin-bottom:6px;font-weight:600;">${e.employeur||''} ${e.dates ? `· ${e.dates}` : ''}</p>
            <div style="font-size:${s.baseSize};color:#475569;line-height:1.7;">${e.missions||''}</div>
          </div>`).join('')}
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-weight:800;color:#991b1b;font-size:11px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">Formation</p>
            ${cv.formation.map(f => `
              <div style="margin-bottom:15px;border-left:2px solid #e2e8f0;padding-left:14px;">
                <p style="font-weight:800;font-size:11px;color:#1e293b;">${f.diplome}</p>
                <p style="font-size:9px;color:#991b1b;font-weight:700;">${f.ecole} (${f.annee})</p>
              </div>`).join('')}
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-weight:800;color:#991b1b;font-size:11px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">Portfolio</p>
            ${cv.portfolio.map(p => `
              <div style="margin-bottom:15px;">
                <p style="font-weight:700;font-size:10px;color:#1e293b;">${p.nom}</p>
                <p style="font-size:9px;color:#475569;line-height:1.4;">${p.desc}</p>
              </div>`).join('')}
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-weight:800;color:#991b1b;font-size:11px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">Distinctions</p>
            ${cv.awards.map(a => `<div style="padding:10px;background:#fff1f2;border-radius:6px;display:flex;align-items:center;gap:10px;margin-bottom:6px;"><span style="color:#e11d48;">🏆</span><p style="font-size:10px;color:#881337;font-weight:700;">${a}</p></div>`).join('')}
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-weight:800;color:#991b1b;font-size:11px;letter-spacing:1px;margin-bottom:16px;text-transform:uppercase;">Références</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
              ${cv.references.map(r => `<div><p style="font-size:10px;font-weight:700;color:#1e293b;">${r.n || r.nom}</p><p style="font-size:9px;color:#991b1b;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genT9(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-modern-split" style="font-family:'Outfit',sans-serif; min-height:1123px; display:flex;">
      <div class="sidebar" style="width:280px;background:#f8fafc;border-right:1px solid #e2e8f0;padding:40px 30px; display:flex; flex-direction:column; justify-content:center;">
        <div style="width:120px;height:120px;border-radius:24px;background:#0f172a;margin-bottom:24px;display:flex;align-items:center;justify-content:center;font-size:48px;font-weight:900;color:white;transform:rotate(-3deg);">${(cv.prenom||'U')[0]}</div>
        <h1 style="font-size:${s.nameSize};font-weight:900;color:#0f172a;line-height:0.9;margin-bottom:8px;">${cv.prenom||''} ${cv.nom||''}</h1>
        <p style="font-size:${s.headerSize};color:#6366f1;font-weight:700;letter-spacing:2px;text-transform:uppercase;">${cv.poste||''}</p>
        <div style="height:30px;"></div>
        <p style="font-size:9px;font-weight:800;color:#0f172a;letter-spacing:1px;margin-bottom:12px;">CONTACT</p>
        ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:9px;color:#475569;margin-bottom:6px;display:flex;align-items:center;gap:5px;line-height:1.2;word-break:break-word;"><span style="display:flex;align-items:center;transform:translateY(1.5px);">${x.i}</span>${x.v}</p>`).join('')}
        <div style="height:30px;"></div>
        <p style="font-size:9px;font-weight:800;color:#0f172a;letter-spacing:1px;margin-bottom:12px;">DETAILS</p>
        ${window.renderDetailsSection(cv, '#0f172a', '#475569', { fontSize: '9px', marginBottom: '6px' })}
        <div style="height:30px;"></div>
        <p style="font-size:9px;font-weight:800;color:#0f172a;letter-spacing:1px;margin-bottom:12px;">SKILLS</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${(cv.competences||[]).map(c => `<span style="font-size:9px;background:white;border:1px solid #e2e8f0;padding:4px 10px;border-radius:6px;color:#334155;font-weight:600;">${c}</span>`).join('')}
        </div>
        ${(cv.langues && cv.langues.length > 0) ? `
        <div style="height:30px;"></div>
        <p style="font-size:9px;font-weight:800;color:#0f172a;letter-spacing:1px;margin-bottom:12px;">LANGUES</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${cv.langues.map(l => `<span style="font-size:9px;background:#eef2ff;padding:4px 10px;border-radius:6px;color:#6366f1;font-weight:600;">${typeof l === 'string' ? l : l.langue || l}</span>`).join('')}
        </div>` : ''}
      </div>
      </div>
      <div class="main" style="padding:${s.mainPadding}; flex:1; display:flex; flex-direction:column; justify-content:stretch;">
        <div style="margin-bottom:${s.sectionGap};">
          <p style="font-size:11px;font-weight:900;color:#0f172a;letter-spacing:2px;margin-bottom:12px;">PROFILE</p>
          <p style="font-size:${s.profileSize};color:#475569;line-height:${s.lineHeight};">${cv.profil||''}</p>
        </div>
        <p style="font-size:11px;font-weight:900;color:#0f172a;letter-spacing:2px;margin-bottom:16px;">EXPERIENCE</p>
        ${(cv.experience||[]).map(e => `<div style="margin-bottom:${s.itemGap};position:relative;padding-left:20px;">
          <div style="position:absolute;left:0;top:6px;width:6px;height:6px;background:#6366f1;border-radius:50%;"></div>
          <p style="font-size:12px;font-weight:800;color:#0f172a;margin-bottom:2px;">${typeof e === 'string' ? e : e.poste}</p>
          <p style="font-size:10px;color:#6366f1;font-weight:700;margin-bottom:6px;">${e.employeur||''} · ${e.dates||''}</p>
          <div style="font-size:${s.baseSize};color:#475569;line-height:1.6;">${e.missions||''}</div>
        </div>`).join('')}
        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <div style="margin-top:24px;">
          <p style="font-size:11px;font-weight:900;color:#0f172a;letter-spacing:2px;margin-bottom:16px;">PROJECTS</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            ${cv.portfolio.map(p => `
              <div style="background:white;padding:12px;border-radius:10px;border:1px solid #e2e8f0;border-left:4px solid #6366f1;">
                <p style="font-size:11px;font-weight:800;color:#0f172a;">${p.nom}</p>
                <p style="font-size:9x;color:#64748b;line-height:1.4;">${p.desc}</p>
              </div>`).join('')}
          </div>
        </div>` : ''}
        ${(cv.awards && cv.awards.length > 0) ? `
        <div style="margin-top:24px;">
          <p style="font-size:11px;font-weight:900;color:#0f172a;letter-spacing:2px;margin-bottom:16px;">DISTINCTIONS</p>
          <div style="display:flex;flex-wrap:wrap;gap:10px;">
            ${cv.awards.map(a => `<div style="padding:10px 14px;background:white;border:1px solid #eef2ff;border-radius:12px;display:flex;align-items:center;gap:10px;"><span style="color:#6366f1;">🎖️</span><p style="font-size:9.5px;color:#374151;font-weight:600;">${a}</p></div>`).join('')}
          </div>
        </div>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div style="margin-top:24px;">
          <p style="font-size:11px;font-weight:900;color:#0f172a;letter-spacing:2px;margin-bottom:16px;">REFERENCES</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            ${cv.references.map(r => `<div><p style="font-size:11px;font-weight:800;color:#0f172a;">${r.n || r.nom}</p><p style="font-size:9.5px;color:#6366f1;">${r.p || r.poste}</p></div>`).join('')}
          </div>
        </div>` : ''}
      </div>
    </div>`;
  }

  function genT10(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-elegant-gold" style="font-family:'Lora',serif; background:#fff; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start; padding:${s.mainPadding};">
      <div style="text-align:center;margin-bottom:${s.sectionGap};">
        <h1 style="font-size:${s.nameSize};font-weight:400;color:#1a1a1a;margin-bottom:8px;letter-spacing:2px;line-height:0.9;">${cv.prenom||''} <span style="font-weight:700;color:#b38d22;">${cv.nom||''}</span></h1>
        <p style="font-size:${s.headerSize};color:#b38d22;letter-spacing:4px;text-transform:uppercase;font-weight:700;">${cv.poste||''}</p>
        <div style="width:60px;height:1px;background:#b38d22;margin:16px auto;"></div>
        <p style="font-size:9.5px;color:#666;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;">${[{v: cv.email}, {v: cv.telephone}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim()}].filter(x => x.v).map(x => x.v).join('  ·  ')}</p>
        <div style="margin-top:10px;display:flex;justify-content:center;">
          <div style="display:flex;gap:15px;flex-wrap:wrap;max-width:500px;">
            ${window.renderDetailsSection(cv, '#b38d22', '#666', { fontSize: '9.5px', marginBottom: '0', flexWrap: 'nowrap' })}
          </div>
        </div>
      </div>
      <div style="flex:1;">
        <div style="margin-bottom:${s.sectionGap};">
          <p style="font-size:11px;font-weight:700;color:#1a1a1a;letter-spacing:2px;margin-bottom:12px;border-bottom:1px solid #e5e5e5;padding-bottom:6px;">PROFIL PERSONNEL</p>
          <p style="font-size:${s.profileSize};color:#444;line-height:${s.lineHeight};font-style:italic;">"${cv.profil||''}"</p>
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
        ${(cv.formation && cv.formation.length > 0) ? `
        <div style="margin-top:20px;">
          <p style="font-size:11px;font-weight:700;color:#1a1a1a;letter-spacing:2px;margin-bottom:16px;border-bottom:1px solid #e5e5e5;padding-bottom:6px;">FORMATION</p>
          ${cv.formation.map(f => `
            <div style="margin-bottom:15px;">
              <div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:4px;">
                <p style="font-size:11px;font-weight:700;color:#1a1a1a;">${f.diplome}</p>
                <p style="font-size:9px;color:#b38d22;font-weight:700;">${f.annee}</p>
              </div>
              <p style="font-size:10px;color:#666;">${f.ecole}</p>
            </div>`).join('')}
        </div>` : ''}
        ${(cv.langues && cv.langues.length > 0) ? `
        <div style="margin-top:20px;">
          <p style="font-size:11px;font-weight:700;color:#1a1a1a;letter-spacing:2px;margin-bottom:10px;border-bottom:1px solid #e5e5e5;padding-bottom:6px;">LANGUES</p>
          <div style="font-size:10px;color:#444;font-style:italic;">
            ${cv.langues.map(l => typeof l === 'string' ? l : l.langue || l).join(' · ')}
          </div>
        </div>` : ''}
        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <div style="margin-top:20px;">
          <p style="font-size:11px;font-weight:700;color:#1a1a1a;letter-spacing:2px;margin-bottom:10px;border-bottom:1px solid #e5e5e5;padding-bottom:6px;">PORTFOLIO</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
            ${cv.portfolio.map(p => `<div style="padding:10px;background:#fffcf5;border:1px solid #f3e8c3;border-radius:4px;"><p style="font-size:10px;font-weight:700;color:#1a1a1a;">${p.nom}</p><p style="font-size:9px;color:#666;">${p.desc}</p></div>`).join('')}
          </div>
        </div>` : ''}
        ${(cv.awards && cv.awards.length > 0) ? `
        <div style="margin-top:20px;">
          <p style="font-size:11px;font-weight:700;color:#1a1a1a;letter-spacing:2px;margin-bottom:10px;border-bottom:1px solid #e5e5e5;padding-bottom:6px;">DISTINCTIONS</p>
          ${cv.awards.map(a => `<div style="margin-bottom:6px;display:flex;align-items:center;gap:10px;"><span style="color:#b38d22;">🏆</span><p style="font-size:10px;color:#444;font-style:italic;">${a}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div style="margin-top:20px;">
          <p style="font-size:11px;font-weight:700;color:#1a1a1a;letter-spacing:2px;margin-bottom:10px;border-bottom:1px solid #e5e5e5;padding-bottom:6px;">RÉFÉRENCES</p>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
            ${cv.references.map(r => `<div><p style="font-size:11px;font-weight:700;color:#1a1a1a;">${r.n || r.nom}</p><p style="font-size:9.5px;color:#b38d22;">${r.p || r.poste}</p></div>`).join('')}
          </div>
        </div>` : ''}
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
          <h1 style="font-size:calc(${s.nameSize} * 1.1);font-weight:900;color:#1e3a8a;line-height:0.8;margin-bottom:8px;">${cv.prenom||''}</h1>
          <h1 style="font-size:calc(${s.nameSize} * 1.1);font-weight:900;color:#2563eb;line-height:0.8;margin-bottom:12px;">${cv.nom||''}</h1>
          <p style="font-size:${s.headerSize};color:#64748b;letter-spacing:4px;text-transform:uppercase;font-weight:700;">${cv.poste||''}</p>
        </div>
        <div style="margin-bottom:${s.sectionGap};">
          <p style="font-size:${s.profileSize};line-height:${s.lineHeight};color:#475569;border-left:4px solid #2563eb;padding-left:20px;margin-bottom:15px;">${cv.profil||''}</p>
          <div style="padding-left:24px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            ${[{v: cv.email, i: window.ATS_ICONS.mail}, {v: cv.telephone, i: window.ATS_ICONS.ph}, {v: `${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim(), i: window.ATS_ICONS.pin}].filter(x => x.v).map(x => `<p style="font-size:10px;color:#475569;display:flex;align-items:center;gap:5px;"><span style="display:flex;align-items:center;transform:translateY(1.5px);color:#2563eb;">${x.i}</span>${x.v}</p>`).join('')}
          </div>
          <div style="padding-left:24px;display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;">
            ${window.renderDetailsSection(cv, '#2563eb', '#475569', { fontSize: '10px', marginBottom: '4px' })}
          </div>
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
        ${(cv.formation && cv.formation.length > 0) ? `
        <div style="margin-top:30px;">
          ${cv.formation.map(f => `
            <div style="margin-bottom:15px;margin-left:20px;">
              <p style="font-size:12px;font-weight:800;color:#1e3a8a;">${f.diplome}</p>
              <p style="font-size:10px;color:#2563eb;font-weight:600;">${f.ecole} · ${f.annee}</p>
            </div>`).join('')}
        </div>` : ''}
        ${(cv.langues && cv.langues.length > 0) ? `
        <div style="margin-top:20px;margin-left:20px;display:flex;gap:15px;flex-wrap:wrap;">
          ${cv.langues.map(l => `<span style="font-size:9.5px;color:#1e3a8a;font-weight:700;">• ${typeof l === 'string' ? l : l.langue || l}</span>`).join('')}
        </div>` : ''}
        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <div style="margin-top:24px;margin-left:20px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
            ${cv.portfolio.map(p => `<div style="background:#eff6ff;padding:12px;border-radius:12px;border-left:4px solid #2563eb;"><p style="font-size:11px;font-weight:800;color:#1e3a8a;margin-bottom:3px;">${p.nom}</p><p style="font-size:9px;color:#64748b;line-height:1.4;">${p.desc}</p></div>`).join('')}
          </div>
        </div>` : ''}
        ${(cv.awards && cv.awards.length > 0) ? `
        <div style="margin-top:20px;margin-left:20px;">
          ${cv.awards.map(a => `<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;"><div style="width:6px;height:6px;background:#2563eb;transform:rotate(45deg);"></div><p style="font-size:10px;color:#1e3a8a;font-weight:700;">${a}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div style="margin-top:24px;margin-left:20px;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
            ${cv.references.map(r => `<div><p style="font-size:11px;font-weight:800;color:#1e3a8a;">${r.n || r.nom}</p><p style="font-size:9.5px;color:#2563eb;">${r.p || r.poste}</p></div>`).join('')}
          </div>
        </div>` : ''}
      </div>
    </div>`;
  }

  function genT12(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-onyx-minimal" style="font-family:'Manrope',sans-serif; background:#fff; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start; padding:${s.mainPadding};">
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:${s.sectionGap};border-bottom:4px solid #000;padding-bottom:20px;">
        <h1 style="font-size:${s.nameSize};font-weight:900;letter-spacing:-2px;color:#000;line-height:0.9;">${cv.prenom||'UN'}<br>${cv.nom||'KNOWN'}</h1>
        <div style="text-align:right;">
          <p style="font-size:${s.headerSize};font-weight:700;color:#000;text-transform:uppercase;letter-spacing:3px;">${cv.poste||''}</p>
          <p style="font-size:9px;color:#666;margin-top:8px;">${cv.email} · ${cv.telephone} · ${`${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim()}</p>
        </div>
      </div>
      <div style="display:grid; grid-template-columns: 1fr 240px; gap:48px; flex:1;">
        <div style="padding-right:20px;">
          <div style="margin-bottom:${s.sectionGap};">
            <p style="font-size:${s.profileSize};line-height:${s.lineHeight};color:#333;font-weight:500;">${cv.profil||''}</p>
          </div>
          <p style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:24px;color:#000;">Work Experience</p>
          ${(cv.experience||[]).map(e => `
            <div style="margin-bottom:${s.itemGap};">
              <p style="font-size:14px;font-weight:900;color:#000;margin-bottom:2px;">${typeof e === 'string' ? e : e.poste}</p>
              <div style="display:flex;justify-content:space-between;margin-bottom:8px;"><p style="font-size:10px;color:#666;">${e.employeur||''}</p><p style="font-size:10px;font-weight:700;color:#000;">${e.dates||''}</p></div>
              <div style="font-size:${s.baseSize};color:#444;line-height:1.6;">${e.missions||''}</div>
            </div>`).join('')}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-top:20px;">
            <p style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;color:#000;">Portfolio</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
              ${cv.portfolio.map(p => `<div><p style="font-size:12px;font-weight:800;color:#000;">${p.nom}</p><p style="font-size:10px;color:#444;">${p.desc}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;color:#000;">References</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
              ${cv.references.map(r => `<div><p style="font-size:12px;font-weight:800;color:#000;">${r.n || r.nom}</p><p style="font-size:10px;color:#666;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-top:30px;">
            <p style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:24px;color:#000;">Education</p>
            ${cv.formation.map(f => `
              <div style="margin-bottom:15px;">
                <p style="font-size:13px;font-weight:800;color:#000;margin-bottom:2px;">${f.diplome}</p>
                <div style="display:flex;justify-content:space-between;margin-bottom:4px;"><p style="font-size:10px;color:#666;">${f.ecole}</p><p style="font-size:10px;font-weight:700;color:#000;">${f.annee}</p></div>
              </div>`).join('')}
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-top:24px;">
            <p style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:16px;color:#000;">Distinctions</p>
            ${cv.awards.map(a => `<div style="margin-bottom:6px;display:flex;gap:12px;align-items:center;"><div style="width:12px;height:12px;background:#000;"></div><p style="font-size:10.5px;font-weight:800;color:#000;">${a}</p></div>`).join('')}
          </div>` : ''}
        </div>
        <div style="background:#fafafa; border-left:1px solid #eee; padding:30px 25px; display:flex; flex-direction:column; justify-content:center;">
          <p style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:20px;color:#000;">Details</p>
          ${window.renderDetailsSection(cv, '#000', '#000', { fontSize: '10px', marginBottom: '8px' })}
          <div style="height:32px;"></div>
          <p style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:20px;color:#000;">Skills</p>
          ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#000")).join('')}
          ${(cv.langues && cv.langues.length > 0) ? `
          <div style="height:32px;"></div>
          <p style="font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:2px;margin-bottom:20px;color:#000;">Languages</p>
          ${cv.langues.map(l => `<div style="margin-bottom:8px;"><p style="font-size:11px;font-weight:800;color:#000;">${typeof l === 'string' ? l : l.langue || l}</p></div>`).join('')}
          ` : ''}
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
            <p style="font-size:11px;font-weight:900;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:9px;text-align:center;">CONTACT</p>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.mail}</span><p style="font-size:9px;color:rgba(255,245,220,0.8);line-height:1.2;word-break:break-word;">${cv.email}</p></div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.ph}</span><p style="font-size:9px;color:rgba(255,245,220,0.8);line-height:1.2;word-break:break-word;">${cv.telephone}</p></div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.pin}</span><p style="font-size:9px;color:rgba(255,245,220,0.8);line-height:1.2;word-break:break-word;">${`${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}`.trim()}</p></div>
            <div style="height:15px;"></div>
            <p style="font-size:11px;font-weight:900;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:9px;text-align:center;">DÉTAILS</p>
            ${window.renderDetailsSection(cv, '#D4AF37', 'rgba(255,245,220,0.8)', { fontSize: '9px', marginBottom: '8px' })}
            ${(cv.langues && cv.langues.length > 0) ? `
            <div style="height:15px;"></div>
            <p style="font-size:11px;font-weight:900;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:9px;text-align:center;">LANGUES</p>
            ${cv.langues.map(l => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.ln}</span><p style="font-size:9px;color:rgba(255,245,220,0.8);line-height:1;">${typeof l === 'string' ? l : l.langue || l}</p></div>`).join('')}
            ` : ''}
          </div>
        </div>
      </div>
      <div style="flex:1;background:#FFFCF7;padding:42px 34px;display:flex;flex-direction:column; justify-content:flex-start;">
        <div style="margin-bottom:22px;">
          <h1 style="font-size:${s.nameSize};font-weight:700;color:#2C1810;line-height:0.9;">${cv.prenom}<br><span style="font-style:italic;color:#8B3A2C;">${cv.nom}</span></h1>
          <p style="font-size:${s.headerSize};color:#8B3A2C;letter-spacing:4px;text-transform:uppercase;">${cv.poste}</p>
        </div>
        <div style="margin-bottom:${s.sectionGap};padding:16px 18px;background:rgba(139,58,44,0.05);border-left:3px solid #D4AF37;border-radius:0 6px 6px 0;">
          <p style="font-size:11px;font-weight:900;color:#8B3A2C;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:8px;">PROFIL</p>
          <p style="font-size:${s.baseSize};color:#4A3020;line-height:${s.lineHeight};font-style:italic;">${cv.profil}</p>
        </div>
        <div style="margin-bottom:${s.sectionGap};">
          ${atsSec(ATS_ICONS.bag, "EXPÉRIENCES", "#2C1810", "#E8D5B0")}
          ${(cv.experience || []).map(e => `
            <div style="margin-bottom:${s.itemGap};padding-left:14px;border-left:2px solid #E8D5B0;position:relative;">
              <div style="position:absolute;left:-5px;top:5px;width:8px;height:8px;background:#D4AF37;border-radius:50%;"></div>
              <p style="font-size:14px;font-weight:900;color:#2C1810;">${typeof e === 'string' ? e : e.poste}</p>
              <p style="font-size:10px;color:#8B3A2C;font-style:italic;">${e.employeur || ''}</p>
            </div>`).join('')}
        </div>
        ${(cv.formation && cv.formation.length > 0) ? `
        <div style="margin-bottom:${s.sectionGap};">
          ${atsSec(ATS_ICONS.sch, "FORMATION", "#2C1810", "#E8D5B0")}
          ${cv.formation.map(f => `
            <div style="margin-bottom:12px;padding-left:14px;border-left:2px solid #E8D5B0;">
              <p style="font-size:12px;font-weight:700;color:#2C1810;">${f.diplome}</p>
              <p style="font-size:10px;color:#8B3A2C;">${f.ecole} (${f.annee})</p>
            </div>`).join('')}
        </div>` : ''}
        ${(cv.portfolio && cv.portfolio.length > 0) ? `
        <div style="margin-bottom:${s.sectionGap};">
          ${atsSec(ATS_ICONS.bag, "PROJETS", "#2C1810", "#E8D5B0")}
          ${cv.portfolio.map(p => `<div style="margin-bottom:8px;padding-left:14px;border-left:2px solid #D4AF37;"><p style="font-size:11px;font-weight:700;color:#2C1810;">${p.nom}</p><p style="font-size:9.5px;color:#4A3020;line-height:1.4;">${p.desc}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.awards && cv.awards.length > 0) ? `
        <div style="margin-bottom:${s.sectionGap};">
          ${atsSec(ATS_ICONS.star, "DISTINCTIONS", "#2C1810", "#E8D5B0")}
          ${cv.awards.map(a => `<div style="margin-bottom:8px;padding:10px;background:#FFF9E5;border-radius:6px;border:1px solid #E8D5B0;display:flex;gap:10px;"><span style="color:#D4AF37;">★</span><p style="font-size:10px;color:#2C1810;font-weight:700;">${a}</p></div>`).join('')}
        </div>` : ''}
        ${(cv.references && cv.references.length > 0) ? `
        <div>
          ${atsSec(ATS_ICONS.ph, "RÉFÉRENCES", "#2C1810", "#E8D5B0")}
          ${cv.references.map(r => `<div style="margin-bottom:8px;padding-left:14px;border-left:2px solid #D4AF37;"><p style="font-size:11px;font-weight:700;color:#2C1810;">${r.n || r.nom}</p><p style="font-size:10px;color:#8B3A2C;">${r.p || r.poste}</p></div>`).join('')}
        </div>` : ''}
      </div>
    </div>`;
  }

  // Registering templates
  Object.assign(window.cvGenerators, {
    genT1, genT2, genT3, genT4, genT5, genT6, genT7, genT8, genT9, genT10, genT11, genT12, genS2
  });
})();

