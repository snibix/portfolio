import About from "../components/About";
import Card from "../components/Card";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Training from "../components/Training";
import projects from "../data/projetsData";

function Accueil() {
  return (
    <main>
      <section id="about" className="bg-light">
        <About />
      </section>

      <section id="projet" className="py-3">
        <div className="container w-75 m-auto">
          <h2 className="display-4 fw-medium text-body-emphasis text-center pb-5">
            Mes Projets
          </h2>
          <div
            className="d-flex overflow-auto pb-5 cards-container gap-lg-5 mb-3"
            style={{
              overflowX: "auto",
              whiteSpace: "nowrap",
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
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2 className="display-4 text-center py-2 fw-medium " id="exp">
            Formations & Expériences
          </h2>
          <div className="row d-flex justify-content-between gap-5">
            <h3 className="py-2 fs-2">Formations</h3>
            <div className="col-md-6 w-100 d-flex flex-column">
              <Training
                title="Développeur Concepteur Logiciel - OpenClassRooms"
                time="10/2023 - 12/2024"
                tags={[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "SASS",
                  "Figma",
                  "Github",
                ]}
              >
                Formation pratique centrée sur le développement front-end, avec
                14 projets progressifs permettant une montée en compétences
                complète. Le parcours débute par des bases en HTML et CSS, se
                focalise ensuite sur JavaScript pour établir une expertise
                solide, et aboutit à une maîtrise de React. Cette approche
                structurée m&#39;a permis de développer des applications
                interactives et performantes, en consolidant mes compétences en
                programmation, gestion de données et conception d&#39;interfaces
                dynamiques.
              </Training>
            </div>
            <div className="col-md-6 training-item w-100 pb-4">
              <Training
                title="Développeur Web - CCI CAMPUS"
                time="05/2022 - 04/2023"
                tags={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Boostrap"]}
              >
                Formation de 11 mois, axée sur les fondamentaux du développement
                web avec des langages et technologies essentiels : HTML, CSS,
                JavaScript, PHP et MySQL. Durant cette formation, j&#39;ai
                réalisé trois projets pratiques, renforçant mes compétences
                techniques et mon esprit de conception : un projet fil rouge
                permettant d&#39;approfondir progressivement les acquis, un site
                e-commerce complet, et un site de suite au stage.
              </Training>
            </div>
          </div>
          <div className="col-md-6 training-item w-100">
            <h3 className="py-3 fs-2">Expériences</h3>
            <div className="col-md-6 training-item w-100 pb-4">
              <Experiences
                title="Stage de formation - KR-Barber"
                time="01/2023 - 02/2023"
                tags={[
                  "Html",
                  "CSS",
                  "JavaScript",
                  "PHP",
                  "Mysql",
                  "BDD",
                  "Adobe XD",
                ]}
              >
                Lors de mon stage, j&#39;ai conçu et développé un site vitrine
                complet pour un salon de coiffure. J&#39;ai créé les maquettes
                et pris en charge l&#39;intégralité du développement, du
                front-end au back-end, avec un back-office pour la gestion des
                contenus. Le site permet aux utilisateurs de consulter les
                services et de réserver des rendez-vous en ligne. Ce projet
                m&#39;a permis de renforcer mes compétences en développement web
                full-stack et de me familiariser avec les exigences d&#39;un
                projet client réel.
              </Experiences>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-5">
        <div className="container py-5">
          <h2 className="text-center">Contactez-moi</h2>
          <p className="text-center mb-4">
            N&#39;hésitez pas à me contacter pour toute question ou proposition
            de projet !
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accueil;
