import SectionDivider from "../common/SectionDivider";
import Container from "../common/Container";

export default function AboutAndSkills() {
  return (
    <section>
      <Container>
        <div className="card shadow p-4">
          <div className="row">
            {/* Colonne gauche */}
            <div className="col-md-6">
              <SectionDivider
              level="h3"
              title="À propos"
              variant="default"
              />
              <img
                src="src/assets/images/john-doe-about.jpg"
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
              <label>HTML5 90%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-danger"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <label>CSS 80%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-info"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <label>JAVASCRIPT 70%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-warning"
                  style={{ width: "70%" }}
                ></div>
              </div>
              <label>PHP 60%</label>
              <div className="progress mb-3">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <label>REACT 50%</label>
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "50%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
