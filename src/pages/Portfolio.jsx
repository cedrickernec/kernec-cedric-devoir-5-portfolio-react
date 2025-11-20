import banner from "../assets/images/banner.jpg";
import Container from "../components/common/Container";
import SectionDivider from "../components/common/SectionDivider";
import CardPortfolio from "../components/ui/cards/CardPortfolio";

export default function Portfolio() {
  return (
    <div id="portfolio-page">
      <img
        src={banner}
        alt="Bannière bleue abstraite"
        className="w-100"
      />

      <section aria-labelledby="portfolio-title">
        <Container>
          <h1 id="portfolio-title" className="visually-hidden">
            Mon portfolio et mes projets
          </h1>

          <SectionDivider
            title="Portfolio"
            paragraph="Voici quelques-unes de mes réalisations"
            variant="centered"
          />

          <CardPortfolio />
        </Container>
      </section>
    </div>
  );
}
