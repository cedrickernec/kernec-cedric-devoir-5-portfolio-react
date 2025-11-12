import banner from "../assets/images/banner.jpg";
import Container from "../components/common/Container";
import SectionDivider from "../components/common/SectionDivider";
import CardPorfolio from "../components/ui/CardPortfolio";

export default function Portfolio() {
  return (
    <>
      <img
      src={banner}
      alt="Bannière bleue abstraite pour la page Portfolio"
      className="w-100"/>

      <Container aria-labelledby="portfolio-title">

        <h1
        id="porfolio-title"
        className="visually-hidden">
          Section Portfolio du site
        </h1>

        <SectionDivider
        title="Portfolio"
        paragraph="Voici quelques-unes de mes réalisations"
        variant="centered"/>

        <CardPorfolio/>
      </Container>
    </>
  )
}