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

- [🚀 Objectifs du projet](#-objectifs-du-projet)
- [🛠️ Technologies utilisées](#-technologies-utilisées)
- [📦 Installation du projet](#-installation-du-projet)
- [🧑‍💻 Auteur](#--auteur)
- [✅ Validation finale](#-validation-finale)
- [🔄 Historique des mises à jour](#-historique-des-mises-à-jour)
  - [Issue #1 - Initialisation du projet](#issue-1---initialisation-du-projet)
  - [Issue #2 - Navbar + Routes + Footer](#issue-2---navbar--routes--footer)
  - [Issue #3 - Footer commun](#issue-3--footer-commun)
  - [Issue #4 - Home (Hero + About + Skills)](#issue-4--home-hero--about--skills)

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

### Correctif mineur

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

### Correctif mineur

- Suppression du `mt-5` du footer

*Mise à jour - 7 novembre 2025*