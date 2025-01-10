// import argentbank from "../assets/img/argentbank01.png";
// import hrnet from "../assets/img/hrnet01.png";

// import kasa from "../assets/img/kasa01.png";
// import sportsee from "../assets/img/sportsee.png";
import About from "../components/About";
import Card from "../components/Card";
import Contact from "../components/Contact";
import projects from "../data/projetsData";

function Accueil() {
  return (
    <main>
      <section id="about" className="bg-light">
        <About />
      </section>
      <section id="projet" className="container py-3">
        <h2 className="display-4 fw-bold text-body-emphasis text-center pb-3">
          Mes Projets
        </h2>
        <div
          className="d-flex overflow-auto pb-5 cards-container"
          style={{
            overflowX: "auto",
            whiteSpace: "nowrap",
            gap: "1rem",
          }}
        >
          {projects.map((project) => (
            <Card
              key={project.id}
              id={project.id}
              title={project.title}
              img={project.img}
              description={project.description}
            />
          ))}
        </div>
      </section>
      <section id="contact" className="py-5 bg-light">
        <h2 className="text-center">Contactez-moi</h2>
        <p className="text-center mb-4">
          N&#39;hésitez pas à me contacter pour toute question ou proposition de
          projet !
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <Contact />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accueil;
