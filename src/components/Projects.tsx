import React, { useState } from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { SiBootstrap, SiKonva, SiSass, SiTailwindcss } from "react-icons/si";
import { Link } from "react-router-dom";
import projectsData from "../data/projetsData.json";

const techIcons: { [key: string]: React.JSX.Element } = {
  html: <DiHtml5 color="#e34f26" size={30} />,
  css: <DiCss3 color="#1572B6" size={30} />,
  js: <DiJavascript1 color="#f7df1e" size={30} />,
  react: <DiReact color="#61dafb" size={30} />,
  tailwind: <SiTailwindcss color="#38bdf8" size={30} />,
  bootstrap: <SiBootstrap color="#7952b3" size={30} />,
  sass: <SiSass color="#cd6799" size={30} />,
  konvajs: <SiKonva size={30} />,
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  // Trier par date décroissante
  const sortedProjects = [...projectsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const displayedProjects = showAll
    ? sortedProjects
    : sortedProjects.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-10" id="project">
      <h2 className="text-5xl font-semibold mb-8 text-center py-5 text-blue-950">
        Mes Projets
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayedProjects.map((project) => (
          <div key={project.id} className="card bg-base-100 w-[100%] shadow-sm">
            <figure>
              <img
                src={project.img}
                alt={project.title}
                className="object-contain h-50 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>

              <div className="card-actions mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <div key={tech} className="flex items-center">
                    {techIcons[tech]}
                  </div>
                ))}
              </div>

              <div className="card-actions justify-center mt-4">
                <Link
                  to={`/projet/${project.id}`}
                  className="btn text-white bg-gradient-to-r from-indigo-900 to-blue-950 border-none hover:opacity-90 transition"
                >
                  Voir plus
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedProjects.length > 4 && (
        <div className="text-center mt-6">
          {!showAll ? (
            <button
              onClick={() => setShowAll(true)}
              className="btn text-white bg-gradient-to-r from-indigo-900 to-blue-950 border-none hover:opacity-90 transition"
            >
              Voir plus de projets
            </button>
          ) : (
            <button
              onClick={() => setShowAll(false)}
              className="btn text-white bg-gradient-to-r from-indigo-800 to-slate-900 border-none hover:opacity-90 transition"
            >
              Voir moins
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
