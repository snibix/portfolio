import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { SiBootstrap, SiSass, SiTailwindcss } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projetsData.json";

const techIcons: { [key: string]: JSX.Element } = {
  html: <DiHtml5 color="#e34f26" size={28} />,
  css: <DiCss3 color="#1572B6" size={28} />,
  js: <DiJavascript1 color="#f7df1e" size={28} />,
  react: <DiReact color="#61dafb" size={28} />,
  tailwind: <SiTailwindcss color="#38bdf8" size={28} />,
  bootstrap: <SiBootstrap color="#7952b3" size={28} />,
  sass: <SiSass color="#7952b3" size={24} />,
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p className="text-center mt-10">Projet non trouvé</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Retour aux projets
      </Link>

      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <img
        src={project.img}
        alt={project.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      {/* Logos des technologies */}
      <div className="flex gap-4 text-3xl mb-6">
        {project.technologies.map((tech: string, index: number) => (
          <span key={index}>{techIcons[tech]}</span>
        ))}
      </div>

      <p className="text-gray-700 mb-4">{project.longDescription}</p>

      <a
        href={project.git}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
      >
        Voir sur GitHub
      </a>
    </div>
  );
};

export default ProjectDetail;
