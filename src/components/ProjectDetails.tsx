import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { HiArrowLeft } from "react-icons/hi";
import { SiBootstrap, SiKonva, SiSass, SiTailwindcss } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projetsData.json";
import Carousel from "./Carousel";

const techIcons: { [key: string]: JSX.Element } = {
  //Pas oublier de corriger l'erreur du JSX
  html: <DiHtml5 color="#e34f26" size={70} />,
  css: <DiCss3 color="#1572B6" size={70} />,
  js: <DiJavascript1 color="#f7df1e" size={70} />,
  react: <DiReact color="#61dafb" size={70} />,
  tailwind: <SiTailwindcss color="#38bdf8" size={70} />,
  bootstrap: <SiBootstrap color="#7952b3" size={70} />,
  sass: <SiSass color="#7952b3" size={70} />,
  konvajs: <SiKonva size={70} />,
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p className="text-center mt-10">Projet non trouvé</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      <Link
        to="/#project"
        className="text-blue-500 hover:underline mb-4 inline-block text-xl"
      >
        <HiArrowLeft aria-hidden="true" size={30} className="text-gray-900" />
      </Link>

      <h2 className="text-5xl font-semibold mb-4 text-center text-gray-900">
        {project.title}
      </h2>
      <Carousel id={project.id} />

      {/* Logos des technologies */}
      <div className="flex gap-4 text-3xl p-10 justify-center">
        {project.technologies.map((tech: string, index: number) => (
          <span key={index}>{techIcons[tech]}</span>
        ))}
      </div>
      <h3 className="text-3xl font-semibold">Description :</h3>
      <p className="text-gray-700 mb-4 text-2xl pb-5">
        <br />
        {project.longDescription}
      </p>
      <div className="w-full text-center">
        <a
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition"
        >
          Voir sur GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
