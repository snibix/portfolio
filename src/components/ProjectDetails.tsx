import React from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { HiArrowLeft } from "react-icons/hi";
import { SiBootstrap, SiKonva, SiSass, SiTailwindcss } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projetsData.json";
import Carousel from "./Carousel";

const techIcons: { [key: string]: React.JSX.Element } = {
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
  const { id } = useParams<{ readonly id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) return <p className="text-center mt-10">Projet non trouvé</p>;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header avec bouton retour */}
      <Link
        to="/#project"
        className="text-blue-500 hover:underline mb-4 inline-block text-xl"
      >
        <HiArrowLeft aria-hidden="true" size={30} className="text-gray-900" />
      </Link>

      {/* Titre principal */}
      <h1 className="text-5xl font-semibold mb-6 text-center text-gray-900">
        {project.title}
      </h1>

      {/* Carousel d'images */}
      <div className="mb-8">
        <Carousel id={project.id} />
      </div>

      {/* Technologies utilisées */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          Technologies utilisées
        </h2>
        <div className="flex gap-4 text-3xl justify-center bg-white p-6 rounded-lg shadow-lg">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="hover:scale-110 transition-transform">
              {techIcons[tech]}
            </span>
          ))}
        </div>
      </div>

      {/* Description et contexte */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Description
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {project.longDescription}
          </p>
        </div>
        {project.context && (
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Contexte
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              {project.context}
            </p>
          </div>
        )}
      </div>

      {project.objectif && (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Objectif
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            {project.objectif}
          </p>
        </div>
      )}

      {/* Fonctionnalités */}
      {project.features && project.features.length > 0 && (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Fonctionnalités principales
          </h2>
          <div className="bg-green-50 rounded-lg p-6">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature: string) => (
                <li key={feature} className="flex items-start space-x-2">
                  <span className="text-green-500 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Défis relevés */}
      {project.challenges && project.challenges.length > 0 && (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Défis relevés
          </h2>
          <div className="bg-orange-50 rounded-lg p-6">
            <ul className="space-y-3">
              {project.challenges.map((challenge: string) => (
                <li key={challenge} className="flex items-start space-x-2">
                  <span className="text-orange-500 font-bold mt-1">⚡</span>
                  <span className="text-gray-700">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Résultats obtenus */}
      {project.results && project.results.length > 0 && (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            Résultats obtenus
          </h2>
          <div className="bg-purple-50 rounded-lg p-6">
            <ul className="space-y-3">
              {project.results.map((result: string) => (
                <li key={result} className="flex items-start space-x-2">
                  <span className="text-purple-500 font-bold mt-1">🎯</span>
                  <span className="text-gray-700">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Lien GitHub */}
      <div className="w-full text-center">
        <a
          href={project.git}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors text-lg font-medium inline-flex items-center space-x-2"
        >
          <span>Voir sur GitHub</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
