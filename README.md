# 🌐 Portfolio React – Devoir 5 CEF

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9.36.0-646CFF?logo=eslint&logoColor=white)
![License](https://img.shields.io/badge/Licence-CEF_Private-lightgrey)
![Status](https://img.shields.io/badge/Status-En%20cours-orange)
![Version](https://img.shields.io/badge/Version-v1.0-blue)

Projet réalisé dans le cadre du **Devoir 5 – Développeur Web & Web Mobile (CEF)**.  
Ce projet consiste à créer un **portfolio personnel** en **React.js** avec **Bootstrap** et **Vite**.

---

## SOMMAIRE

- [Objectifs du projet](#objectifs-du-projet)
- [Technologies utilisées](#technologies-utilisees)
- [Installation du projet](#installation-du-projet)
- [Auteur](#auteur)
- [Validation finale](#validation-finale)
- [Historique des mises à jour](#historique-des-mises-à-jour)
  - [Issue #1 - Initialisation du projet](#issue-1---initialisation-du-projet)
  - [Issue #2 - Navbar + Routes + Footer](#issue-2---navbar--routes--footer)
  - [Issue #3 - Footer commun](#issue-3---footer-commun)
  - [Issue #4 - Home (Hero + About + Skills)](#issue-4---home-hero--about--skills)
  - [Issue #5 - Services (Card + Titre)](#issue-5---services-card--titre)
  - [Issue #6 - Portfolio (Cards + Boutons)](#issue-6---portfolio-cards--boutons)
  - [Issue #7 – Contact (Formulaire + Coordonnées + Google Map)](#issue-7---contact-formulaire--coordonnées--google-map)
  - [Issue #8 – Mentions légales (Accordéon)](#issue-8---mentions-legales-accordeon)
  - [Issue #9 – Modale GitHub API](#issue-9---modale-github-api)
  - [Issue #17 - Correctifs globaux et vérification](#issue-17---correctifs-globaux-et-verification)

---

## 🚀 Objectifs du projet

- Créer une application React fonctionnelle et responsive (mobile / tablette / desktop),
- Utiliser **React Router** pour la navigation entre les pages :
  - Accueil (Home)
  - Services
  - Portfolio
  - Contact
  - Mentions légales
- Intégrer une **modale** affichant les informations GitHub via l’API publique,
- Respecter les standards **W3C** et les bonnes pratiques **SEO**,
- Fournir un dépôt GitHub propre et documenté.

---

## 🛠️ Technologies utilisées

| Technologie | Utilisation |
|-------------|-------------|
| ⚛️ React.js | Framework principal |
| ⚡ Vite | Environnement de développement |
| 🎨 Bootstrap 5 | Mise en forme et responsive design |
| 🧭 React Router DOM | Gestion des routes |
| 🧩 Git & GitHub | Versioning et collaboration |

---

## 📦 Installation du projet

```bash
# Cloner le dépôt
git clone https://github.com/cedrickernec/kernec-cedric-devoir-5-portfolio-react.git

# Accéder au dossier
cd kernec-cedric-devoir-5-portfolio-react

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

---

## 🧑‍💻 Auteur

[![GitHub - cedrickernec](https://img.shields.io/badge/GitHub-cedrickernec-black?logo=github)](https://github.com/cedrickernec)

---

## ✅ Validation finale

Le projet fera l’objet :
- de commits explicites (Closes #1, etc.),
- de captures de validation W3C,
- et d’un README complet.

🧱 README provisoire : Il sera enrichi au fur et à mesure du développement.

---

## 🔄 Historique des mises à jour

### Issue #1 - Initialisation du projet
- Initialisation de la structure du projet React (Vite + Bootstrap)
- Nettoyage des fichiers du projet
- Ajout des fichiers `reset.css` et `global.css`
- Intégration de la police *Nunito Sans*
- Mise en place du favicon PNG

*Mise à jour - 3 novembre 2025*

---

### Issue #2 - Navbar + Routes + Footer

- Installation de la dépendance `react-router-dom`
- Création et intégration de la `Navbar` (Bootstrap + React Router)
- Ajout du `Footer` placeholder commun
- Mise en place des routes : `/`, `/services`, `/portfolio`, `contact`, `/mentions-légales`
- Gestion du lien actif et des effets hover (CSS)
- Vérification du responsive (menu burger)
- Respect de la palette Bootstrap (`bg-dark`, `text-light`) et ajustement via CSS

*Mise à jour - 5 novembre 2025*

---

### Issue #3 - Footer commun

- Création du composant `Footer.jsx` :
  - Structure en 3 colonnes (coordonnées, liens utiles, réalisations)
  - Intégration des icônes Bootstrap (GitHub, Twitter, LinkedIn)
  - Liens internes gérés via `NavLink` de React Router DOM
  - Application de classes utilitaires Bootstrap pour la mise en page responsive
  - Gestion du hover sur les icônes sociales
- Ajustement du layout global (`global.css`) :
  - Mise en place du `display: flex` et `min-height: 100vh` sur `#root`
  - Alignement du footer en bas de page (sticky footer)
  - Harmonisation des paddings horizontaux
- Ajustement léger de la Navbar :
  - Suppression du `fs-bold` sur le logo textuel
  - Ajustement des paddings horizontaux

### Correctifs mineurs

- Correction de l'attribut `rel="noopener noreferrer"` pour les liens externes
- Documentation mise à jour (`README.md`)

*Mise à jour - 6 novembre 2025*

---

### Issue #4 - Home (Hero + About + Skills)

- Importation des images dans `src/assets/images`
- Création du hero `Hero.jsx` :
  - Insertion de l'image d'arrière plan en pleine écran + overlay légé
  - Mise en place des titres `h1` et `h2`
  - Mise en place du bouton "En savoir plus"
  - Création du fichier `home.css` pour les styles de la page d'accueil
- Création du composant `AboutAndSkills.jsx`
  - Création des titres de section via `SectionDivider.jsx` (avec ligne de marque de section)
  - Mise en forme 2 colonnes desktop/tablet et 1 colonne sur mobile
  - Alignement responsive du contenu avec le footer
- Intégration de la modale API GitHub (placeholder)

### Correctifs mineurs

- Suppression du `mt-5` du footer
- Rectification de la fonctionnalité du "sommaire" du `README.md`

*Mise à jour - 8 novembre 2025*

---

### Issue #5 - Services (Card + Titre)

- Import et intégration de la bannière décorative
- Adaptation du composant `SectionDivider.jsx` et création de deux variants
- Mise en forme des cards Services 3 colonnes sur desktop/tablet et 1 colonne sur mobile
- Création et application d'un CSS global pour les cards `.card-hover`. Au survol :
  - Ombre douce (Bootstrap)
  - Background légèrement plus sombre (gris)
- Intégration des icônes décorative Bootstrap pour chaque card
- Respect de la sémantique des titres :
  - `<h1>` (hidden) pour le titre de la page
  - `<h2>` pour le titre de section
  - `<h3>` pour les titres de sous-section (services)

### Correctifs mineurs

- Positionnement du `main` en fonction de la navbar (global) + adaptation de la hauteur du `hero` (Home page)
- Modification du composant `SectionDivider.jsx` dans l'objectif' d'adapter sémantiquement le titre des sections (adaptation des appels du composant dans `AboutAndSkills.jsx`) + Ajout de `aria-hidden` pour ignorer l'elément au niveau accessibilité
- Suppression de `.divider-line` dans `global.css` qui est maintenant géré directement dans le composant `SectionDivider.jsx`
- Ajustement des paddings responsive du `Footer` et du `Main` via la création d'un composant global `Container.jsx`
- Rectification de la fonctionnalité du "sommaire" du `README.md`

*Mise à jour - 11 novembre 2025*

---

### Issue #6 - Portfolio (Cards + Boutons)

- Création de la page porfolio avec les composants `SectionDivider.jsx` et `CardPorfolio.jsx`
- Création d'un fichier `project.js` dans `src/data` afin de centraliser les données des projets du portfolio et rendre le composant `CardPortfolio.jsx` plus facilement maintenable
- Création des projets et importation des données dans `CardPorfolio.jsx` :
  - Mise en forme des cards Services 3 colonnes sur desktop/tablet et 1 colonne sur mobile
  - Réutilisation de la classe de style `.card-hover` sur les cards
  - Création et intégration des boutons sur chaque projet (sans lien de redirection)
    - Création d'une classe de style pour les boutons dans portfolio.css (`.btn-portfolio-hover`)

### Correctifs mineurs

- Refactorisation des composants `Container.jsx` et `SectionDivider.jsx` afin d'y centraliser les propriétés globales utilisées sur l'ensemble du site (margin, padding, etc.)

*Mise à jour - 12 novembre 2025*

### Issue #7 – Contact (Formulaire + Coordonnées + Google Map)

- Création et intégration de la page `Contact.jsx`
  - Mise en forme 2 colonnes desktop/tablet et 1 colonne sur mobile
- Construction du formulaire de contact (`FormContact.jsx`) :
  - Gestion des `useState` pour chaque champ (nom, email, téléphone, sujet, message)
  - Système de validation dynamique (`onChange` / `onBlur`)
  - Dictionnaires d’erreurs + affichage conditionnel (is-invalid, invalid-feedback)
  - Message de succès dynamique et réinitialisation des champs
- Intégration des coordonnées personnelles + icônes Bootstrap
- Mise en place et intégration d'une Google Map intégrée (`iframe`) :
  - Adaptation complète sur Desktop (map en hauteur pleine via flex)
  - Adaptation sur mobile (hauteur fixe 400px)
  - Wrapper `.map-wrapper` responsive
- Ajustements CSS spécifiques (`contact.css`) :
  - Gestion du layout via `.contact-row`, `.column-right`, `.map-wrapper`
  - Style responsive via media queries
- Ajustement du design du bouton + message succès

*Mise à jour – 16 novembre 2025*

### Issue #8 – Mentions légales (Accordéon)

- Création et intégration de la page `MentionsLegales.jsx`
- Desindexation de la page via `react-helmet`
- Mise en place d’une structure sémantique :
  - Section principale avec `aria-labelledby`
  - Titre `h1` masqué visuellement
  - Utilisation du composant `SectionDivider.jsx`
- Création d’un accordéon Bootstrap fonctionnel comprenant :
  - **Éditeur du site**
  - **Hébergeur**
  - **Crédits**
- Gestion des états ouverts/fermés à l’initialisation via `collapse` / `show`
- Injection propre des données via le tableau `mentionsData.jsx` dans le but de faciliter la maintenance
- Intégration des coordonnées avec icônes Bootstrap (adresse, téléphone, email)
- Intégration des crédits :
  - Liens externes avec `target="_blank"` et `rel="noopener noreferrer"`
  - Mise en forme en italique via `<em>`

### Correctifs mineurs

- Ajustement du margin-top de `divider-line` dans le composant `SectionDivider.jsx` pour correspondance avec la maquette
  - `mt-2` → `mt-4`

*Mise à jour - 17 novembre 2025*

### Issue #9 - Modale GitHub API

- Création du composant `ModalGitHubItem.jsx` pour structurer l'affichage des informations
- Mise en place d'un tableau de donnée `githubFields` dans `modalGitHubData.js` (clé, icône, type, href, label)
- Intégration des données et des icônes conformément aux maquettes (avatar, nom avec lien externe vers le profil github, localisation, biographie, repositories, followers et following)
- Mise en forme de la modale :
  - centrage de la modale dans le viewport
  - 2 colonnes desktop/tablet et 1 colonne sur mobile
  - séparation des items par une bordure
  - item comportant un padding-start n'affectant pas les bordures
  - application de `float: left` sur les icônes pour les intégrer à leur paragraphe respectif
- `header` et `footer` de la modale mis en place lors de la création de la modale en `placeholder` (issue #4)
  - Titre h5
  - Bouton de fermeture de la modale : croix + bouton "Fermer"
- Les couleurs des bordures ont été corrigées

### Correctifs mineurs

- Docs (README) :
  - Correction de la date de mise à jour de l'issue #8
  - Intégration de la mise à jour de l'issue #8 dans le sommaire

*Mise à jour - 18 novembre 2025*

### Issue #17 - Correctifs globaux et vérification
- Refonte sémantique de l'ensemble du projet
  - vérification et correction des balises
  - titres hiérarchisés
  - titres visibles/masqués pour l'accessibilité
  - gestion des rôles sur les balises nécessaires
- Accessibilité (A11y)
  - ajout d'`aria-label`, `aria-labelledby`, `aria-hidden`, `aria-describedby`
  - labels accessible pour les inputs
  - structure de formulaire + refactorisation :
    - création des composants `<FormInput />` et `<FormTextarea />` réutilisables
- Progress bars
  - ajout du rôle obligatoire
  - ajout des attributs aria (`aria-value`, `aria-valuemin`, ...)
- Indentation de l'ensemble des codes

*Mise à jour - 19 novembre 2025*

### Issue # - Transitions CSS
- Application des transitions globales sur les élements interactifs
- Transfert des imports CSS (`home.css`, `portfolio.css`, `contact.css`) vers `global.css` afin d'éviter les conflits
- Application de transition sur des élements interactifs plus spécifiques :
  - cards
  - icons
  - modal
  - nav-link

*Mise à jour - 20 novembre 2025