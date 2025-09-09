import { useState } from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { SiBootstrap, SiSass, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import projectsData from "../data/projetsData.json";

const techIcons: { [key: string]: JSX.Element } = {
  html: <DiHtml5 color="#e34f26" size={24} />,
  css: <DiCss3 color="#1572B6" size={24} />,
  js: <DiJavascript1 color="#f7df1e" size={24} />,
  react: <DiReact color="#61dafb" size={24} />,
  tailwind: <SiTailwindcss color="#38bdf8" size={24} />,
  bootstrap: <SiBootstrap color="#7952b3" size={24} />,
  sass: <SiSass color="#7952b3" size={24} />,
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Trier les projets par date décroissante
  const sortedProjects = [...projectsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const displayedProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Mes Projets</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {displayedProjects.map((project) => (
          <div
            key={project.id}
            className="card card-side bg-base-100 shadow-sm"
          >
            <figure className="w-1/2">
              <img
                src={project.img}
                alt={project.title}
                className="object-cover h-full w-full rounded-l"
              />
            </figure>
            <div className="card-body w-2/3">
              <h2 className="card-title">{project.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(project.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex gap-2 mt-2">
                {project.technologies.map((tech: string, index: number) => (
                  <span key={index}>{techIcons[tech]}</span>
                ))}
              </div>
              <div className="card-actions justify-end mt-4">
                <Link to={`/projet/${project.id}`} className="btn btn-primary">
                  Voir plus
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && sortedProjects.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-secondary"
          >
            Voir plus de projets
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
