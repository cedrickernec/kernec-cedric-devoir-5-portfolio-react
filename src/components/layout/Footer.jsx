// Footer commun avec navigation React Router + Bootstrap
import {NavLink} from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-5 mt-5">
      <div className="container px-4 px-md-5 px-lg-6">
        <div className="row text-start">

          {/* Colonne 1 */}
          <div className="col-md-4">
            <h5 className="mb-2">John Doe</h5>
            <p>40 rue Laure Diebold</p>
            <p>60009 Lyon, France</p>
            <p>10 20 30 40 50</p>
            <p>john.doe@gmail.com</p>
            <div className="mt-3">
              <a
              href="https://github.com/"
              className="text-secondary me-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers le profil GitHub"
              title="GitHub">
                <i className="bi bi-github fs-4" aria-hidden="true"></i>
              </a>
              <a
              href="https://x.com/"
              className="text-secondary me-3"
              target="_blank"
              rel="noopenner noreferrer"
              aria-label="Lien vers le profil Twitter"
              title="Twitter">
                <i className="bi bi-twitter fs-4" aria-hidden="true"></i>
              </a>
              <a
              href="https://linkedin.com/"
              className="text-secondary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers le profil LinkedIn"
              title="LinkedIn">
                <i className="bi bi-linkedin fs-4" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="mt-2 col-md-4 mt-md-0">
            <h5 className="mb-2">Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">
                  Me contacter
                </NavLink>
              </li>
              <li>
                <NavLink to="/mentions-legales">
                  Mentions légales
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="mt-2 col-md-4 mt-md-0">
            <h5 className="mb-2">
              Mes dernières réalisations
            </h5>
            <ul className="list-unstyled">
              <li>
                <NavLink to="/portfolio">
                  Fresh Food
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">
                  Restaurant Akira
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">
                  Espace bien-être
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">
                  SEO
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">
                  Création d'une API
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">
                  Maquette d'un site
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
