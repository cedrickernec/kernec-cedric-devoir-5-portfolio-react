import { portfolioProjects } from "../../data/projects";

export default function CardPorfolio() {
  return (
    <div class="row row-cols-1 row-cols-md-3 g-3">
      {portfolioProjects.map((project) => (
        <div class="col" key={project.id}>
          <div class="card h-100 text-center card-hover">
            <img
              src={project.image}
              class="card-img-top"
              alt={project.title}/>

            <div class="card-body">
              <h3 class="card-title fw-bold">{project.title}</h3>
              <p class="card-text">{project.description}</p>
              <a
                href={project.link || "#"}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer">
                Voir le site
              </a>
            </div>

            <div class="card-footer">
              <small class="text-body-secondary">{project.footer}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}