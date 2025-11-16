import Container from "../components/common/Container";
import SectionDivider from "../components/common/SectionDivider";
import FormContact from "../components/ui/FormContact";
import ContactInfo from "../components/ui/ContactInfo";
import "../styles/contact.css";

export default function Contacts() {
  return (
    <section>
      <Container>
        <h1 id="contact-title" className="visually-hidden">
          Section Contact du site
        </h1>

        <SectionDivider
          title="Contact"
          paragraph="Pour me contacter en vue d'un entretien ou d'une future collaboration,
        merci de remplir le formulaire de contact"
          variant="centered"
        />

        <div className="card shadow p-4">
          <div className="row contact-row">
            {/*Colonne gauche*/}
            <section className="col-md-6">
              <SectionDivider level="h3" title="Formulaire de contact" />
              <FormContact/>
            </section>

            {/*Colonne droite*/}
            <section className="column-right col-md-6 mt-4 mt-md-0">
              <SectionDivider level="h3" title="Mes coordonnées" />
              <ContactInfo/>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
