// Navbar principale avec navigation React Router + Bootstrap
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      aria-label="Navigation principale"
    >
      <div className="container-fluid px-3 px-md-4 px-lg-5">
        <NavLink className="navbar-brand" to="/">
          <strong>JOHN DOE</strong>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/mentions-legales"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "nav-link pending"
                    : isActive
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Mentions Légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
