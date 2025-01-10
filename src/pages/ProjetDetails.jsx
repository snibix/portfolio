import "bootstrap/dist/css/bootstrap.min.css"; // Assure-toi d'importer le CSS de bootstrap
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap"; // Import du carousel de react-bootstrap
import { useParams } from "react-router-dom";
import projetData from "../data/projetsData"; // Assure-toi que ce chemin est correct

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
      <h1 className="text-center fs-1 fw-bold py-5">{project.title}</h1>
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
      <h2 className="ms-4 mt-5">Description</h2>
      <p className="m-4 fs-5">{project.longDescription}</p>
    </div>
  );
}

export default ProjetDetails;
