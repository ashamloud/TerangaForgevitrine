/**
 * CV Generators Core Functions - TerangaForge
 * Contains layout engine and common visual helpers.
 */

window.cvGenerators = {};

const rnd = () => Math.floor(Math.random() * 30);

/**
 * Calcule la densité du contenu pour ajuster dynamiquement le layout.
 */
window.getSmartLayout = function(cv) {
  let charCount = (cv.profil || "").length;
  (cv.experience || []).forEach(e => {
    charCount += (e.poste || "").length + (e.employeur || "").length;
    if (Array.isArray(e.missions)) e.missions.forEach(m => charCount += m.length);
    else charCount += (e.missions || "").length;
  });
  (cv.formation || []).forEach(f => charCount += (f.diplome || "").length + (f.ecole || "").length);
  (cv.competences || []).forEach(c => charCount += (c.length || 0));

  const isTiny = charCount < 350;
  const isVeryShort = charCount < 600;
  const isShort = charCount < 1100;
  const isLong = charCount > 1900;
  const isVeryLong = charCount > 2700;

  return {
    isTiny, isVeryShort, isShort, isLong, isVeryLong,
    baseSize: isVeryLong ? "11.0px" : isLong ? "12.0px" : isTiny ? "16.5px" : isVeryShort ? "15.5px" : isShort ? "14.0px" : "13.0px",
    lineHeight: isTiny ? 2.0 : isVeryShort ? 1.85 : isLong ? 1.55 : 1.75,
    sectionGap: isTiny ? "80px" : isVeryShort ? "65px" : isLong ? "26px" : isVeryLong ? "20px" : "40px",
    itemGap: isTiny ? "45px" : isVeryShort ? "35px" : isLong ? "16px" : isVeryLong ? "14px" : "24px",
    profileSize: isTiny ? "19.5px" : isVeryShort ? "18.0px" : isShort ? "16.0px" : "14.5px",
    nameSize: isTiny ? "48px" : isVeryShort ? "44px" : isShort ? "38px" : "34px",
    headerSize: isTiny ? "16.0px" : isVeryShort ? "14.0px" : "12.0px",
    sidebarPadding: isTiny ? "60px 30px" : isVeryShort ? "50px 30px" : "40px 30px",
    mainPadding: isTiny ? "85px 55px" : isVeryShort ? "75px 50px" : isShort ? "65px 45px" : "60px 45px"
  };
};
window.ATS_ICONS = {
  mail: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1-.9 2-2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>`,
  ph: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01L6.6 10.8z"/></svg>`,
  web: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
  pin: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
  ln: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>`,
  bag: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.18c.07-.44.18-.88.18-1 0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .12.11.56.18 1H8c-1.11 0-1.99.89-1.99 2L6 19c0 1.11.89 2 2 2h12c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6-3c1.1 0 2 .9 2 2 0 .12-.11.56-.18 1h-3.64C12.11 5.56 12 5.12 12 5c0-1.1.9-2 2-2z"/></svg>`,
  sch: `<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>`,
  cert: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>`,
  ref: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
  star: `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
  chk: `<svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`,
  usr: `<svg width="52" height="52" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
  age: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
  nat: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
  dr: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>`,
  fam: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`,
  cal: `<svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/></svg>`
};


window.atsLanguageBar = function(n, c1, c2) {
  const w = (n.includes('matern') || n.includes('Natif')) ? 95 : n.includes('C1') || n.includes('Bilingu') ? 85 : n.includes('B2') ? 70 : 50;
  return `
    <div style="margin-bottom:8px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:3px;">
        <p style="font-size:8px; font-weight:700; color:${c1}; text-transform:uppercase; letter-spacing:1px;">${n}</p>
      </div>
      <div style="height:3px;background:#E5E7EB;border-radius:2px;"><div style="height:3px;background:linear-gradient(90deg,${c1},${c2||c1});border-radius:2px;width:${w}%;"></div></div>
    </div>`;
};

window.atsSkillBar = function(label, level, color, bg = '#E5E7EB') {
  const w = level === 'Expert' ? 95 : level === 'Avancé' ? 80 : level === 'Intermédiaire' ? 60 : 40;
  return `
    <div style="margin-bottom:8px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:2px;">
        <p style="font-size:9.5px; color:#1f2937; font-weight:600;">${label}</p>
        <p style="font-size:7.5px; color:#6B7280; font-weight:700; text-transform:uppercase;">${level}</p>
      </div>
      <div style="height:3px;background:${bg};border-radius:2px;"><div style="height:3px;background:${color};border-radius:2px;width:${w}%;"></div></div>
    </div>`;
};

window.renderDetailsSection = function(cv, iconColor = "#1D4ED8", textColor = "#374151") {
  let html = '';
  if (cv.age) html += `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:${iconColor};">${window.ATS_ICONS.age}</span><p style="font-size:10px;color:${textColor};">${cv.age}</p></div>`;
  if (cv.nationalite) html += `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:${iconColor};">${window.ATS_ICONS.nat}</span><p style="font-size:10px;color:${textColor};">${cv.nationalite}</p></div>`;
  if (cv.situation_familiale) html += `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:${iconColor};">${window.ATS_ICONS.fam}</span><p style="font-size:10px;color:${textColor};">${cv.situation_familiale}</p></div>`;
  if (cv.permis) html += `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:${iconColor};">${window.ATS_ICONS.dr}</span><p style="font-size:10px;color:${textColor};">${cv.permis}</p></div>`;
  if (cv.mobilite) html += `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:${iconColor};">${window.ATS_ICONS.pin}</span><p style="font-size:10px;color:${textColor};">${cv.mobilite}</p></div>`;
  if (cv.disponibilite) html += `<div style="display:flex;align-items:center;gap:7px;margin-bottom:5px;"><span style="color:${iconColor};">${window.ATS_ICONS.cal}</span><p style="font-size:10px;color:${textColor};">${cv.disponibilite}</p></div>`;
  return html;
};

window.atsSec = function(ico, label, color, borderColor) {
  return `<div style="display:flex;align-items:center;gap:9px;margin-bottom:12px;padding-bottom:6px;border-bottom:1.5px solid ${borderColor||'#E5E7EB'};"><span style="color:${color};display:flex;align-items:center;transform:translateY(1.5px);">${ico}</span><p style="font-size:12.5px;font-weight:900;color:${color};letter-spacing:2px;text-transform:uppercase;line-height:1;">${label}</p></div>`;
};

window.atsBullet = function(b, accent, lh) {
  return `<div style="display:flex;gap:8px;margin-bottom:5px;"><span style="color:${accent};flex-shrink:0;font-size:12.5px;line-height:${lh||1.6};">›</span><p style="font-size:11px;color:#374151;line-height:${lh||1.6};" >${b}</p></div>`;
};

window.buildMandala = function(color, size = 320, opacity = 1) {
  const petales12 = Array.from({ length: 12 }, (_, i) => {
    const a = i * 30;
    return `<g transform="rotate(${a})">
      <ellipse cx="0" cy="-110" rx="7" ry="20" fill="${color}" opacity="${0.18 * opacity}"/>
      <ellipse cx="0" cy="-132" rx="4" ry="12" fill="${color}" opacity="${0.12 * opacity}"/>
      <line x1="0" y1="-40" x2="0" y2="-148" stroke="${color}" stroke-width="0.4" opacity="${0.2 * opacity}"/>
      <circle cx="0" cy="-80"  r="2"   fill="${color}" opacity="${0.35 * opacity}"/>
      <circle cx="0" cy="-120" r="1.5" fill="${color}" opacity="${0.25 * opacity}"/>
    </g>`;
  }).join('');
  const petales8 = Array.from({ length: 8 }, (_, i) => {
    const a = i * 45 + 22.5;
    return `<g transform="rotate(${a})">
      <ellipse cx="0" cy="-68" rx="10" ry="18" fill="${color}" opacity="${0.14 * opacity}"/>
      <ellipse cx="0" cy="-55" rx="6"  ry="10" fill="none" stroke="${color}" stroke-width="0.5" opacity="${0.2 * opacity}"/>
      <circle  cx="0" cy="-40" r="3"  fill="${color}" opacity="${0.28 * opacity}"/>
    </g>`;
  }).join('');
  const etoile6 = Array.from({ length: 6 }, (_, i) => `<line transform="rotate(${i * 60})" x1="0" y1="-18" x2="0" y2="18" stroke="${color}" stroke-width="1.5" opacity="${0.4 * opacity}"/>`).join('');
  const losanges = Array.from({ length: 12 }, (_, i) => `<path transform="rotate(${i * 30})" d="M0,-84 L4,-76 L0,-68 L-4,-76 Z" fill="${color}" opacity="${0.3 * opacity}"/>`).join('');
  const arcs = Array.from({ length: 8 }, (_, i) => {
    const a = i * 45;
    return `<g transform="rotate(${a})">
      <path d="M-8,-96 Q0,-108 8,-96" fill="none" stroke="${color}" stroke-width="0.8" opacity="${0.25 * opacity}"/>
      <circle cx="0" cy="-100" r="2.5" fill="${color}" opacity="${0.3 * opacity}"/>
    </g>`;
  }).join('');
  const pts24 = Array.from({ length: 24 }, (_, i) => {
    const a = i * 15, x = (58 * Math.cos((a - 90) * Math.PI / 180)).toFixed(1), y = (58 * Math.sin((a - 90) * Math.PI / 180)).toFixed(1);
    return `<circle cx="${x}" cy="${y}" r="1.2" fill="${color}" opacity="${0.4 * opacity}"/>`;
  }).join('');
  const tirets = Array.from({ length: 36 }, (_, i) => `<line transform="rotate(${i * 10})" x1="0" y1="-93" x2="0" y2="-87" stroke="${color}" stroke-width="0.8" opacity="${0.2 * opacity}"/>`).join('');
  const cx = size / 2, cy = size / 2;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><g transform="translate(${cx},${cy})"><circle r="148" fill="none" stroke="${color}" stroke-width="0.6" opacity="${0.2 * opacity}"/><circle r="138" fill="none" stroke="${color}" stroke-width="0.3" opacity="${0.15 * opacity}"/><circle r="120" fill="none" stroke="${color}" stroke-width="0.8" opacity="${0.25 * opacity}"/><circle r="100" fill="none" stroke="${color}" stroke-width="0.4" opacity="${0.18 * opacity}"/><circle r="80"  fill="none" stroke="${color}" stroke-width="1.2" opacity="${0.3 * opacity}"/><circle r="60"  fill="none" stroke="${color}" stroke-width="0.5" opacity="${0.2 * opacity}"/><circle r="40"  fill="none" stroke="${color}" stroke-width="1"   opacity="${0.35 * opacity}"/><circle r="22"  fill="${color}" opacity="${0.12 * opacity}"/><circle r="12"  fill="${color}" opacity="${0.2 * opacity}"/><circle r="5"   fill="${color}" opacity="${0.5 * opacity}"/>${petales12}${petales8}${etoile6}${losanges}${arcs}${pts24}${tirets}</g></svg>`;
};

window.buildMandalaSmall = function(color, size = 120) {
  const cx = size / 2, cy = size / 2, s = size / 2 - 10;
  const branches = Array.from({ length: 8 }, (_, i) => `<line transform="rotate(${i * 45})" x1="0" y1="-${s * 0.55}" x2="0" y2="${s * 0.55}" stroke="${color}" stroke-width="0.5" opacity="0.2"/><ellipse transform="rotate(${i * 45})" cx="0" cy="-${(s * 0.68).toFixed(0)}" rx="4" ry="8" fill="${color}" opacity="0.12"/>`).join('');
  const pts = Array.from({ length: 16 }, (_, i) => {
    const a = i * 22.5, r = s * 0.65, x = (r * Math.cos((a - 90) * Math.PI / 180)).toFixed(1), y = (r * Math.sin((a - 90) * Math.PI / 180)).toFixed(1);
    return `<circle cx="${x}" cy="${y}" r="1.2" fill="${color}" opacity="0.3"/>`;
  }).join('');
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" style="display:block;"><g transform="translate(${cx},${cy})">${branches}${pts}<circle r="${s}" fill="none" stroke="${color}" stroke-width="0.6" opacity="0.2"/><circle r="${(s * 0.7).toFixed(0)}" fill="none" stroke="${color}" stroke-width="0.5" opacity="0.15"/><circle r="${(s * 0.4).toFixed(0)}" fill="${color}" opacity="0.1"/><circle r="${(s * 0.15).toFixed(0)}" fill="${color}" opacity="0.2"/></g></svg>`;
};

window.buildMandalaCV = function(cv, cfg) {
  const s = window.getSmartLayout(cv);
  const {
    sbBg, sbBg2 = '', mandalaColor, accentColor,
    textBg = 'white', font = "'Raleway',sans-serif",
    titleColor, sectionColor, bodyBg = 'white',
    chipBg, chipText, metricBorder,
    metricValue, sbTextColor = 'rgba(255,255,255,0.8)',
    sbLabelColor, langBarBg = 'rgba(255,255,255,0.15)',
    langBarFill, rightFont = "'DM Sans',sans-serif"
  } = cfg;

  const sbGrad = sbBg2 ? `background:linear-gradient(170deg,${sbBg} 0%,${sbBg2} 50%,${sbBg} 100%);` : `background:${sbBg};`;

  return `<div class="cv-mandala-var" style="width:794px;min-height:1123px;display:flex;font-family:${font};overflow:hidden; background:${bodyBg}; color:#1a1a1a;">
    <div style="width:280px;flex-shrink:0;position:relative;overflow:hidden;${sbGrad}">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 50% 35%,rgba(255,255,255,0.06) 0%,transparent 65%);pointer-events:none;"></div>
      <div style="position:absolute;top:-15px;left:50%;transform:translateX(-50%);pointer-events:none;">${window.buildMandala(mandalaColor, 300)}</div>
      <div style="position:absolute;bottom:18px;left:50%;transform:translateX(-50%);pointer-events:none;opacity:0.7;">${window.buildMandalaSmall(mandalaColor, 100)}</div>
      <div style="position:relative;z-index:10;padding:265px 22px 130px;display:flex;flex-direction:column;align-items:center;">
        <div style="width:110px;height:110px;border-radius:50%;background:rgba(255,255,255,0.1);border:2px solid ${accentColor};display:flex;align-items:center;justify-content:center;margin-bottom:14px;"><span style="color:${accentColor};opacity:0.5;">${window.ATS_ICONS.usr}</span></div>
        <h2 style="font-size:16px;font-weight:800;color:white;text-align:center;letter-spacing:0.5px;margin-bottom:3px;">${cv.prenom} ${cv.nom}</h2>
        <p style="font-size:8px;color:${accentColor};letter-spacing:3px;text-transform:uppercase;text-align:center;margin-bottom:18px;">${cv.poste}</p>
        <div style="width:65%;height:1px;background:linear-gradient(90deg,transparent,${accentColor},transparent);margin-bottom:18px;"></div>
        <div style="width:100%;margin-bottom:16px;">
          <p style="font-size:8px;font-weight:700;color:${accentColor};letter-spacing:3px;text-transform:uppercase;margin-bottom:10px;text-align:center;">CONTACT</p>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:${accentColor};display:flex;align-items:center;transform:translateY(1.5px);">${window.ATS_ICONS.mail}</span><p style="font-size:9px;color:${sbTextColor};line-height:1;">${cv.email}</p></div>
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;"><span style="color:${accentColor};display:flex;align-items:center;transform:translateY(1.5px);">${window.ATS_ICONS.ph}</span><p style="font-size:9px;color:${sbTextColor};line-height:1;">${cv.telephone}</p></div>
          <div style="display:flex;align-items:center;gap:8px;"><span style="color:${accentColor};display:flex;align-items:center;transform:translateY(1.5px);">${window.ATS_ICONS.pin}</span><p style="font-size:9px;color:${sbTextColor};line-height:1;">${cv.ville}</p></div>
        </div>
        <div style="width:100%;margin-bottom:14px;">
          <p style="font-size:8px;font-weight:700;color:${accentColor};letter-spacing:3px;text-transform:uppercase;margin-bottom:12px;text-align:center;">COMPÉTENCES</p>
          ${(cv.competences || []).slice(0, 8).map((s, i) => `
            <div style="margin-bottom:8px;">
               <div style="display:flex;justify-content:space-between;margin-bottom:2px;"><p style="font-size:8.5px;color:white;font-weight:600;">${s}</p><p style="font-size:7px;color:${accentColor};font-weight:700;">${i < 3 ? 'EXPERT' : 'ADV'}</p></div>
               <div style="height:2px;background:rgba(255,255,255,0.1);border-radius:1px;"><div style="height:100%;background:${accentColor};width:${i < 3 ? '95%' : '75%'};border-radius:1px;"></div></div>
            </div>`).join('')}
        </div>
        ${(cv.langues && cv.langues.length > 0) ? `
        <div style="width:100%;margin-bottom:14px;">
          <p style="font-size:8px;font-weight:700;color:${accentColor};letter-spacing:3px;text-transform:uppercase;margin-bottom:12px;text-align:center;">LANGUES</p>
          ${cv.langues.map(l => {
            const n = typeof l === 'string' ? l : l.niveau || l.n;
            const label = typeof l === 'string' ? l.split('(')[0].trim() : l.langues || l.l;
            return `
              <div style="margin-bottom:8px;">
                <div style="display:flex;justify-content:space-between;margin-bottom:2px;"><p style="font-size:8.5px;color:white;font-weight:600;">${label}</p><p style="font-size:7px;color:${accentColor};font-weight:700;">${n}</p></div>
                <div style="height:2px;background:rgba(255,255,255,0.1);border-radius:1px;"><div style="height:100%;background:${accentColor};width:80%;border-radius:1px;"></div></div>
              </div>`;
          }).join('')}
        </div>` : ''}
      </div>
    </div>
    <div style="flex:1;background:${bodyBg};padding:44px 34px;display:flex;flex-direction:column;font-family:${rightFont}; justify-content:flex-start;">
      <div style="margin-bottom:${s.sectionGap};padding-bottom:18px;border-bottom:1px solid ${metricBorder};">
        <h1 style="font-size:${s.nameSize};font-weight:900;color:${titleColor};letter-spacing:-1px;line-height:0.9;margin-bottom:8px;font-family:${font};">${cv.prenom} <span style="color:${accentColor === '#D4AF37' ? '#c4a010' : accentColor};">${cv.nom}</span></h1>
        <p style="font-size:${s.headerSize};color:${sectionColor};letter-spacing:4px;text-transform:uppercase;font-weight:700;">${cv.poste}</p>
      </div>
      <div style="margin-bottom:${s.sectionGap};padding:14px 16px;background:${chipBg};border-left:3px solid ${accentColor};border-radius:0 6px 6px 0;">
        <p style="font-size:8px;font-weight:700;color:${accentColor};text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">PROFIL</p>
        <p style="font-size:${s.profileSize};color:${titleColor};line-height:${s.lineHeight};font-style:italic;opacity:0.9;">${cv.profil}</p>
      </div>
      <div style="margin-bottom:${s.sectionGap};">
        ${window.atsSec(window.ATS_ICONS.bag, "EXPÉRIENCES", titleColor, metricBorder)}
        ${(cv.experience || []).map(e => `
          <div style="margin-bottom:${s.itemGap};padding-left:14px;border-left:2px solid ${metricBorder};position:relative;">
            <div style="position:absolute;left:-5px;top:5px;width:8px;height:8px;background:${accentColor};border-radius:50%;"></div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2px;">
              <p style="font-size:12px;font-weight:700;color:${titleColor};">${typeof e === 'string' ? e : e.poste}</p>
              <span style="font-size:8px;background:${sectionColor};color:white;padding:2px 8px;border-radius:3px;font-weight:700;">${e.employeur || ''}</span>
            </div>
            ${Array.isArray(e.missions) ? e.missions.map(b => window.atsBullet(b, accentColor)).join('') : window.atsBullet(e.missions || '', accentColor)}
          </div>`).join('')}
      </div>
      ${(cv.formation && cv.formation.length > 0) ? `
      <div style="margin-bottom:${s.sectionGap};">
        ${window.atsSec(window.ATS_ICONS.sch, "FORMATION", titleColor, metricBorder)}
        ${cv.formation.map(f => `
          <div style="margin-bottom:${s.itemGap};padding-left:14px;border-left:2px solid ${metricBorder};">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:2px;">
              <p style="font-size:12px;font-weight:700;color:${titleColor};">${f.diplome}</p>
              <span style="font-size:9px;color:${accentColor};font-weight:700;">${f.annee}</span>
            </div>
            <p style="font-size:10px;color:#64748b;">${f.ecole}</p>
          </div>`).join('')}
      </div>` : ''}
      ${(cv.certifications && cv.certifications.length > 0) ? `
      <div style="margin-bottom:${s.sectionGap};">
        ${window.atsSec(window.ATS_ICONS.cert, "CERTIFICATIONS", titleColor, metricBorder)}
        ${cv.certifications.map(c => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><span style="color:${accentColor};">${window.ATS_ICONS.chk}</span><p style="font-size:10px;color:#475569;">${typeof c === 'string' ? c : c.titre}</p></div>`).join('')}
      </div>` : ''}
      ${(cv.portfolio && cv.portfolio.length > 0) ? `
      <div style="margin-bottom:${s.sectionGap};">
        ${window.atsSec(window.ATS_ICONS.bag, "PROJETS", titleColor, metricBorder)}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
          ${cv.portfolio.map(p => `<div style="padding:10px;background:${chipBg};border:1px solid ${metricBorder};border-radius:6px;"><p style="font-size:10px;font-weight:700;color:${titleColor};">${p.nom}</p><p style="font-size:9px;color:#64748b;">${p.desc}</p></div>`).join('')}
        </div>
      </div>` : ''}
      ${(cv.awards && cv.awards.length > 0) ? `
      <div style="margin-bottom:${s.sectionGap};">
        ${window.atsSec(window.ATS_ICONS.star, "DISTINCTIONS", titleColor, metricBorder)}
        ${cv.awards.map(a => `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;"><span style="color:${accentColor};">★</span><p style="font-size:10px;color:#475569;font-style:italic;">${a}</p></div>`).join('')}
      </div>` : ''}
      ${(cv.references && cv.references.length > 0) ? `
      <div>
        ${window.atsSec(window.ATS_ICONS.ref, "RÉFÉRENCES", titleColor, metricBorder)}
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;">
          ${cv.references.map(r => `<div><p style="font-size:10px;font-weight:700;color:${titleColor};">${r.n || r.nom}</p><p style="font-size:9px;color:#64748b;">${r.p || r.poste}</p></div>`).join('')}
        </div>
      </div>` : ''}
    </div>
  </div>`;
};
