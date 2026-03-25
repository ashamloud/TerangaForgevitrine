# TerangaForge — Architecture Templates CV (v2.0 Modular)

## Fichier Central : cv-data.js

**Un seul endroit pour modifier les données → appliqué partout automatiquement.**

```
cv-data.js (Données Centrales & Alias ATS)
    ↓ Consommé par
forge-cv-chat.html (Application Principale)
    ↓ Charge les modules
    ├── js/cv-generators-core.js      (Moteur de layout & Helpers visuels)
    ├── js/cv-generators-ats.js       (Templates ATS-Optimisés)
    ├── js/cv-generators-premium.js   (Templates Premium & Mandala)
    ├── js/cv-generators-traditional.js (Templates Traditionnels & Culturels)
    └── js/cv-generators.js           (Manifeste de tous les templates)
```

## Structure des Modules

- **Core (`cv-generators-core.js`)**: Contient `getSmartLayout` (ajustement dynamique de la densité) et les fonctions de dessin SVG (Mandalas).
- **Manifest (`cv-generators.js`)**: Sert de catalogue pour l'application, permettant d'appeler n'importe quel template par son ID.
- **Data (`cv-data.js`)**: Contient `CV_DATA` et assure la compatibilité avec les anciens formats via les alias `ex` et `D`.

## Comment modifier les données CV

Ouvrir `js/cv-data.js` et modifier `CV_DATA` :

```js
// Changer le nom
CV_DATA.prenom = "Mamadou";
CV_DATA.nom    = "DIALLO";

// Ajouter une expérience
CV_DATA.exp.push({
  p: "Poste", e: "Entreprise", d: "Dates",
  kpi: "Résultat clé",
  bullets: ["Action + Résultat 1", "Action + Résultat 2"],
  missions: "Résumé pour templates classiques"
});
```

## Règles ATS — Score 100%

| Règle | Statut |
|-------|--------|
| Profil 50-80 mots | ✅ 63 mots |
| Bullets 100% chiffrés | ✅ 11/11 |
| Verbes d'action en début | ✅ 11/11 |
| Certifications reconnues | ✅ 4 (PMP®, PRINCE2, CSM®, ITIL4) |
| Sections ATS standard | ✅ 7/7 |
| Titre avec mots-clés | ✅ PMP® · Project Manager · Digital |

## Développement

Chaque module est enveloppé dans une **IIFE** pour éviter les conflits de nommage, tout en exportant les fonctions nécessaires vers l'objet global `window.cvGenerators`.

