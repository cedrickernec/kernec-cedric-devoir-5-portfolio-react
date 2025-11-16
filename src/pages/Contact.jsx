import Container from "../components/common/Container";
import SectionDivider from "../components/common/SectionDivider";
import FormContact from "../components/ui/FormContact";
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
            <div className="col-md-6">
              <SectionDivider level="h3" title="Formulaire de contact" />
              <FormContact/>
            </div>

            {/*Colonne droite*/}
            <div className="column-right col-md-6 mt-4 mt-md-0">
              <SectionDivider level="h3" title="Mes coordonnées" />
              <h4>John Doe</h4>
              <div className="contact-container d-flex flex-column  mb-2">
                <div className="d-flex gap-2">
                  <i className="bi bi-map" aria-hidden="true"></i>
                  <p>40 rue Laure Diebold</p>
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-geo-alt" aria-hidden="true"></i>
                  <p>69009 Lyon, France</p>
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-phone" aria-hidden="true"></i>
                  <p>10 20 30 40 50</p>
                </div>
                <div className="d-flex gap-2">
                  <i className="bi bi-envelope-at" aria-hidden="true"></i>
                  <p>john.doe@gmail.com</p>
                </div>
              </div>
              <div className="map-wrapper">
                <iframe
                  title="Localisation Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271524621775!2d4.796403975589413!3d45.778661971080844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1763133003192!5m2!1sfr!2sfr"
                  style={{border:0}}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
