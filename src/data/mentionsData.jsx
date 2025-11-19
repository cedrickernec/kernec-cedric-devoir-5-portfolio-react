export const mentionsSection = [
  /* ITEM 1 */
  {
    id: "publisher",
    title: "Éditeur du site",
    content: (
      <div className="contact-container">
        <h4>John Doe</h4>
        <address>
          {/* Adresse postale */}
          <div className="d-flex gap-2">
            <i className="bi bi-map" aria-hidden="true" />
            <span id="adress-label" className="visually-hidden">
              Adresse postale :
            </span>
            <p aria-labelledby="adress-label">40 rue Laure Diebold</p>
          </div>

          {/* Code postale / ville / pays */}
          <div className="d-flex gap-2">
            <i className="bi bi-geo-alt" aria-hidden="true" />
            <span id="city-label" className="visually-hidden">
              Code postal, ville et pays :
            </span>
            <p aria-labelledby="city-label">69009 Lyon, France</p>
          </div>

          {/* Téléphone */}
          <div className="d-flex gap-2">
            <i className="bi bi-phone" aria-hidden="true" />
            <span id="tel-label" className="visually-hidden">
              Numéro de téléphone :
            </span>
            <p aria-labelledby="tel-label">10 20 30 40 50</p>
          </div>

          {/* Email */}
          <div className="d-flex gap-2">
            <i className="bi bi-envelope-at" aria-hidden="true" />
            <span id="email-label" className="visually-hidden">
              Adresse email :
            </span>
            <p aria-labelledby="email-label">john.doe@gmail.com</p>
          </div>
        </address>
      </div>
    ),
  },

  /* ITEM 2 */
  {
    id: "host",
    title: "Hébergeur",
    content: (
      <div className="contact-container">
        <h4 className="fw-bold">alwaysdata</h4>
        <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
        <div className="d-flex gap-2 mt-2">
          <i className="bi bi-globe" aria-hidden="true" />
          <a
            href="https://www.alwaysdata.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Ouvrir le site alwaysdata"
          >
            www.alwaysdata.com
          </a>
        </div>
      </div>
    ),
  },

  /* ITEM 3 */
  {
    id: "credits",
    title: "Crédits",
    content: (
      <div className="contact-container">
        <h4 className="fw-bold">Crédits</h4>
        <div className="d-flex flex-column gap-2">
          <p>
            Ce site a été réalisé par John Doe, étudiant au{" "}
            <a
              href="https://www.centre-europeen-formation.fr/"
              target="_blank"
              rel="noopener noreferrer"
              title="Ouvrir le site du Centre Européen de Formation"
            >
              Centre Européen de Formation
            </a>
          </p>
          <p>
            <em>
              Les images utilisées sur ce site sont libres de droits et ont été
              obtenues sur le site{" "}
              <a
                href="https://pixabay.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="Ouvrir le site Pixabay"
              >
                Pixabay
              </a>
            </em>
          </p>
          <p>
            <em>
              La favicon de ce site a été fournie par{" "}
              <a
                href="https://www.flaticon.com/free-icons/john-doe"
                target="_blank"
                rel="noopener noreferrer"
                title="Acceder aux icônes John Doe sur le site Flaticon"
              >
                John Doe icons erstellt von Freepik - Flaticon
              </a>
            </em>
          </p>
        </div>
      </div>
    ),
  },
];
