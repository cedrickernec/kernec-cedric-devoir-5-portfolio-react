export const mentionsSection = [
    
    /* ITEM 1 */
    {
        id: "publisher",
        title: "Éditeur du site",
        content: (
            <div className="contact-container">
                <h4>John Doe</h4>
                <div className="d-flex gap-2">
                    <i className="bi bi-map" aria-hidden="true"/>
                    <p>40 rue Laure Diebold</p>
                </div>
                <div className="d-flex gap-2">
                    <i className="bi bi-geo-alt" aria-hidden="true"/>
                    <p>69009 Lyon, France</p>
                </div>
                <div className="d-flex gap-2">
                    <i className="bi bi-phone" aria-hidden="true"/>
                    <p>10 20 30 40 50</p>
                </div>
                <div className="d-flex gap-2">
                    <i className="bi bi-envelope-at" aria-hidden="true"/>
                    <p>john.doe@gmail.com</p>
                </div>
            </div>
        )
    },

    /* ITEM 2 */
    {
        id: "host",
        title: "Hébergeur",
        content: (
            <div className="contact-container">
                <h4 className="fw-bold">
                    alwaysdata
                </h4>
                <p>91 rue du Faubourg Saint-Honoré, 75008 Paris</p>
                <div className="d-flex gap-2 mt-2">
                    <i className="bi bi-globe" aria-hidden="true"/>
                    <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">
                        www.alwaysdata.com
                    </a>
                </div>
            </div>
        )
    },

    /* ITEM 3 */
    {
        id: "credits",
        title: "Crédits",
        content: (
            <div className="contact-container">
                <h4 className="fw-bold">
                    Crédits
                </h4>
                <div className="d-flex flex-column gap-2">
                    <p>Ce site a été réalisé par John Doe, étudiant au{" "}
                    <a
                    href="https://www.centre-europeen-formation.fr/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Centre Européen de Formation
                    </a>
                    </p>
                    <p>
                        <em>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site{" "}
                        <a
                        href="https://pixabay.com/"
                        target="_blank"
                        rel="noopener noreferrer">
                            Pixabay
                        </a>
                        </em>
                    </p>
                    <p>
                        <em>La favicon de ce site a été fournie par{" "}
                        <a
                        href="https://www.flaticon.com/free-icons/john-doe"
                        target="_blank"
                        rel="noopener noreferrer">
                            John Doe icons erstellt von Freepik - Flaticon
                        </a>
                        </em>
                    </p>
                </div>
            </div>
        )
    }
]