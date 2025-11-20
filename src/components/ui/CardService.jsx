import { services } from "../../data/servicesData";

export default function CardService() {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-3 align-items-stretch">
      {services.map((service, index) => (
        <div className="col d-flex" key={index}>
          <div className="card card-services card-hover">
            <div className="card-content text-center p-3">
              <i
                className={`${service.icon} fs-1 text-primary d-block m-4`}
                aria-hidden="true"
              />
              <h3 className="card-title fw-bold">
                {service.title}
              </h3>
              <p className="card-text">
                {service.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
