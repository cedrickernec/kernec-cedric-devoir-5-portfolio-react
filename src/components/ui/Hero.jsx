export default function Hero() {
  return (
    <section className="hero d-flex align-items-center justify-content-center">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-white px-3">
        <h1 className="display-5 fw-bold mb-3">Bonjour, je suis John Doe</h1>
        <h2 className="fw-bold mb-4">Développeur web full stack</h2>
        <button type="button" className="btn btn-danger btn-lg">
          En savoir plus
        </button>
      </div>
    </section>
  );
}
