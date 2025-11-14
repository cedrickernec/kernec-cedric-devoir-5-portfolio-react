import banner from "../assets/images/banner.jpg";
import SectionDivider from "../components/common/SectionDivider";
import Container from "../components/common/Container";
import CardService from "../components/ui/CardService";

export default function Services() {
  return (
    <>
      <img
      src={banner}
      alt="Bannière bleue abstraite pour la page Services"
      className="w-100"/>

      <Container aria-labelledby="services-title">

        <h1
        id="services-title"
        className="visually-hidden">
          Section Services du portfolio
        </h1>

        <SectionDivider
        title="Mon offre de services"
        paragraph="Voici les prestations sur lesquelles je peux intervenir"
        variant="centered"
        />

        <CardService/>
      </Container>
    </>
  )
}