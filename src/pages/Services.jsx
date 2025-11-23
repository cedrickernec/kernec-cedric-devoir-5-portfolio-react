import { Helmet } from "react-helmet";
import banner from "../assets/images/banner.jpg";
import SectionDivider from "../components/common/SectionDivider";
import Container from "../components/common/Container";
import CardService from "../components/ui/cards/CardService";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | John Doe - Développeur Web et Web Mobile</title>
        <meta
          name="description"
          content="Découvrez mes services : UX Design, Développement Web et Optimisation SEO pour la performance et l'accessibilité des sites."
        />
      </Helmet>

      <img src={banner} alt="Bannière bleue abstraite" className="w-100" />

      <section aria-labelledby="services-title">
        <Container>
          <h1 id="services-title" className="visually-hidden">
            Mes services
          </h1>

          <SectionDivider
            title="Mon offre de services"
            paragraph="Voici les prestations sur lesquelles je peux intervenir"
            variant="centered"
          />

          <CardService />
        </Container>
      </section>
    </>
  );
}
