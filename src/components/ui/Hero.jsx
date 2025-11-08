export default function Hero() {
  return (
    <>
    {/* Section Hero */}
      <section className="hero d-flex align-items-center justify-content-center">
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-white px-3">
          <h1 className="display-5 fw-bold mb-3">Bonjour, je suis John Doe</h1>
          <h2 className="fw-bold mb-4">Développeur web full stack</h2>
          <button
          type="button"
          className="btn btn-danger btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#githubModal">
            En savoir plus
          </button>
        </div>
      </section>

      {/* Modale GitHub */}
      <div
      className="modal"
      id="githubModal"
      tabIndex="-1"
      aria-labelledby="githubModalLabel"
      aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark border text-white shadow-lg">
            <div className="modal-header">
              <h5 className="modal-title" id="githubModalLabel">Mon profil GitHub</h5>
              <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Fermer"></button>
            </div>

            <div className="modal-body text-center">
              <p>Placeholder de la modale GitHub (intégration à venir)</p>
            </div>

            <div className="modal-footer">
              <button
              type="button"
              className="btn btn-secondary rounded-3 px-4"
              data-bs-dismiss="modal">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
