import SectionDivider from "../common/SectionDivider";
import Container from "../common/Container";
import johnDoeAbout from "../../assets/images/john-doe-about.jpg";

export default function AboutAndSkills() {
  return (
    <section>
      <Container>
        <div className="card shadow p-4">
          <div className="row">
            {/* Colonne gauche */}
            <div className="col-md-6">
              <SectionDivider level="h3" title="À propos" variant="default" />
              <img
                src={johnDoeAbout}
                alt="Photo de John Doe au travail"
                className="img-fluid mb-3"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent tristique, tellus ut facilisis dictum, elit nisl semper
                lectus, non ullamcorper orci sapien porta lorem.
              </p>
              <p>
                Suspendisse potenti. Suspendisse potenti. Donec feugiat semper
                pulvinar. Sed nec lorem at ante efficitur faucibus ac non felis.
                Quisque semper leo nec posuere vestibulum.
              </p>
              <p>
                Phasellus neque eros, pellentesque ac erat nec, facilisis varius
                urna. Quisque finibus et quam ut fringilla. Nam rutrum tortor
                nec libero sollicitudin imperdiet.
              </p>
            </div>

            {/* Colonne droite */}
            <div className="col-md-6">
              <SectionDivider
                level="h3"
                title="Mes compétences"
                variant="default"
              />

              <ul className="list-unstyled">
                {/* HTML */}
                <li>
                  <div className="d-flex align-items-center gap-1">
                    <h4 className="skill-title">HTML5</h4>
                    <p id="skill-html" className="skill-value">
                      90%
                    </p>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-describedby="skill-html"
                    ></div>
                  </div>
                </li>

                {/* CSS */}
                <li>
                  <div className="d-flex align-items-center gap-1">
                    <h4 className="skill-title">CSS</h4>
                    <p id="skill-css" className="skill-value">
                      80%
                    </p>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-describedby="skill-css"
                    ></div>
                  </div>
                </li>

                {/* JAVASCRIPT */}
                <li>
                  <div className="d-flex align-items-center gap-1">
                    <h4 className="skill-title">JavaScript</h4>
                    <p id="skill-js" className="skill-value">
                      70%
                    </p>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "70%" }}
                      aria-valuenow={70}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-describedby="skill-js"
                    ></div>
                  </div>
                </li>

                {/* PHP */}
                <li>
                  <div className="d-flex align-items-center gap-1">
                    <h4 className="skill-title">PHP</h4>
                    <p id="skill-php" className="skill-value">
                      60%
                    </p>
                  </div>
                  <div className="progress mb-3">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow={60}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-describedby="skill-php"
                    ></div>
                  </div>
                </li>

                {/* REACT */}
                <li>
                  <div className="d-flex align-items-center gap-1">
                    <h4 className="skill-title">React</h4>
                    <p id="skill-react" className="skill-value">
                      50%
                    </p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-primary"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={50}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-describedby="skill-react"
                    ></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
