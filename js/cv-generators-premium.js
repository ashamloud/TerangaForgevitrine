/**
 * CV Generators Premium - TerangaForge
 * Contains luxurious, prestige and Mandala-style templates.
 */
(function() {
  const { getSmartLayout, ATS_ICONS, buildMandala, buildMandalaSmall, buildMandalaCV, atsSec, atsBullet } = window;

  function genMandalaRoyal(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-mandala-royal" style="width:794px;min-height:1123px;display:flex;font-family:'Outfit',sans-serif;overflow:hidden; background:#fff; color:#1a1a1a;">
      <div style="width:280px;flex-shrink:0;position:relative;overflow:hidden; background:linear-gradient(170deg, #111827 0%, #1e293b 50%, #111827 100%);">
        <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 35%,rgba(255,255,255,0.06) 0%,transparent 65%);pointer-events:none;"></div>
        <div style="position:absolute;top:-15px;left:50%;transform:translateX(-50%);pointer-events:none;">${buildMandala('#D4AF37', 300)}</div>
        <div style="position:absolute;bottom:18px;left:50%;transform:translateX(-50%);pointer-events:none;opacity:0.7;">${buildMandalaSmall('#D4AF37', 100)}</div>
        <div style="relative;z-index:10;padding:265px 22px 130px;display:flex;flex-direction:column;align-items:center;">
          <div style="width:110px;height:110px;border-radius:50%;background:rgba(255,255,255,0.1);border:2px solid #D4AF37;display:flex;align-items:center;justify-content:center;margin-bottom:14px;"><span style="color:#D4AF37;opacity:0.5;">${ATS_ICONS.usr}</span></div>
          <h2 style="font-size:calc(${s.nameSize} * 0.45);font-weight:800;color:white;text-align:center;letter-spacing:0.5px;margin-bottom:3px;line-height:1;">${cv.prenom} ${cv.nom}</h2>
          <p style="font-size:${s.headerSize};color:#D4AF37;letter-spacing:3px;text-transform:uppercase;text-align:center;margin-bottom:18px;">${cv.poste}</p>
          <div style="width:65%;height:1px;background:linear-gradient(90deg,transparent,#D4AF37,transparent);margin-bottom:18px;"></div>
          <div style="width:100%;margin-bottom:16px;">
            <p style="font-size:10px;font-weight:700;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px;text-align:center;">CONTACT</p>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.mail}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.8);line-height:1;">${cv.email}</p></div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.ph}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.8);line-height:1;">${cv.telephone}</p></div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.pin}</span><p style="font-size:10.5px;color:rgba(255,255,255,0.8);line-height:1;">${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}</p></div>
          </div>
          <div style="width:100%;margin-bottom:14px;">
            <p style="font-size:10px;font-weight:700;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px;text-align:center;">DÉTAILS</p>
            ${window.renderDetailsSection(cv, '#D4AF37', 'rgba(255,255,255,0.8)')}
          </div>
          <div style="width:100%;margin-bottom:14px;">
            <p style="font-size:10px;font-weight:700;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px;text-align:center;">COMPÉTENCES</p>
            ${(cv.competences || []).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#D4AF37", "rgba(255,255,255,0.15)")).join('')}
          </div>
          ${(cv.langues && cv.langues.length > 0) ? `
          <div style="width:100%;margin-bottom:14px;">
            <p style="font-size:10px;font-weight:700;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px;text-align:center;">LANGUES</p>
            ${cv.langues.map(l => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.ln}</span><p style="font-size:9px;color:rgba(255,255,255,0.8);line-height:1;">${typeof l === 'string' ? l : l.langues}</p></div>`).join('')}
          </div>` : ''}
        </div>
      </div>
      <div style="flex:1;background:#fff;padding:44px 34px;display:flex;flex-direction:column; justify-content:space-between;">
        <div style="flex-shrink:0;">
          <div style="margin-bottom:${s.sectionGap};padding-bottom:18px;border-bottom:1px solid #f1f5f9;">
            <h1 style="font-size:${s.nameSize};font-weight:900;color:#0f172a;letter-spacing:-1px;line-height:0.9;margin-bottom:5px;">${cv.prenom} <span style="color:#c4a010;">${cv.nom}</span></h1>
            <p style="font-size:${s.headerSize};color:#64748b;letter-spacing:4px;text-transform:uppercase;font-weight:700;">${cv.poste}</p>
          </div>
          <div style="margin-bottom:${s.sectionGap};padding:14px 16px;background:#fcfaf2;border-left:3px solid #D4AF37;border-radius:0 6px 6px 0;">
            <p style="font-size:9px;font-weight:700;color:#846a14;letter-spacing:2px;text-transform:uppercase;margin-bottom:7px;">PROFIL</p>
            <p style="font-size:${s.profileSize};color:#475569;line-height:${s.lineHeight};">${cv.profil}</p>
          </div>
        </div>
        <div style="flex:1;">
          <div style="margin-bottom:${s.sectionGap};">
            ${atsSec(ATS_ICONS.bag, "EXPÉRIENCES", "#0f172a", "#f1f5f9")}
            ${(cv.experience || []).map(e => `
              <div style="margin-bottom:${s.itemGap};padding-left:14px;border-left:2px solid #f1f5f9;position:relative;">
                <div style="position:absolute;left:-5px;top:5px;width:8px;height:8px;background:#D4AF37;border-radius:50%;"></div>
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2px;">
                  <p style="font-size:12px;font-weight:700;color:#0f172a;">${typeof e === 'string' ? e : e.poste}</p>
                  <span style="font-size:8px;background:#1e293b;color:white;padding:2px 8px;border-radius:3px;font-weight:700;">${e.employeur || ''}</span>
                </div>
                ${Array.isArray(e.missions) ? e.missions.map(b => atsBullet(b, "#D4AF37")).join('') : atsBullet(e.missions || '', "#D4AF37")}
              </div>`).join('')}
          </div>
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            ${atsSec(ATS_ICONS.sch, "FORMATION", "#0f172a", "#f1f5f9")}
            ${cv.formation.map(f => `
              <div style="margin-bottom:${s.itemGap};padding-left:14px;border-left:2px solid #f1f5f9;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2px;">
                  <p style="font-size:12px;font-weight:700;color:#0f172a;">${f.diplome}</p>
                  <span style="font-size:9px;color:#D4AF37;font-weight:700;">${f.annee}</span>
                </div>
                <p style="font-size:10px;color:#64748b;">${f.ecole}</p>
              </div>`).join('')}
          </div>` : ''}
          ${(cv.certifications && cv.certifications.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            ${atsSec(ATS_ICONS.cert, "CERTIFICATIONS", "#0f172a", "#f1f5f9")}
            ${cv.certifications.map(c => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><span style="color:#D4AF37;">${ATS_ICONS.chk}</span><p style="font-size:10px;color:#475569;">${typeof c === 'string' ? c : c.titre}</p></div>`).join('')}
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            ${atsSec(ATS_ICONS.star, "DISTINCTIONS", "#0f172a", "#f1f5f9")}
            ${cv.awards.map(a => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><span style="color:#D4AF37;">★</span><p style="font-size:10px;color:#475569;font-style:italic;">${a}</p></div>`).join('')}
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div>
            ${atsSec(ATS_ICONS.ref, "RÉFÉRENCES", "#0f172a", "#f1f5f9")}
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
              ${cv.references.map(r => `<div><p style="font-size:10px;font-weight:700;color:#0f172a;">${r.n || r.nom}</p><p style="font-size:9px;color:#64748b;">${r.p || r.poste}</p><p style="font-size:8px;color:#D4AF37;">${r.c || r.contact}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
        <div style="height:20px;"></div>
      </div>
    </div>`;
  }

  function genP1(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-1" style="font-family:'Outfit',sans-serif; background:#fff; color:#1a1a1a; position:relative; overflow:hidden; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; left:0; width:100%; height:8px; background:linear-gradient(90deg, #d4af37, #fef3c7, #d4af37);"></div>
      <div style="padding:${s.mainPadding}; display:grid; grid-template-columns: 240px 1fr; gap:40px; flex:1;">
        <div class="sidebar-p1" style="display:flex; flex-direction:column; justify-content:flex-start;">
          <div style="width:140px; height:140px; border-radius:30px; background:#1a1a1a; margin-bottom:25px; display:flex; align-items:center; justify-content:center; font-size:60px; font-weight:900; color:#d4af37; transform:rotate(-3deg); border:4px solid #f1f5f9;">${(cv.prenom||'U')[0]}</div>
          <div style="margin-bottom:35px;">
            <h1 style="font-size:${s.nameSize}; font-weight:900; line-height:0.9; margin-bottom:5px; color:#1a1a1a;">${cv.prenom}</h1>
            <h1 style="font-size:${s.nameSize}; font-weight:900; line-height:0.9; margin-bottom:15px; color:#d4af37;">${cv.nom}</h1>
            <p style="font-size:${s.headerSize}; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#64748b; border-left:3px solid #d4af37; padding-left:10px;">${cv.poste}</p>
          </div>
          <div style="background:#fffbeb; padding:20px; border-radius:20px; margin-bottom:30px;">
            <p style="font-size:11px; font-weight:900; letter-spacing:1px; margin-bottom:12px; color:#1a1a1a;">CONTACT</p>
            <div style="font-size:11px; color:#475569;">
              <p style="margin-bottom:8px;">${cv.email}</p>
              <p style="margin-bottom:8px;">${cv.telephone}</p>
              <p>${cv.adresse || ''}</p>
              <p>${cv.code_postal || ''} ${cv.ville}</p>
            </div>
          </div>
          <div style="margin-bottom:25px;">
            <p style="font-size:11px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">DÉTAILS</p>
            ${window.renderDetailsSection(cv, '#d4af37', '#475569')}
          </div>
          <div style="margin-bottom:25px;">
            <p style="font-size:11px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">COMPÉTENCES</p>
            ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#d4af37")).join('')}
          </div>
          ${(cv.langues && cv.langues.length > 0) ? `
          <div style="margin-bottom:25px;">
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">LANGUES</p>
            <div style="font-size:10px; color:#475569;">
              ${cv.langues.map(l => `<p style="margin-bottom:6px;">• ${typeof l === 'string' ? l : l.langues}</p>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.centres && cv.centres.length > 0) ? `
          <div>
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">CENTRES D'INTÉRÊT</p>
            <div style="display:flex; flex-wrap:wrap; gap:8px;">
              ${cv.centres.map(c => `<span style="font-size:9.5px; color:#d4af37;">${c}</span>`).join(' • ')}
            </div>
          </div>` : ''}
        </div>
        <div class="main-p1">
          <div style="margin-bottom:${s.sectionGap};">
            <p style="font-size:${s.profileSize}; line-height:1.7; color:#334155; font-style:italic;">"${cv.profil}"</p>
          </div>
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#d4af37;"></span> EXPÉRIENCES
            </h2>
            ${(cv.experience||[]).map(e => `
              <div style="margin-bottom:${s.itemGap}; position:relative;">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                  <p style="font-size:13px; font-weight:800; color:#1a1a1a;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:10px; font-weight:700; color:#d4af37;">${e.dates||''}</p>
                </div>
                <p style="font-size:11px; font-weight:700; color:#b45309; margin-bottom:8px;">${e.employeur||''}</p>
                <div style="font-size:${s.baseSize}; color:#475569; line-height:${s.lineHeight};">${Array.isArray(e.missions) ? e.missions.map(m => window.atsBullet(m, "#d4af37")).join('') : window.atsBullet(e.missions||'', "#d4af37")}</div>
              </div>
            `).join('')}
          </div>
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#d4af37;"></span> FORMATION
            </h2>
            ${cv.formation.map(f => `
              <div style="margin-bottom:15px;">
                <p style="font-size:12px; font-weight:800; color:#1a1a1a;">${f.diplome}</p>
                <p style="font-size:10px; color:#d4af37; font-weight:700;">${f.ecole} | ${f.annee}</p>
              </div>`).join('')}
          </div>` : ''}
          ${(cv.certifications && cv.certifications.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#d4af37;"></span> CERTIFICATIONS
            </h2>
            ${cv.certifications.map(c => `<p style="font-size:11px; color:#475569; margin-bottom:8px;">• ${typeof c === 'string' ? c : c.titre}</p>`).join('')}
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#d4af37;"></span> PROJETS
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
              ${cv.portfolio.map(p => `
                <div style="background:#f8fafc; padding:12px; border-radius:10px;">
                  <p style="font-size:11px; font-weight:800; color:#1a1a1a; margin-bottom:3px;">${p.nom}</p>
                  <p style="font-size:9.5px; color:#64748b; line-height:1.4;">${p.desc}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#d4af37;"></span> DISTINCTIONS
            </h2>
            <div style="background:#fffbeb; padding:15px; border-radius:15px; border:1px solid #fef3c7;">
              ${cv.awards.map(a => `<div style="display:flex; gap:10px; margin-bottom:8px;"><span style="color:#d4af37;">★</span><p style="font-size:11px; color:#475569; font-style:italic;">${a}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div>
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#d4af37;"></span> RÉFÉRENCES
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.references.map(r => `<div><p style="font-size:11px; font-weight:800; color:#1a1a1a;">${r.n || r.nom}</p><p style="font-size:10px; color:#d4af37;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genP2(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-2" style="font-family:'Outfit',sans-serif; background:#0f172a; color:#f8fafc; position:relative; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; right:0; width:300px; height:300px; background:radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%);"></div>
      <div style="padding:${s.mainPadding};">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:${s.sectionGap}; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:30px;">
          <div>
            <h1 style="font-size:${s.nameSize}; font-weight:900; letter-spacing:-2px; line-height:0.9;">${cv.prenom} <span style="color:#6366f1;">${cv.nom}</span></h1>
            <p style="font-size:${s.headerSize}; letter-spacing:5px; text-transform:uppercase; color:#94a3b8; margin-top:10px;">${cv.poste}</p>
          </div>
          <div style="text-align:right; font-size:11px; color:#94a3b8;">
            <p>${cv.email}</p>
            <p>${cv.telephone}</p>
            <p>${cv.ville}</p>
          </div>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 280px; gap:60px;">
          <div>
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#6366f1; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Expériences</h2>
              ${(cv.experience||[]).map(e => `
                <div style="margin-bottom:${s.itemGap}; border-left:2px solid rgba(99,102,241,0.3); padding-left:25px; position:relative;">
                  <div style="width:8px; height:8px; background:#6366f1; border-radius:50%; position:absolute; left:-5px; top:5px;"></div>
                  <p style="font-size:14px; font-weight:800; color:#f8fafc; margin-bottom:4px;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:11px; color:#818cf8; font-weight:700; margin-bottom:10px;">${e.employeur||''} | ${e.dates||''}</p>
                  <div style="font-size:${s.baseSize}; color:#94a3b8; line-height:${s.lineHeight};">${Array.isArray(e.missions) ? e.missions.map(m => window.atsBullet(m, "#6366f1")).join('') : window.atsBullet(e.missions||'', "#6366f1")}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:30px; border:1px solid rgba(255,255,255,0.05); margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#6366f1; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">À propos</h2>
              <p style="font-size:${s.profileSize}; line-height:1.8; color:#cbd5e1;">${cv.profil}</p>
            </div>
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Détails</h2>
              ${window.renderDetailsSection(cv, '#6366f1', '#94a3b8')}
            </div>
            ${(cv.competences && cv.competences.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Expertise</h2>
              ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#6366f1", "rgba(255,255,255,0.1)")).join('')}
            </div>` : ''}
            ${(cv.langues && cv.langues.length > 0) ? `
            <div style="margin-bottom:25px;">
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Langues</h2>
              <div style="font-size:11px; color:#94a3b8;">
                ${cv.langues.map(l => `<p style="margin-bottom:8px;">• ${typeof l === 'string' ? l : l.langues}</p>`).join('')}
              </div>
            </div>` : ''}
            ${(cv.centres && cv.centres.length > 0) ? `
            <div>
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Loisirs</h2>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${cv.centres.map(c => `<span style="font-size:10px; border:1px solid rgba(99,102,241,0.3); padding:4px 10px; border-radius:8px; color:#818cf8;">${c}</span>`).join('')}
              </div>
            </div>` : ''}
          </div>
        </div>
        <div>
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:13px; font-weight:900; color:#6366f1; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Formation</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.formation.map(f => `
                <div>
                  <p style="font-size:13px; font-weight:800; color:#f8fafc;">${f.diplome}</p>
                  <p style="font-size:11px; color:#94a3b8;">${f.ecole} | ${f.annee}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.certifications && cv.certifications.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:13px; font-weight:900; color:#6366f1; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Certifications</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
              ${cv.certifications.map(c => `<p style="font-size:11px; color:#cbd5e1; display:flex; gap:8px;"><span style="color:#6366f1;">★</span>${typeof c === 'string' ? c : c.titre}</p>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:13px; font-weight:900; color:#6366f1; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Projets</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.portfolio.map(p => `
                <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:15px; border:1px solid rgba(255,255,255,0.05);">
                  <p style="font-size:12px; font-weight:800; color:#6366f1;">${p.nom}</p>
                  <p style="font-size:10px; color:#94a3b8; line-height:1.4;">${p.desc}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:13px; font-weight:900; color:#818cf8; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Distinctions</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
              ${cv.awards.map(a => `<div style="padding:12px; background:rgba(99,102,241,0.05); border:1px solid rgba(99,102,241,0.2); border-radius:10px; display:flex; gap:8px;"><span style="color:#6366f1;">✦</span><p style="font-size:10.5px; color:#cbd5e1;">${a}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div>
            <h2 style="font-size:13px; font-weight:900; color:#6366f1; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Références</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px;">
              ${cv.references.map(r => `<div><p style="font-size:13px; font-weight:800; color:#f8fafc;">${r.n || r.nom}</p><p style="font-size:11px; color:#6366f1;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genP3(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-3" style="font-family:'Outfit',sans-serif; background:#fff; color:#1a1a1a; position:relative; overflow:hidden; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; left:0; width:100%; height:8px; background:linear-gradient(90deg, #10b981, #d1fae5, #10b981);"></div>
      <div style="padding:${s.mainPadding}; display:grid; grid-template-columns: 240px 1fr; gap:40px;">
        <div class="sidebar-p3">
          <div style="width:140px; height:140px; border-radius:30px; background:#1a1a1a; margin-bottom:25px; display:flex; align-items:center; justify-content:center; font-size:60px; font-weight:900; color:#10b981; transform:rotate(-3deg); border:4px solid #f1f5f9;">${(cv.prenom||'U')[0]}</div>
          <div style="margin-bottom:35px;">
            <h1 style="font-size:${s.nameSize}; font-weight:900; line-height:0.9; margin-bottom:5px; color:#1a1a1a;">${cv.prenom}</h1>
            <h1 style="font-size:${s.nameSize}; font-weight:900; line-height:0.9; margin-bottom:15px; color:#10b981;">${cv.nom}</h1>
            <p style="font-size:${s.headerSize}; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#64748b; border-left:3px solid #10b981; padding-left:10px;">${cv.poste}</p>
          </div>
          <div style="background:#f0fdf4; padding:20px; border-radius:20px; margin-bottom:30px;">
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:12px; color:#1a1a1a;">CONTACT</p>
            <div style="font-size:10px; color:#475569;">
              <p style="margin-bottom:8px;">${cv.email}</p>
              <p style="margin-bottom:8px;">${cv.telephone}</p>
              <p>${cv.ville}</p>
            </div>
          </div>
          <div style="margin-bottom:25px;">
            <p style="font-size:11px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">COMPÉTENCES</p>
            ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#10b981")).join('')}
          </div>
          ${(cv.langues && cv.langues.length > 0) ? `
          <div>
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">LANGUES</p>
            <div style="font-size:10px; color:#475569;">
              ${cv.langues.map(l => `<p style="margin-bottom:6px;">• ${typeof l === 'string' ? l : l.langue || l}</p>`).join('')}
            </div>
          </div>` : ''}
        </div>
        <div class="main-p3">
          <div style="margin-bottom:${s.sectionGap};">
            <p style="font-size:${s.profileSize}; line-height:1.7; color:#334155; font-style:italic;">"${cv.profil}"</p>
          </div>
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#10b981;"></span> EXPÉRIENCES
            </h2>
            ${(cv.experience||[]).map(e => `
              <div style="margin-bottom:${s.itemGap}; position:relative;">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                  <p style="font-size:13px; font-weight:800; color:#1a1a1a;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:10px; font-weight:700; color:#10b981;">${e.dates||''}</p>
                </div>
                <p style="font-size:11px; font-weight:700; color:#059669; margin-bottom:8px;">${e.employeur||''}</p>
                <div style="font-size:${s.baseSize}; color:#475569; line-height:${s.lineHeight};">${Array.isArray(e.missions) ? e.missions.map(m => window.atsBullet(m, "#10b981")).join('') : window.atsBullet(e.missions||'', "#10b981")}</div>
              </div>
            `).join('')}
          </div>
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#10b981;"></span> FORMATION
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.formation.map(f => `
                <div style="margin-bottom:15px;">
                  <p style="font-size:12px; font-weight:800; color:#1a1a1a;">${f.diplome}</p>
                  <p style="font-size:10px; color:#10b981; font-weight:700;">${f.ecole} | ${f.annee}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#10b981;"></span> PROJETS
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
              ${cv.portfolio.map(p => `
                <div style="background:#f0fdf4; padding:12px; border-radius:10px; border:1px solid #d1fae5;">
                  <p style="font-size:11px; font-weight:800; color:#1a1a1a;">${p.nom}</p>
                  <p style="font-size:10px; color:#059669; line-height:1.4;">${p.desc}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#10b981;"></span> DISTINCTIONS
            </h2>
            <div style="background:#ecfdf5; padding:15px; border-radius:15px; border:1px solid #d1fae5;">
              ${cv.awards.map(a => `<div style="display:flex; gap:10px; margin-bottom:8px;"><span style="color:#10b981;">🏆</span><p style="font-size:11px; color:#065f46; font-style:italic;">${a}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div>
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#10b981;"></span> RÉFÉRENCES
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.references.map(r => `<div><p style="font-size:11px; font-weight:800; color:#1a1a1a;">${r.n || r.nom}</p><p style="font-size:10px; color:#10b981;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genP4(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-4" style="font-family:'Outfit',sans-serif; background:#0f172a; color:#f8fafc; position:relative; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; right:0; width:300px; height:300px; background:radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%);"></div>
      <div style="padding:${s.mainPadding};">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:${s.sectionGap}; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:30px;">
          <div>
            <h1 style="font-size:${s.nameSize}; font-weight:900; letter-spacing:-2px; line-height:0.9;">${cv.prenom} <span style="color:#ec4899;">${cv.nom}</span></h1>
            <p style="font-size:${s.headerSize}; letter-spacing:5px; text-transform:uppercase; color:#94a3b8; margin-top:10px;">${cv.poste}</p>
          </div>
          <div style="text-align:right; font-size:11px; color:#94a3b8;">
            <p>${cv.email}</p>
            <p>${cv.telephone}</p>
            <p>${cv.ville}</p>
          </div>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 280px; gap:60px;">
          <div>
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#ec4899; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Expériences</h2>
              ${(cv.experience||[]).map(e => `
                <div style="margin-bottom:${s.itemGap}; border-left:2px solid rgba(236,72,153,0.3); padding-left:25px; position:relative;">
                  <div style="width:8px; height:8px; background:#ec4899; border-radius:50%; position:absolute; left:-5px; top:5px;"></div>
                  <p style="font-size:14px; font-weight:800; color:#f8fafc; margin-bottom:4px;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:11px; color:#f472b6; font-weight:700; margin-bottom:10px;">${e.employeur||''} | ${e.dates||''}</p>
                  <div style="font-size:${s.baseSize}; color:#94a3b8; line-height:${s.lineHeight};">${Array.isArray(e.missions) ? e.missions.map(m => window.atsBullet(m, "#ec4899")).join('') : window.atsBullet(e.missions||'', "#ec4899")}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:30px; border:1px solid rgba(255,255,255,0.05); margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#ec4899; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">À propos</h2>
              <p style="font-size:${s.profileSize}; line-height:1.8; color:#cbd5e1;">${cv.profil}</p>
            </div>
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Détails</h2>
              ${window.renderDetailsSection(cv, '#ec4899', '#cbd5e1')}
            </div>
            ${(cv.langues && cv.langues.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#ec4899; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Langues</h2>
              <div style="font-size:11px; color:#cbd5e1;">
                ${cv.langues.map(l => `<p style="margin-bottom:8px;">• ${typeof l === 'string' ? l : l.langues}</p>`).join('')}
              </div>
            </div>` : ''}
            ${(cv.competences && cv.competences.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Compétences</h2>
              ${cv.competences.map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#ec4899", "rgba(255,255,255,0.1)")).join('')}
            </div>` : ''}
            ${(cv.centres && cv.centres.length > 0) ? `
            <div>
              <h2 style="font-size:13px; font-weight:900; color:#ec4899; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Centres d'intérêt</h2>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${cv.centres.map(c => `<span style="font-size:10px; border:1px solid rgba(236,72,153,0.3); padding:4px 10px; border-radius:8px; color:#f472b6;">${c}</span>`).join('')}
              </div>
            </div>` : ''}
          </div>
        </div>
        <div>
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:13px; font-weight:900; color:#ec4899; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Formation</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.formation.map(f => `
                <div>
                  <p style="font-size:13px; font-weight:800; color:#f8fafc;">${f.diplome}</p>
                  <p style="font-size:11px; color:#94a3b8;">${f.ecole} | ${f.annee}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:13px; font-weight:900; color:#ec4899; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Projets</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.portfolio.map(p => `
                <div style="background:rgba(255,255,255,0.03); padding:15px; border-radius:15px; border:1px solid rgba(255,255,255,0.05);">
                  <p style="font-size:12px; font-weight:800; color:#ec4899;">${p.nom}</p>
                  <p style="font-size:10px; color:#94a3b8; line-height:1.4;">${p.desc}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:13px; font-weight:900; color:#f472b6; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Distinctions</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
              ${cv.awards.map(a => `<div style="padding:12px; background:rgba(236,72,153,0.05); border:1px solid rgba(236,72,153,0.2); border-radius:10px; display:flex; gap:8px;"><span style="color:#ec4899;">✸</span><p style="font-size:10.5px; color:#cbd5e1;">${a}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div>
            <h2 style="font-size:13px; font-weight:900; color:#ec4899; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Références</h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:30px;">
              ${cv.references.map(r => `<div><p style="font-size:13px; font-weight:800; color:#f8fafc;">${r.n || r.nom}</p><p style="font-size:11px; color:#ec4899;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genP5(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-5" style="font-family:'Outfit',sans-serif; background:#fff; color:#1a1a1a; position:relative; overflow:hidden; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; left:0; width:100%; height:8px; background:linear-gradient(90deg, #3b82f6, #dbeafe, #3b82f6);"></div>
      <div style="padding:${s.mainPadding}; display:grid; grid-template-columns: 240px 1fr; gap:40px;">
        <div class="sidebar-p5">
          <div style="width:140px; height:140px; border-radius:30px; background:#1a1a1a; margin-bottom:25px; display:flex; align-items:center; justify-content:center; font-size:60px; font-weight:900; color:#3b82f6; transform:rotate(-3deg); border:4px solid #f1f5f9;">${(cv.prenom||'U')[0]}</div>
          <div style="margin-bottom:35px;">
            <h1 style="font-size:${s.nameSize}; font-weight:900; line-height:0.9; margin-bottom:5px; color:#1a1a1a;">${cv.prenom}</h1>
            <h1 style="font-size:${s.nameSize}; font-weight:900; line-height:0.9; margin-bottom:15px; color:#3b82f6;">${cv.nom}</h1>
            <p style="font-size:${s.headerSize}; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#64748b; border-left:3px solid #3b82f6; padding-left:10px;">${cv.poste}</p>
          </div>
          <div style="background:#eff6ff; padding:20px; border-radius:20px; margin-bottom:30px;">
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:12px; color:#1a1a1a;">CONTACT</p>
            <div style="font-size:10px; color:#475569;">
              <p style="margin-bottom:8px;">${cv.email}</p>
              <p style="margin-bottom:8px;">${cv.telephone}</p>
              <p>${cv.ville}</p>
            </div>
          </div>
          <div style="margin-bottom:25px;">
            <p style="font-size:11px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">COMPÉTENCES</p>
            ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#3b82f6")).join('')}
          </div>
        </div>
        <div class="main-p5">
          <div style="margin-bottom:${s.sectionGap};">
            <p style="font-size:${s.profileSize}; line-height:1.7; color:#334155; font-style:italic;">"${cv.profil}"</p>
          </div>
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#3b82f6;"></span> EXPÉRIENCES
            </h2>
            ${(cv.experience||[]).map(e => `
              <div style="margin-bottom:${s.itemGap}; position:relative;">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                  <p style="font-size:13px; font-weight:800; color:#1a1a1a;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:10px; font-weight:700; color:#3b82f6;">${e.dates||''}</p>
                </div>
                <p style="font-size:11px; font-weight:700; color:#2563eb; margin-bottom:8px;">${e.employeur||''}</p>
                <div style="font-size:${s.baseSize}; color:#475569; line-height:${s.lineHeight};">${Array.isArray(e.missions) ? e.missions.map(m => window.atsBullet(m, "#3b82f6")).join('') : window.atsBullet(e.missions||'', "#3b82f6")}</div>
              </div>
            `).join('')}
          </div>
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#3b82f6;"></span> FORMATION
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.formation.map(f => `
                <div style="margin-bottom:15px;">
                  <p style="font-size:12px; font-weight:800; color:#1a1a1a;">${f.diplome}</p>
                  <p style="font-size:10px; color:#3b82f6; font-weight:700;">${f.ecole} | ${f.annee}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.certifications && cv.certifications.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#3b82f6;"></span> CERTIFICATIONS
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
              ${cv.certifications.map(c => `<p style="font-size:11px; color:#4b5563;">• ${typeof c === 'string' ? c : c.titre}</p>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#3b82f6;"></span> PROJETS
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.portfolio.map(p => `
                <div style="background:#eff6ff; padding:12px; border-radius:10px; border:1px solid #dbeafe;">
                  <p style="font-size:11px; font-weight:800; color:#1a1a1a;">${p.nom}</p>
                  <p style="font-size:10px; color:#2563eb; line-height:1.4;">${p.desc}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#3b82f6;"></span> DISTINCTIONS
            </h2>
            <div style="background:#f0f9ff; padding:15px; border-radius:15px; border:1px solid #bae6fd;">
              ${cv.awards.map(a => `<div style="display:flex; gap:10px; margin-bottom:8px;"><span style="color:#0284c7;">✨</span><p style="font-size:11px; color:#0369a1;">${a}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div>
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#3b82f6;"></span> RÉFÉRENCES
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.references.map(r => `<div><p style="font-size:11px; font-weight:800; color:#1a1a1a;">${r.n || r.nom}</p><p style="font-size:10px; color:#3b82f6;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
      </div>
    </div>`;
  }

  function genP6(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-6" style="font-family:'Outfit',sans-serif; background:#0f172a; color:#f8fafc; position:relative; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; right:0; width:300px; height:300px; background:radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%);"></div>
      <div style="padding:${s.mainPadding};">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:${s.sectionGap}; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:30px;">
          <div>
            <h1 style="font-size:${s.nameSize}; font-weight:900; letter-spacing:-2px; line-height:0.9;">${cv.prenom} <span style="color:#10b981;">${cv.nom}</span></h1>
            <p style="font-size:${s.headerSize}; letter-spacing:5px; text-transform:uppercase; color:#94a3b8; margin-top:10px;">${cv.poste}</p>
          </div>
          <div style="text-align:right; font-size:11px; color:#94a3b8;">
            <p>${cv.email}</p>
            <p>${cv.telephone}</p>
            <p>${cv.adresse || ''} ${cv.code_postal || ''} ${cv.ville}</p>
          </div>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 280px; gap:60px;">
          <div>
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Expériences</h2>
              ${(cv.experience||[]).map(e => `
                <div style="margin-bottom:${s.itemGap}; border-left:2px solid rgba(16,185,129,0.3); padding-left:25px; position:relative;">
                  <div style="width:8px; height:8px; background:#10b981; border-radius:50%; position:absolute; left:-5px; top:5px;"></div>
                  <p style="font-size:14px; font-weight:800; color:#f8fafc; margin-bottom:4px;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:11px; color:#10b981; font-weight:700; margin-bottom:10px;">${e.employeur||''} | ${e.dates||''}</p>
                  <div style="font-size:${s.baseSize}; color:#94a3b8; line-height:${s.lineHeight};">${Array.isArray(e.missions) ? e.missions.map(m => window.atsBullet(m, "#10b981")).join('') : window.atsBullet(e.missions||'', "#10b981")}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:30px; border:1px solid rgba(255,255,255,0.05); margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">À propos</h2>
              <p style="font-size:${s.profileSize}; line-height:1.8; color:#cbd5e1;">${cv.profil}</p>
            </div>
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Détails</h2>
              ${window.renderDetailsSection(cv, '#10b981', '#94a3b8')}
            </div>
            ${(cv.competences && cv.competences.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Compétences</h2>
              ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#10b981", "rgba(255,255,255,0.1)")).join('')}
            </div>` : ''}
            ${(cv.formation && cv.formation.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Formation</h2>
              ${cv.formation.map(f => `
                <div style="margin-bottom:12px;">
                  <p style="font-size:12px; font-weight:800; color:#f8fafc;">${f.diplome}</p>
                  <p style="font-size:10px; color:#94a3b8;">${f.ecole} (${f.annee})</p>
                </div>`).join('')}
            </div>` : ''}
            ${(cv.langues && cv.langues.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Langues</h2>
              <div style="font-size:11px; color:#94a3b8;">
                ${cv.langues.map(l => `<p style="margin-bottom:8px;">• ${typeof l === 'string' ? l : l.langues}</p>`).join('')}
              </div>
            </div>` : ''}
            ${(cv.portfolio && cv.portfolio.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Projets</h2>
              ${cv.portfolio.map(p => `
                <div style="background:rgba(255,255,255,0.02); padding:10px; border-radius:10px; margin-bottom:8px;">
                  <p style="font-size:10px; font-weight:800; color:#10b981; margin-bottom:2px;">${p.nom}</p>
                  <p style="font-size:9px; color:#94a3b8; line-height:1.3;">${p.desc}</p>
                </div>`).join('')}
            </div>` : ''}
            ${(cv.awards && cv.awards.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Distinctions</h2>
              <div style="padding:15px; background:rgba(16,185,129,0.05); border:1px solid rgba(16,185,129,0.2); border-radius:15px;">
                ${cv.awards.map(a => `<p style="font-size:10px; color:#cbd5e1; margin-bottom:5px;">• ${a}</p>`).join('')}
              </div>
            </div>` : ''}
            ${(cv.references && cv.references.length > 0) ? `
            <div>
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Références</h2>
              ${cv.references.map(r => `
                <div style="margin-bottom:10px;">
                  <p style="font-size:11px; font-weight:800; color:#f8fafc;">${r.n || r.nom}</p>
                  <p style="font-size:9.5px; color:#10b981;">${r.p || r.poste}</p>
                </div>`).join('')}
            </div>` : ''}
          </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  function genP7(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-7" style="font-family:'Outfit',sans-serif; background:#fff; color:#1a1a1a; position:relative; overflow:hidden; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; left:0; width:100%; height:8px; background:linear-gradient(90deg, #f59e0b, #fef3c7, #f59e0b);"></div>
      <div style="padding:${s.mainPadding}; display:grid; grid-template-columns: 240px 1fr; gap:40px;">
        <div class="sidebar-p7">
          <div style="width:140px; height:140px; border-radius:30px; background:#1a1a1a; margin-bottom:25px; display:flex; align-items:center; justify-content:center; font-size:60px; font-weight:900; color:#f59e0b; transform:rotate(-3deg); border:4px solid #f1f5f9;">${(cv.prenom||'U')[0]}</div>
          <div style="margin-bottom:35px;">
            <h1 style="font-size:${s.nameSize}; font-weight:900; line-height:0.9; margin-bottom:5px; color:#1a1a1a;">${cv.prenom}</h1>
            <h1 style="font-size:${s.nameSize}; font-weight:900; line-height:0.9; margin-bottom:15px; color:#f59e0b;">${cv.nom}</h1>
            <p style="font-size:${s.headerSize}; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#64748b; border-left:3px solid #f59e0b; padding-left:10px;">${cv.poste}</p>
          </div>
          <div style="background:#fffbeb; padding:20px; border-radius:20px; margin-bottom:30px;">
            <p style="font-size:11px; font-weight:900; letter-spacing:1px; margin-bottom:12px; color:#1a1a1a;">CONTACT</p>
            <div style="font-size:11px; color:#475569;">
              <p style="margin-bottom:8px;">${cv.email}</p>
              <p style="margin-bottom:8px;">${cv.telephone}</p>
              <p>${cv.ville}</p>
            </div>
          </div>
          <div style="margin-bottom:25px;">
            <p style="font-size:11px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">COMPÉTENCES</p>
            ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#f59e0b")).join('')}
          </div>
        </div>
        <div class="main-p7">
          <div style="margin-bottom:${s.sectionGap};">
            <p style="font-size:${s.profileSize}; line-height:1.7; color:#334155; font-style:italic;">"${cv.profil}"</p>
          </div>
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#f59e0b;"></span> EXPÉRIENCES
            </h2>
            ${(cv.experience||[]).map(e => `
              <div style="margin-bottom:${s.itemGap}; position:relative;">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                  <p style="font-size:13px; font-weight:800; color:#1a1a1a;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:10px; font-weight:700; color:#f59e0b;">${e.dates||''}</p>
                </div>
                <p style="font-size:11px; font-weight:700; color:#d97706; margin-bottom:8px;">${e.employeur||''}</p>
                <div style="font-size:${s.baseSize}; color:#475569; line-height:${s.lineHeight};">${Array.isArray(e.missions) ? e.missions.map(m => window.atsBullet(m, "#f59e0b")).join('') : window.atsBullet(e.missions||'', "#f59e0b")}</div>
              </div>
            `).join('')}
          </div>
          ${(cv.formation && cv.formation.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#f59e0b;"></span> FORMATION
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.formation.map(f => `
                <div style="margin-bottom:15px;">
                  <p style="font-size:12px; font-weight:800; color:#1a1a1a;">${f.diplome}</p>
                  <p style="font-size:10px; color:#f59e0b; font-weight:700;">${f.ecole} | ${f.annee}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.portfolio && cv.portfolio.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#f59e0b;"></span> PROJETS
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
              ${cv.portfolio.map(p => `
                <div style="background:#fffbeb; padding:12px; border-radius:10px; border:1px solid #fef3c7;">
                  <p style="font-size:11px; font-weight:800; color:#1a1a1a;">${p.nom}</p>
                  <p style="font-size:10px; color:#d97706; line-height:1.4;">${p.desc}</p>
                </div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.awards && cv.awards.length > 0) ? `
          <div style="margin-bottom:${s.sectionGap};">
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#f59e0b;"></span> DISTINCTIONS
            </h2>
            <div style="background:#fff7ed; padding:15px; border-radius:15px; border:1px solid #ffedd5;">
              ${cv.awards.map(a => `<div style="display:flex; gap:10px; margin-bottom:8px;"><span style="color:#f59e0b;">🏅</span><p style="font-size:11px; color:#9a3412; font-style:italic;">${a}</p></div>`).join('')}
            </div>
          </div>` : ''}
          ${(cv.references && cv.references.length > 0) ? `
          <div>
            <h2 style="font-size:15px; font-weight:900; color:#1a1a1a; margin-bottom:20px; display:flex; align-items:center; gap:10px;">
              <span style="width:30px; height:2px; background:#f59e0b;"></span> RÉFÉRENCES
            </h2>
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap:20px;">
              ${cv.references.map(r => `<div><p style="font-size:11px; font-weight:800; color:#1a1a1a;">${r.n || r.nom}</p><p style="font-size:10px; color:#f59e0b;">${r.p || r.poste}</p></div>`).join('')}
            </div>
          </div>` : ''}
        </div>
        </div>
      </div>
    </div>`;
  }

  function genP8(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-8" style="font-family:'Outfit',sans-serif; background:#0f172a; color:#f8fafc; position:relative; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; right:0; width:300px; height:300px; background:radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%);"></div>
      <div style="padding:${s.mainPadding};">
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:${s.sectionGap}; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:30px;">
          <div>
            <h1 style="font-size:${s.nameSize}; font-weight:900; letter-spacing:-2px; line-height:0.9;">${cv.prenom} <span style="color:#f59e0b;">${cv.nom}</span></h1>
            <p style="font-size:${s.headerSize}; letter-spacing:5px; text-transform:uppercase; color:#94a3b8; margin-top:10px;">${cv.poste}</p>
          </div>
          <div style="text-align:right; font-size:11px; color:#94a3b8;">
            <p>${cv.email}</p>
            <p>${cv.telephone}</p>
            <p>${cv.ville}</p>
          </div>
        </div>
        <div style="display:grid; grid-template-columns: 1fr 280px; gap:60px;">
          <div>
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f59e0b; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Expériences</h2>
              ${(cv.experience||[]).map(e => `
                <div style="margin-bottom:${s.itemGap}; border-left:2px solid rgba(245,158,11,0.3); padding-left:25px; position:relative;">
                  <div style="width:8px; height:8px; background:#f59e0b; border-radius:50%; position:absolute; left:-5px; top:5px;"></div>
                  <p style="font-size:14px; font-weight:800; color:#f8fafc; margin-bottom:4px;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:11px; color:#f59e0b; font-weight:700; margin-bottom:10px;">${e.employeur||''} | ${e.dates||''}</p>
                  <div style="font-size:${s.baseSize}; color:#94a3b8; line-height:${s.lineHeight};">${Array.isArray(e.missions) ? e.missions.map(m => window.atsBullet(m, "#f59e0b")).join('') : window.atsBullet(e.missions||'', "#f59e0b")}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:30px; border:1px solid rgba(255,255,255,0.05); margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f59e0b; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">À propos</h2>
              <p style="font-size:${s.profileSize}; line-height:1.8; color:#cbd5e1;">${cv.profil}</p>
            </div>
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Détails</h2>
              ${window.renderDetailsSection(cv, '#f59e0b', '#94a3b8')}
            </div>
            ${(cv.competences && cv.competences.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f59e0b; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Compétences</h2>
              ${(cv.competences||[]).map((c, i) => window.atsSkillBar(c, i < 4 ? 'Expert' : 'Avancé', "#f59e0b", "rgba(255,255,255,0.1)")).join('')}
            </div>` : ''}
            ${(cv.formation && cv.formation.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f59e0b; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Formation</h2>
              ${cv.formation.map(f => `
                <div style="margin-bottom:12px;">
                  <p style="font-size:12px; font-weight:800; color:#f8fafc;">${f.diplome}</p>
                  <p style="font-size:10px; color:#94a3b8;">${f.ecole} (${f.annee})</p>
                </div>`).join('')}
            </div>` : ''}
            ${(cv.portfolio && cv.portfolio.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f59e0b; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Projets</h2>
              ${cv.portfolio.map(p => `
                <div style="background:rgba(255,255,255,0.02); padding:10px; border-radius:10px; margin-bottom:8px;">
                  <p style="font-size:10px; font-weight:800; color:#f59e0b; margin-bottom:2px;">${p.nom}</p>
                  <p style="font-size:9px; color:#94a3b8; line-height:1.3;">${p.desc}</p>
                </div>`).join('')}
            </div>` : ''}
            ${(cv.awards && cv.awards.length > 0) ? `
            <div style="margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f59e0b; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Distinctions</h2>
              <div style="padding:15px; background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.2); border-radius:15px;">
                ${cv.awards.map(a => `<p style="font-size:10px; color:#cbd5e1; margin-bottom:5px;">⭐ ${a}</p>`).join('')}
              </div>
            </div>` : ''}
            ${(cv.references && cv.references.length > 0) ? `
            <div>
              <h2 style="font-size:13px; font-weight:900; color:#f59e0b; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Références</h2>
              ${cv.references.map(r => `
                <div style="margin-bottom:10px;">
                  <p style="font-size:11px; font-weight:800; color:#f8fafc;">${r.n || r.nom}</p>
                  <p style="font-size:9.5px; color:#f59e0b;">${r.p || r.poste}</p>
                </div>`).join('')}
            </div>` : ''}
          </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  function genP9(cv) { return genP3(cv); }
  function genP10(cv) { return genP2(cv); }
  function genP11(cv) { return genP3(cv); }
  function genP12(cv) { return genP2(cv); }

  function genM1(cv) {
    return buildMandalaCV(cv, {
      sbBg: '#0f172a', sbBg2: '#1e293b',
      mandalaColor: '#D4AF37', accentColor: '#D4AF37',
      titleColor: '#0f172a', sectionColor: '#1e293b',
      chipBg: '#fcfaf2', metricBorder: '#f1f5f9'
    });
  }
  function genM2(cv) {
    return buildMandalaCV(cv, {
      sbBg: '#451a03', sbBg2: '#78350f',
      mandalaColor: '#fbbf24', accentColor: '#fbbf24',
      titleColor: '#451a03', sectionColor: '#92400e',
      chipBg: '#fffbeb', metricBorder: '#fef3c7'
    });
  }
  function genM3(cv) {
    return buildMandalaCV(cv, {
      sbBg: '#064e3b', sbBg2: '#065f46',
      mandalaColor: '#34d399', accentColor: '#34d399',
      titleColor: '#064e3b', sectionColor: '#047857',
      chipBg: '#ecfdf5', metricBorder: '#d1fae5'
    });
  }
  function genM4(cv) {
    return buildMandalaCV(cv, {
      sbBg: '#4c1d95', sbBg2: '#5b21b6',
      mandalaColor: '#a78bfa', accentColor: '#a78bfa',
      titleColor: '#4c1d95', sectionColor: '#6d28d9',
      chipBg: '#f5f3ff', metricBorder: '#ede9fe'
    });
  }
  function genM5(cv) {
    return buildMandalaCV(cv, {
      sbBg: '#111827', sbBg2: '#1f2937',
      mandalaColor: '#9ca3af', accentColor: '#9ca3af',
      titleColor: '#111827', sectionColor: '#374151',
      chipBg: '#f9fafb', metricBorder: '#f3f4f6'
    });
  }
  function genM6(cv) {
    return buildMandalaCV(cv, {
      sbBg: '#7f1d1d', sbBg2: '#991b1b',
      mandalaColor: '#f87171', accentColor: '#f87171',
      titleColor: '#7f1d1d', sectionColor: '#b91c1c',
      chipBg: '#fef2f2', metricBorder: '#fee2e2'
    });
  }

  // Export to global scope
  window.cvGenerators = window.cvGenerators || {};
  Object.assign(window.cvGenerators, {
    genMandalaRoyal, genP1, genP2, genP3, genP4, genP5, genP6, genP7, genP8, genP9, genP10, genP11, genP12,
    genM1, genM2, genM3, genM4, genM5, genM6
  });
})();
