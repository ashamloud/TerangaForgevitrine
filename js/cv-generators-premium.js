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
          <h2 style="font-size:16px;font-weight:800;color:white;text-align:center;letter-spacing:0.5px;margin-bottom:3px;">${cv.prenom} ${cv.nom}</h2>
          <p style="font-size:8px;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;text-align:center;margin-bottom:18px;">${cv.poste}</p>
          <div style="width:65%;height:1px;background:linear-gradient(90deg,transparent,#D4AF37,transparent);margin-bottom:18px;"></div>
          <div style="width:100%;margin-bottom:16px;">
            <p style="font-size:8px;font-weight:700;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px;text-align:center;">CONTACT</p>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.mail}</span><p style="font-size:9px;color:rgba(255,255,255,0.8);line-height:1;">${cv.email}</p></div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.ph}</span><p style="font-size:9px;color:rgba(255,255,255,0.8);line-height:1;">${cv.telephone}</p></div>
            <div style="display:flex;align-items:center;gap:8px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.pin}</span><p style="font-size:9px;color:rgba(255,255,255,0.8);line-height:1;">${cv.ville}</p></div>
          </div>
          <div style="width:100%;margin-bottom:14px;">
            <p style="font-size:8px;font-weight:700;color:#D4AF37;letter-spacing:3px;text-transform:uppercase;margin-bottom:10px;text-align:center;">COMPÉTENCES</p>
            ${(cv.competences || []).map(s => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><span style="color:#D4AF37;display:flex;align-items:center;transform:translateY(1.5px);">${ATS_ICONS.chk}</span><p style="font-size:9px;color:rgba(255,255,255,0.8);line-height:1;">${s}</p></div>`).join('')}
          </div>
        </div>
      </div>
      <div style="flex:1;background:#fff;padding:44px 34px;display:flex;flex-direction:column; justify-content:flex-start;">
        <div style="margin-bottom:${s.sectionGap};padding-bottom:18px;border-bottom:1px solid #f1f5f9;">
          <h1 style="font-size:40px;font-weight:900;color:#0f172a;letter-spacing:-1px;line-height:1;margin-bottom:5px;">${cv.prenom} <span style="color:#c4a010;">${cv.nom}</span></h1>
          <p style="font-size:10px;color:#64748b;letter-spacing:4px;text-transform:uppercase;font-weight:700;">${cv.poste}</p>
        </div>
        <div style="margin-bottom:${s.sectionGap};padding:14px 16px;background:#fcfaf2;border-left:3px solid #D4AF37;border-radius:0 6px 6px 0;">
          <p style="font-size:9px;font-weight:700;color:#846a14;letter-spacing:2px;text-transform:uppercase;margin-bottom:7px;">PROFIL</p>
          <p style="font-size:${s.profileSize};color:#475569;line-height:${s.lineHeight};">${cv.profil}</p>
        </div>
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
      </div>
    </div>`;
  }

  function genP1(cv) {
    const s = getSmartLayout(cv);
    return `<div class="cv-prestige-1" style="font-family:'Outfit',sans-serif; background:#fff; color:#1a1a1a; position:relative; overflow:hidden; min-height:1123px; display:flex; flex-direction:column; justify-content:flex-start;">
      <div style="position:absolute; top:0; left:0; width:100%; height:8px; background:linear-gradient(90deg, #d4af37, #fef3c7, #d4af37);"></div>
      <div style="padding:${s.mainPadding}; display:grid; grid-template-columns: 240px 1fr; gap:40px;">
        <div class="sidebar-p1">
          <div style="width:140px; height:140px; border-radius:30px; background:#1a1a1a; margin-bottom:25px; display:flex; align-items:center; justify-content:center; font-size:60px; font-weight:900; color:#d4af37; transform:rotate(-3deg); border:4px solid #f1f5f9;">${(cv.prenom||'U')[0]}</div>
          <div style="margin-bottom:35px;">
            <h1 style="font-size:32px; font-weight:900; line-height:1; margin-bottom:5px; color:#1a1a1a;">${cv.prenom}</h1>
            <h1 style="font-size:32px; font-weight:900; line-height:1; margin-bottom:15px; color:#d4af37;">${cv.nom}</h1>
            <p style="font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#64748b; border-left:3px solid #d4af37; padding-left:10px;">${cv.poste}</p>
          </div>
          <div style="background:#fffbeb; padding:20px; border-radius:20px; margin-bottom:30px;">
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:12px; color:#1a1a1a;">CONTACT</p>
            <div style="font-size:10px; color:#475569;">
              <p style="margin-bottom:8px;">${cv.email}</p>
              <p style="margin-bottom:8px;">${cv.telephone}</p>
              <p>${cv.ville}</p>
            </div>
          </div>
          <div>
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">COMPÉTENCES</p>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${(cv.competences||[]).map(c => `<span style="font-size:9px; background:#fff; border:1px solid #fef3c7; padding:4px 10px; border-radius:8px; font-weight:600;">${c}</span>`).join('')}
            </div>
          </div>
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
                <div style="font-size:${s.baseSize}; color:#475569; line-height:1.6;">${Array.isArray(e.missions) ? e.missions.map(m => `<p style="margin-bottom:4px;">• ${m}</p>`).join('') : `<p>• ${e.missions||''}</p>`}</div>
              </div>
            `).join('')}
          </div>
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
            <h1 style="font-size:45px; font-weight:900; letter-spacing:-2px; line-height:1;">${cv.prenom} <span style="color:#6366f1;">${cv.nom}</span></h1>
            <p style="font-size:12px; letter-spacing:5px; text-transform:uppercase; color:#94a3b8; margin-top:10px;">${cv.poste}</p>
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
                  <div style="font-size:${s.baseSize}; color:#94a3b8; line-height:1.7;">${Array.isArray(e.missions) ? e.missions.map(m => `<p style="margin-bottom:5px;">• ${m}</p>`).join('') : `<p>• ${e.missions||''}</p>`}</div>
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
              <h2 style="font-size:13px; font-weight:900; color:#f8fafc; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">Expertise</h2>
              <div style="display:flex; flex-wrap:wrap; gap:8px;">
                ${(cv.competences||[]).map(c => `<span style="font-size:10px; background:#6366f1; color:#fff; padding:6px 14px; border-radius:12px; font-weight:700;">${c}</span>`).join('')}
              </div>
            </div>
          </div>
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
            <h1 style="font-size:32px; font-weight:900; line-height:1; margin-bottom:5px; color:#1a1a1a;">${cv.prenom}</h1>
            <h1 style="font-size:32px; font-weight:900; line-height:1; margin-bottom:15px; color:#10b981;">${cv.nom}</h1>
            <p style="font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#64748b; border-left:3px solid #10b981; padding-left:10px;">${cv.poste}</p>
          </div>
          <div style="background:#f0fdf4; padding:20px; border-radius:20px; margin-bottom:30px;">
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:12px; color:#1a1a1a;">CONTACT</p>
            <div style="font-size:10px; color:#475569;">
              <p style="margin-bottom:8px;">${cv.email}</p>
              <p style="margin-bottom:8px;">${cv.telephone}</p>
              <p>${cv.ville}</p>
            </div>
          </div>
          <div>
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:15px; color:#1a1a1a;">COMPÉTENCES</p>
            <div style="display:flex; flex-wrap:wrap; gap:6px;">
              ${(cv.competences||[]).map(c => `<span style="font-size:9px; background:#fff; border:1px solid #d1fae5; padding:4px 10px; border-radius:8px; font-weight:600;">${c}</span>`).join('')}
            </div>
          </div>
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
                <div style="font-size:${s.baseSize}; color:#475569; line-height:1.6;">${Array.isArray(e.missions) ? e.missions.map(m => `<p style="margin-bottom:4px;">• ${m}</p>`).join('') : `<p>• ${e.missions||''}</p>`}</div>
              </div>
            `).join('')}
          </div>
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
            <h1 style="font-size:45px; font-weight:900; letter-spacing:-2px; line-height:1;">${cv.prenom} <span style="color:#ec4899;">${cv.nom}</span></h1>
            <p style="font-size:12px; letter-spacing:5px; text-transform:uppercase; color:#94a3b8; margin-top:10px;">${cv.poste}</p>
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
                  <div style="font-size:${s.baseSize}; color:#94a3b8; line-height:1.7;">${Array.isArray(e.missions) ? e.missions.map(m => `<p style="margin-bottom:5px;">• ${m}</p>`).join('') : `<p>• ${e.missions||''}</p>`}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:30px; border:1px solid rgba(255,255,255,0.05); margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#ec4899; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">À propos</h2>
              <p style="font-size:${s.profileSize}; line-height:1.8; color:#cbd5e1;">${cv.profil}</p>
            </div>
          </div>
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
            <h1 style="font-size:32px; font-weight:900; line-height:1; margin-bottom:5px; color:#1a1a1a;">${cv.prenom}</h1>
            <h1 style="font-size:32px; font-weight:900; line-height:1; margin-bottom:15px; color:#3b82f6;">${cv.nom}</h1>
            <p style="font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#64748b; border-left:3px solid #3b82f6; padding-left:10px;">${cv.poste}</p>
          </div>
          <div style="background:#eff6ff; padding:20px; border-radius:20px; margin-bottom:30px;">
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:12px; color:#1a1a1a;">CONTACT</p>
            <div style="font-size:10px; color:#475569;">
              <p style="margin-bottom:8px;">${cv.email}</p>
              <p style="margin-bottom:8px;">${cv.telephone}</p>
              <p>${cv.ville}</p>
            </div>
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
                <div style="font-size:${s.baseSize}; color:#475569; line-height:1.6;">${Array.isArray(e.missions) ? e.missions.map(m => `<p style="margin-bottom:4px;">• ${m}</p>`).join('') : `<p>• ${e.missions||''}</p>`}</div>
              </div>
            `).join('')}
          </div>
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
            <h1 style="font-size:45px; font-weight:900; letter-spacing:-2px; line-height:1;">${cv.prenom} <span style="color:#10b981;">${cv.nom}</span></h1>
            <p style="font-size:12px; letter-spacing:5px; text-transform:uppercase; color:#94a3b8; margin-top:10px;">${cv.poste}</p>
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
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:25px; text-transform:uppercase;">Expériences</h2>
              ${(cv.experience||[]).map(e => `
                <div style="margin-bottom:${s.itemGap}; border-left:2px solid rgba(16,185,129,0.3); padding-left:25px; position:relative;">
                  <div style="width:8px; height:8px; background:#10b981; border-radius:50%; position:absolute; left:-5px; top:5px;"></div>
                  <p style="font-size:14px; font-weight:800; color:#f8fafc; margin-bottom:4px;">${typeof e === 'string' ? e : e.poste}</p>
                  <p style="font-size:11px; color:#10b981; font-weight:700; margin-bottom:10px;">${e.employeur||''} | ${e.dates||''}</p>
                  <div style="font-size:${s.baseSize}; color:#94a3b8; line-height:1.7;">${Array.isArray(e.missions) ? e.missions.map(m => `<p style="margin-bottom:5px;">• ${m}</p>`).join('') : `<p>• ${e.missions||''}</p>`}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:30px; border:1px solid rgba(255,255,255,0.05); margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#10b981; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">À propos</h2>
              <p style="font-size:${s.profileSize}; line-height:1.8; color:#cbd5e1;">${cv.profil}</p>
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
            <h1 style="font-size:32px; font-weight:900; line-height:1; margin-bottom:5px; color:#1a1a1a;">${cv.prenom}</h1>
            <h1 style="font-size:32px; font-weight:900; line-height:1; margin-bottom:15px; color:#f59e0b;">${cv.nom}</h1>
            <p style="font-size:11px; font-weight:700; letter-spacing:3px; text-transform:uppercase; color:#64748b; border-left:3px solid #f59e0b; padding-left:10px;">${cv.poste}</p>
          </div>
          <div style="background:#fffbeb; padding:20px; border-radius:20px; margin-bottom:30px;">
            <p style="font-size:10px; font-weight:900; letter-spacing:1px; margin-bottom:12px; color:#1a1a1a;">CONTACT</p>
            <div style="font-size:10px; color:#475569;">
              <p style="margin-bottom:8px;">${cv.email}</p>
              <p style="margin-bottom:8px;">${cv.telephone}</p>
              <p>${cv.ville}</p>
            </div>
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
                <div style="font-size:${s.baseSize}; color:#475569; line-height:1.6;">${Array.isArray(e.missions) ? e.missions.map(m => `<p style="margin-bottom:4px;">• ${m}</p>`).join('') : `<p>• ${e.missions||''}</p>`}</div>
              </div>
            `).join('')}
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
            <h1 style="font-size:45px; font-weight:900; letter-spacing:-2px; line-height:1;">${cv.prenom} <span style="color:#f59e0b;">${cv.nom}</span></h1>
            <p style="font-size:12px; letter-spacing:5px; text-transform:uppercase; color:#94a3b8; margin-top:10px;">${cv.poste}</p>
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
                  <div style="font-size:${s.baseSize}; color:#94a3b8; line-height:1.7;">${Array.isArray(e.missions) ? e.missions.map(m => `<p style="margin-bottom:5px;">• ${m}</p>`).join('') : `<p>• ${e.missions||''}</p>`}</div>
                </div>
              `).join('')}
            </div>
          </div>
          <div>
            <div style="background:rgba(255,255,255,0.03); padding:30px; border-radius:30px; border:1px solid rgba(255,255,255,0.05); margin-bottom:${s.sectionGap};">
              <h2 style="font-size:13px; font-weight:900; color:#f59e0b; letter-spacing:2px; margin-bottom:20px; text-transform:uppercase;">À propos</h2>
              <p style="font-size:${s.profileSize}; line-height:1.8; color:#cbd5e1;">${cv.profil}</p>
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
