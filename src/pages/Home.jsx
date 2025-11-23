import { Helmet } from "react-helmet";
import Hero from "../components/ui/Hero";
import AboutAndSkills from "../components/ui/AboutAndSkills";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Accueil | John Doe - Développeur Web et Web Mobile</title>
        <meta name="description" content="Portfolio de John Doe, Developpeur Web et Web Mobile : présentation, compétences, projets, informations GitHub et informations de contact." />
      </Helmet>
      <Hero />
      <AboutAndSkills />
    </>
  );
}
