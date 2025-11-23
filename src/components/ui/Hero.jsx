import ModalGitHub from "../layout/ModalGitHub";
import heroBg from "../../assets/images/hero-bg.jpg";

export default function Hero() {
  return (
    <>
      {/* Section Hero */}
      <section
        className="hero d-flex align-items-center justify-content-center"
        aria-labelledby="hero-title"
      >
        <img
          src={heroBg}
          alt="John Doe vue de dos qui travaille sur un projet"
          className="hero-bg"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="hero-overlay" aria-hidden="true"></div>
        <div className="hero-content text-center text-white px-3">
          <h1 id="hero-title" className="display-5 fw-bold mb-3">
            Bonjour, je suis John Doe
          </h1>
          <h2 className="fw-bold mb-4">Développeur web full stack</h2>
          <button
            type="button"
            className="btn btn-danger btn-lg"
            data-bs-toggle="modal"
            data-bs-target="#githubModal"
            aria-label="Ouvrir la fenêtre d'informations GitHub"
          >
            En savoir plus
          </button>
        </div>
      </section>

      {/* Modale GitHub */}
      <ModalGitHub />
    </>
  );
}
