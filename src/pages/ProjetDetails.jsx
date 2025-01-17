import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import projetData from "../data/projetsData";

function ProjetDetails() {
  const { id } = useParams(); // Utilise useParams pour récupérer l'ID depuis l'URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    // Trouve le projet en utilisant l'ID
    const selectedProject = projetData.find(
      (project) => project.id === parseInt(id)
    );
    setProject(selectedProject);
  }, [id]); // Relance l'effet quand l'ID change

  if (!project) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="container">
      <div
        className="py-5 d-flex justify-content-evenly align-items-center"
        data-aos="fade-down"
      >
        <Link to="/">
          <i className="bi bi-arrow-left fs-1"></i>
        </Link>
        <div className="w-100">
          <h1 className=" fs-1 fw-bold text-center">{project.title}</h1>
        </div>
      </div>
      <Carousel className="projet-carousel">
        {project.images.map((image, index) => (
          <Carousel.Item key={index} className="">
            <img
              className="d-block w-75 m-auto"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div>
        <div>
          <h2 className="ms-4 mt-5" data-aos="fade-down" data-aos-offset="50">
            Description
          </h2>
          <p className="m-4 fs-5" data-aos="fade-up" data-aos-offset="50">
            {project.longDescription}
          </p>
        </div>
        <div>
          <h2 className="ms-4 mt-5" data-aos="fade-down" data-aos-offset="50">
            Objectif
          </h2>
          <p className="m-4 fs-5" data-aos="fade-up" data-aos-offset="50">
            {project.objectif}
          </p>
        </div>
        <div>
          <h2 className="ms-4 mt-5" data-aos="fade-down" data-aos-offset="50">
            Technologies
          </h2>

          <div className="d-flex flex-wrap justify-content-start">
            {project.technologies.map((logo, index) => (
              <div key={index} className="col-4 col-sm-3 col-md-2 p-2">
                <div className="d-flex justify-content-center align-items-center py-3">
                  <img
                    src={logo}
                    alt={`logo-${index}`}
                    className="img-fluid logo-perso"
                    data-aos="fade-down"
                    data-aos-offset="50"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center py-3" data-aos="fade-down">
            <a
              href={project.git}
              target="_blank"
              className="btn btn-primary mt-3"
              rel="noopener noreferrer"
            >
              Consulte le repository GitHub pour en savoir plus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjetDetails;
