# Système de Gestion des Cookies - Guide d'utilisation

## 🎯 Fonctionnalités implémentées

Votre site d'agence digitale dispose maintenant d'un système complet de gestion des cookies conforme au RGPD :

### 1. **Bannière de Consentement** 
- Apparaît automatiquement lors de la première visite
- Options : "Accepter tout", "Refuser tout", ou "Gérer les préférences"
- Design moderne et responsive

### 2. **Gestion des Types de Cookies**
- **Nécessaires** : Toujours activés (session, sécurité)
- **Fonctionnels** : Sauvegarde du formulaire de contact
- **Analytiques** : Google Analytics (optionnel)
- **Marketing** : Publicité personnalisée (optionnel)

### 3. **Formulaire de Contact Intelligent**
- **Sauvegarde automatique** : Les données sont sauvegardées pendant la saisie (si autorisé)
- **Restauration** : Les données sont restaurées au rechargement de la page
- **Indicateurs visuels** : Alerte sur l'état de la sauvegarde
- **Gestion des erreurs** : Feedback utilisateur en temps réel

### 4. **Paramètres Avancés**
- **Interface dédiée** : Accessible depuis le footer
- **Gestion granulaire** : Contrôle par type de cookie
- **Suppression sélective** : Nettoyage des cookies non autorisés
- **Informations légales** : Durée de conservation et droits RGPD

## 🚀 Comment utiliser

### Pour l'utilisateur :
1. Visitez le site → La bannière apparaît
2. Choisissez vos préférences ou acceptez tout
3. Allez sur la page Contact pour tester la sauvegarde
4. Modifiez les paramètres depuis le footer si nécessaire

### Pour le développeur :
```typescript
// Utiliser le contexte des cookies
const { preferences, hasConsented, updatePreferences } = useCookies();

// Utiliser le hook de formulaire avec sauvegarde
const { formData, setFormData, submitForm, clearSavedData } = useContactForm();
```

## 📋 Conformité RGPD

✅ **Consentement explicite** : L'utilisateur doit choisir
✅ **Granularité** : Choix par type de cookie  
✅ **Révocabilité** : Modification possible à tout moment
✅ **Transparence** : Information claire sur l'utilisation
✅ **Durée limitée** : Expiration automatique des cookies

## 🎨 Personnalisation

Le système est entièrement personnalisable :
- Couleurs et style via Tailwind CSS
- Textes et messages dans les composants
- Types de cookies dans `CookieContext.tsx`
- Durée de conservation configurable

## 🔧 Fichiers créés/modifiés

1. `src/contexts/CookieContext.tsx` - Contexte principal
2. `src/components/CookieBanner.tsx` - Bannière de consentement  
3. `src/components/CookieSettings.tsx` - Paramètres détaillés
4. `src/hooks/useContactForm.ts` - Gestion du formulaire
5. `src/components/ContactPage.tsx` - Page contact mise à jour
6. `src/components/Footer.tsx` - Ajout du lien paramètres
7. `src/App.tsx` - Intégration du système

## 🎉 Résultat

Votre site respecte maintenant les réglementations européennes sur les cookies tout en offrant une expérience utilisateur optimale avec la sauvegarde intelligente des formulaires !
