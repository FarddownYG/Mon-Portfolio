# Guide de Test du Système Multilingue

## ✅ Points à Vérifier

### 1. Sélecteur de Langue dans la Navbar

**Desktop :**
- [ ] Le sélecteur affiche le drapeau et le nom de la langue actuelle
- [ ] Au clic, un menu déroulant s'ouvre avec les 17 langues
- [ ] Les langues sont ordonnées de la France vers l'Asie
- [ ] La langue active a un fond coloré et une icône de check
- [ ] L'animation d'ouverture/fermeture est fluide

**Mobile :**
- [ ] Le sélecteur affiche uniquement le drapeau
- [ ] Le menu déroulant fonctionne correctement
- [ ] Pas de débordement sur petit écran

### 2. Changement de Langue

- [ ] Cliquer sur une langue change instantanément le contenu
- [ ] La navbar se met à jour (Accueil, À propos, Projets, etc.)
- [ ] La section Hero change (greeting, subtitle, roles)
- [ ] Les boutons CTA se traduisent
- [ ] La langue est sauvegardée (recharger la page pour vérifier)

### 3. Test des Langues Principales

**Français (FR) :**
- [ ] Toutes les sections sont traduites
- [ ] Les descriptions de projets sont complètes
- [ ] Les modals de projets affichent tout le contenu

**Anglais (EN) :**
- [ ] Toutes les sections sont traduites
- [ ] Les descriptions de projets sont complètes
- [ ] Les modals de projets affichent tout le contenu

**Autres langues (ES, IT, DE, etc.) :**
- [ ] Navigation traduite
- [ ] Hero traduit
- [ ] Sections principales traduites
- [ ] Les descriptions détaillées tombent sur EN (fallback)

### 4. Système de Fallback

**Test :**
1. Sélectionner Espagnol (ES)
2. Ouvrir un modal de projet
3. Vérifier que les descriptions détaillées sont en anglais

- [ ] Le fallback vers EN fonctionne
- [ ] Pas d'erreur dans la console
- [ ] Pas de clés de traduction visibles (ex: "projects.myGarage.description")

### 5. Langues Asiatiques

**Arabe (AR) :**
- [ ] Les caractères arabes s'affichent correctement
- [ ] La lecture reste de gauche à droite (pas de RTL automatique)

**Chinois (ZH), Japonais (JA), Coréen (KO) :**
- [ ] Les caractères s'affichent correctement
- [ ] Les drapeaux emoji sont visibles

**Hindi (HI) :**
- [ ] Les caractères devanagari s'affichent correctement

### 6. Persistance

**Test :**
1. Sélectionner une langue (ex: Allemand)
2. Recharger la page (F5)
3. Naviguer vers une autre page puis revenir

- [ ] La langue est conservée après rechargement
- [ ] La langue est conservée dans localStorage

### 7. Performance

- [ ] Le changement de langue est instantané (< 100ms)
- [ ] Pas de lag lors de l'ouverture du sélecteur
- [ ] Pas de flash de contenu non traduit

### 8. Accessibilité

- [ ] Le sélecteur est accessible au clavier (Tab)
- [ ] Les langues peuvent être sélectionnées avec Enter/Space
- [ ] Le menu se ferme avec Escape
- [ ] Le clic en dehors ferme le menu

## 🐛 Problèmes Potentiels

### Si une traduction manque :
1. Vérifier que la clé existe dans `/src/app/translations/en.ts`
2. Ajouter la traduction dans le fichier de langue approprié
3. Le système devrait fallback sur EN automatiquement

### Si le sélecteur ne s'affiche pas :
1. Vérifier que `LanguageSelector` est importé dans `Navbar.tsx`
2. Vérifier la console pour des erreurs d'import
3. S'assurer que Motion est installé (`motion` package)

### Si les drapeaux ne s'affichent pas :
1. Vérifier que les emojis sont supportés par le navigateur
2. Tester sur différents navigateurs/OS
3. Alternative : utiliser des images SVG de drapeaux

## 🎨 Personnalisation

### Ajouter une nouvelle langue :

1. **Ajouter dans `/src/app/config/languages.ts` :**
```typescript
{ code: 'xx', name: 'Language Name', nativeName: 'Nom Natif', flag: '🏳️' }
```

2. **Créer `/src/app/translations/xx.ts` :**
```typescript
import { translationsEN } from './en';
export const translationsXX = {
  ...translationsEN,
  nav: { /* traductions */ },
  hero: { /* traductions */ },
};
```

3. **Importer dans `/src/app/translations/all.ts` :**
```typescript
import { translationsXX } from './xx';
// ...
export const translations = {
  // ...
  xx: translationsXX,
};
```

4. **Ajouter le type dans `/src/app/config/languages.ts` :**
```typescript
export type LanguageCode = 
  | 'fr' | 'es' | ... | 'xx';
```

## 📊 Couverture des Traductions

| Langue | Navigation | Hero | About | Projects | Skills | Contact | Modal |
|--------|-----------|------|-------|----------|--------|---------|-------|
| FR 🇫🇷 | ✅ 100%   | ✅ 100% | ✅ 100% | ✅ 100% | ✅ 100% | ✅ 100% | ✅ 100% |
| EN 🇬🇧 | ✅ 100%   | ✅ 100% | ✅ 100% | ✅ 100% | ✅ 100% | ✅ 100% | ✅ 100% |
| ES 🇪🇸 | ✅ 100%   | ✅ 100% | ⚠️ 60%  | ⚠️ 40%  | ⚠️ 40%  | ✅ 80%  | ⚠️ 30% |
| IT 🇮🇹 | ✅ 100%   | ✅ 100% | ⚠️ 40%  | ⚠️ 30%  | ⚠️ 30%  | ⚠️ 60%  | ⚠️ 30% |
| DE 🇩🇪 | ✅ 100%   | ✅ 100% | ⚠️ 40%  | ⚠️ 30%  | ⚠️ 30%  | ⚠️ 60%  | ⚠️ 30% |
| Autres | ✅ 100%   | ✅ 100% | ⚠️ 30%  | ⚠️ 20%  | ⚠️ 20%  | ⚠️ 50%  | ⚠️ 20% |

**Légende :**
- ✅ 100% : Traduction complète
- ⚠️ XX% : Traduction partielle avec fallback sur EN

---

✨ Le système est prêt à l'emploi avec 17 langues supportées !
