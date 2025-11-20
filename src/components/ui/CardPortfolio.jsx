import { portfolioProjects } from "../../data/projects";

export default function CardPortfolio() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {portfolioProjects.map((project) => (
        <div className="col" key={project.id}>
          <div className="card card-portfolio h-100 text-center card-hover">
            <img
              src={project.image}
              className="card-img-top"
              alt={`Aperçu du proejt ${project.title}`}
            />

            <div className="card-body">
              <h3 className="card-title fw-bold">{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <a
                href={project.link}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le site
              </a>
            </div>

            <div className="card-footer">
              <small className="text-body-secondary">{project.footer}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
