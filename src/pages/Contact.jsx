import Container from "../components/common/Container";
import SectionDivider from "../components/common/SectionDivider";
import FormContact from "../components/ui/FormContact";
import ContactInfo from "../components/ui/ContactInfo";
import "../styles/contact.css";

export default function Contacts() {
  return (
    <section aria-labelledby="contact-title">
      <Container>
        <h1 id="contact-title" className="visually-hidden">
          Contact
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
            <div className="col-md-6">
              <SectionDivider level="h3" title="Formulaire de contact" />
              <FormContact/>
            </div>

            {/*Colonne droite*/}
            <div className="column-right col-md-6 mt-4 mt-md-0">
              <SectionDivider level="h3" title="Mes coordonnées" />
              <ContactInfo/>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
