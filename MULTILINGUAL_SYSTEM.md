# Système de Traduction Multilingue

## 🌍 Langues Disponibles

Le portfolio supporte **17 langues**, ordonnées par distance géographique depuis la France :

### Langues Européennes
1. 🇫🇷 **Français** - Traduction complète (langue par défaut)
2. 🇪🇸 **Español** - Traduction partielle
3. 🇮🇹 **Italiano** - Traduction partielle
4. 🇩🇪 **Deutsch** - Traduction partielle
5. 🇬🇧 **English** - Traduction complète
6. 🇳🇱 **Nederlands** - Traduction partielle
7. 🇵🇹 **Português** - Traduction partielle
8. 🇵🇱 **Polski** - Traduction partielle
9. 🇷🇴 **Română** - Traduction partielle
10. 🇸🇪 **Svenska** - Traduction partielle
11. 🇬🇷 **Ελληνικά** - Traduction partielle
12. 🇷🇺 **Русский** - Traduction partielle

### Langues Asiatiques et Autres
13. 🇸🇦 **العربية** (Arabe) - Traduction partielle
14. 🇮🇳 **हिन्दी** (Hindi) - Traduction partielle
15. 🇨🇳 **中文** (Chinois) - Traduction partielle
16. 🇯🇵 **日本語** (Japonais) - Traduction partielle
17. 🇰🇷 **한국어** (Coréen) - Traduction partielle

## 📁 Structure des Fichiers

```
src/app/
├── config/
│   └── languages.ts          # Configuration des langues (codes, drapeaux, noms)
├── contexts/
│   └── LanguageContext.tsx   # Context React pour la gestion de langue
├── translations/
│   ├── index.ts              # Export principal
│   ├── all.ts                # Agrégation de toutes les traductions
│   ├── en.ts                 # Traductions anglaises (complètes)
│   ├── fr.ts                 # Traductions françaises (complètes)
│   ├── es.ts                 # Traductions espagnoles
│   ├── it.ts                 # Traductions italiennes
│   ├── de.ts                 # Traductions allemandes
│   ├── nl.ts                 # Traductions néerlandaises
│   ├── pt.ts                 # Traductions portugaises
│   ├── pl.ts                 # Traductions polonaises
│   ├── ro.ts                 # Traductions roumaines
│   ├── sv.ts                 # Traductions suédoises
│   ├── el.ts                 # Traductions grecques
│   ├── ru.ts                 # Traductions russes
│   ├── ar.ts                 # Traductions arabes
│   ├── hi.ts                 # Traductions hindi
│   ├── zh.ts                 # Traductions chinoises
│   ├── ja.ts                 # Traductions japonaises
│   └── ko.ts                 # Traductions coréennes
└── components/
    └── LanguageSelector.tsx  # Composant de sélection de langue
```

## 🔧 Fonctionnement

### 1. Sélection de Langue

Le composant `LanguageSelector` affiche :
- Le drapeau du pays
- Le nom natif de la langue
- Un menu déroulant avec toutes les langues disponibles

### 2. Système de Fallback

Si une traduction n'existe pas dans la langue sélectionnée :
1. Le système cherche d'abord dans **Anglais**
2. Si non trouvé, cherche dans **Français**
3. Si toujours non trouvé, affiche la clé de traduction

### 3. Sauvegarde de Préférence

La langue sélectionnée est automatiquement sauvegardée dans `localStorage` et restaurée à la prochaine visite.

## 🎯 Utilisation

### Dans un Composant React

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('hero.greeting')}</h1>
      <p>{t('about.subtitle')}</p>
    </div>
  );
}
```

### Ajouter une Nouvelle Traduction

1. Ouvrir `/src/app/translations/[langue].ts`
2. Ajouter la traduction dans la structure appropriée :

```typescript
export const translationsES = {
  ...translationsEN,
  nav: {
    home: 'Inicio',
    about: 'Sobre mí',
    // ... autres traductions
  },
};
```

## ✨ Caractéristiques

- **17 langues** supportées
- **Sélecteur visuel** avec drapeaux emoji
- **Fallback intelligent** vers EN puis FR
- **Sauvegarde automatique** de la préférence
- **Animations fluides** avec Motion
- **Responsive** sur mobile et desktop
- **Accessible** au clavier

## 🚀 Performance

- Traductions complètes uniquement pour FR et EN
- Autres langues héritent de EN avec surcharge partielle
- Code splitting possible pour les traductions
- Pas de requêtes API nécessaires (tout en local)

## 📝 Notes

- **Français (FR)** : langue par défaut du portfolio
- **Anglais (EN)** : traduction complète de référence
- **Autres langues** : traductions partielles des sections principales
- Les traductions détaillées des projets sont disponibles uniquement en FR et EN
