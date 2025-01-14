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

      <section id="projet" className="py-lg-5 py-3" data-aos="fade-down">
        <div className="container w-75 m-auto">
          <h2 className="display-4 fw-medium text-body-emphasis text-center pb-5">
            Mes Projets
          </h2>
          <div
            className="d-flex overflow-auto pb-5 cards-container gap-lg-4 mb-3"
            data-aos="fade-up"
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

      <section className="bg-light py-lg-5">
        <div className="container">
          <h2
            className="display-5 text-center py-lg-0 py-4 fw-medium"
            id="formation"
            data-aos="fade-down"
          >
            Formations
          </h2>
          <div className="row d-flex justify-content-between gap-lg-4 gap-3">
            <div className="col-12 col-lg-5 w-100 d-flex flex-column flex-lg-row align-items-center">
              <div data-aos="fade-right" className="w-100 mb-4 mb-lg-0">
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
                  Formation pratique centrée sur le développement front-end,
                  avec 14 projets progressifs permettant une montée en
                  compétences complète. Le parcours débute par des bases en HTML
                  et CSS, se focalise ensuite sur JavaScript pour établir une
                  expertise solide, et aboutit à une maîtrise de React. Cette
                  approche structurée m&#39;a permis de développer des
                  applications interactives et performantes, en consolidant mes
                  compétences en programmation, gestion de données et conception
                  d&#39;interfaces dynamiques.
                </Training>
              </div>
              <img
                src="./img/illustration/learning-bro.svg"
                alt=""
                className="w-50 img-fluid"
                data-aos="fade-left"
              />
            </div>
            <div className="col-12 col-lg-6 training-item w-100 pb-4 d-flex flex-column flex-column-reverse flex-lg-row align-items-center">
              <img
                src="./img/illustration/Nerd-amico.svg"
                alt=""
                className="w-50 img-fluid"
                data-aos="fade-right"
              />
              <div data-aos="fade-left" className="w-100">
                <Training
                  title="Développeur Web - CCI CAMPUS"
                  time="05/2022 - 04/2023"
                  tags={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "PHP",
                    "MySQL",
                    "Boostrap",
                  ]}
                >
                  Formation de 11 mois, axée sur les fondamentaux du
                  développement web avec des langages et technologies essentiels
                  : HTML, CSS, JavaScript, PHP et MySQL. Durant cette formation,
                  j&#39;ai réalisé trois projets pratiques, renforçant mes
                  compétences techniques et mon esprit de conception : un projet
                  fil rouge permettant d&#39;approfondir progressivement les
                  acquis, un site e-commerce complet, et un site de suite au
                  stage.
                </Training>
              </div>
            </div>
          </div>
          <h2
            className="display-5 text-center py-lg-0 py-3 fw-medium"
            id="exp"
            data-aos="fade-down"
          >
            Expériences
          </h2>
          <div className="row">
            <div className="col-12 col-lg-6 training-item w-100 pb-4 d-flex flex-column flex-lg-row align-items-center">
              <div data-aos="fade-right" className="w-100 mb-4 mb-lg-0">
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
                  m&#39;a permis de renforcer mes compétences en développement
                  web full-stack et de me familiariser avec les exigences
                  d&#39;un projet client réel.
                </Experiences>
              </div>
              <img
                src="./img/illustration/website.svg"
                alt=""
                className="w-50 img-fluid"
                data-aos="fade-left"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="py-lg-5 py-sm-3"
        data-aos="fade-up"
        data-aos-offset="100"
      >
        <div className="container py-5">
          <h2 className="text-center">Contactez-moi</h2>
          <p className="text-center mb-4">
            N&#39;hésitez pas à me contacter pour toute question ou proposition
            de projet !
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-10">
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Accueil;
