export default function CardService() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 align-items-stretch">
      <div className="col d-flex">
        <div className="card card-hover">
          <div className="card-content text-center p-3">
            <i
            className="bi bi-brush fs-1 text-primary d-block m-4"
            aria-hidden="true">
            </i>
            <h3 className="card-title fw-bold">UX Design</h3>
            <p className="card-text">
              L'UX Design est une discipline qui consiste à concevoir des
              produits (sites web, applications mobiles, logiciels, objets
              connectés, etc...) en plaçant l'utilisateur au centre des
              préoccupations. L'objectif est de rendre l'expérience utilisateur
              la plus fluide et agréable possible.
            </p>
          </div>
        </div>
      </div>
      <div className="col d-flex">
        <div className="card card-hover">
          <div className="card-content text-center p-3">
            <i
            className="bi bi-code-slash fs-1 text-primary d-block m-4"
            aria-hidden="true">
            </i>
            <h3 className="card-title fw-bold">Développement web</h3>
            <p className="card-text">
              Le développement de sites web consiste à créer des sites internet
              en utilisant des langages de programmation (HTML, CSS, JavaScript,
              PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
            </p>
          </div>
        </div>
      </div>
      <div className="col d-flex">
        <div className="card card-hover">
          <div className="card-content text-center p-3">
            <i
            className="bi bi-search fs-1 text-primary d-block m-4"
            aria-hidden="true">
            </i>
            <h3 className="card-title fw-bold">Référencement</h3>
            <p className="card-text">
              Le référencement naturel (SEO) est une technique qui consiste à
              optimiser un site web pour le faire remonter dans les résultats
              des moteurs de recherche (Google, Bing, Yahoo, etc.). L'objectif
              est d'attirer un maximum de visiteurs qualifiés sur le site.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
