# Système de Traduction

## Vue d'ensemble

Le portfolio est maintenant entièrement bilingue (anglais/français) avec un bouton de changement de langue dans la navbar.

## Architecture

### 1. Contexte de Langue (`/src/app/contexts/LanguageContext.tsx`)
- Gère l'état de la langue actuelle
- Stocke la préférence dans localStorage
- Fournit la fonction `t()` pour accéder aux traductions
- Langue par défaut : **Anglais (en)**

### 2. Traductions
Les traductions sont organisées par section :
- `nav` : Navigation
- `hero` : Section hero
- `about` : À propos
- `projects` : Projets (+ détails de chaque projet)
- `skills` : Compétences
- `contact` : Contact
- `footer` : Pied de page
- `modal` : Modale de projet

### 3. Helper Functions (`/src/app/utils/translationHelpers.ts`)
Fonctions utilitaires pour :
- `getProjectsData(t)` : Retourne les données de projets traduites
- `getSkillsData(t, language)` : Retourne les données de compétences traduites

## Utilisation dans les Composants

```tsx
import { useLanguage } from '../contexts/LanguageContext';

export function MyComponent() {
  const { t, language, toggleLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{language === 'en' ? 'Hello' : 'Bonjour'}</p>
      <button onClick={toggleLanguage}>Change Language</button>
    </div>
  );
}
```

## Changement de Langue

L'utilisateur peut changer de langue via :
1. Le bouton avec l'icône de langues dans la navbar (desktop et mobile)
2. La préférence est sauvegardée automatiquement dans localStorage

## Composants Traduits

✅ Navbar
✅ Hero
✅ About
✅ Projects
✅ Skills
✅ Contact
✅ Footer
✅ ProjectModal

## Ajout de Nouvelles Traductions

1. Ajouter la clé dans `/src/app/contexts/LanguageContext.tsx` :
```tsx
const translations = {
  en: {
    mySection: {
      title: 'My Title',
    }
  },
  fr: {
    mySection: {
      title: 'Mon Titre',
    }
  }
}
```

2. Utiliser dans le composant :
```tsx
<h1>{t('mySection.title')}</h1>
```
