import React from "react";
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from "react-icons/di";
import { HiArrowLeft } from "react-icons/hi";
import { SiBootstrap, SiKonva, SiSass, SiTailwindcss } from "react-icons/si";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projetsData.json";
import Carousel from "./Carousel";

// Version responsive des icônes selon la taille d'écran
const responsiveTechIcons: {
  [key: string]: (size: number) => React.JSX.Element;
} = {
  html: (size) => <DiHtml5 color="#e34f26" size={size} />,
  css: (size) => <DiCss3 color="#1572B6" size={size} />,
  js: (size) => <DiJavascript1 color="#f7df1e" size={size} />,
  react: (size) => <DiReact color="#61dafb" size={size} />,
  tailwind: (size) => <SiTailwindcss color="#38bdf8" size={size} />,
  bootstrap: (size) => <SiBootstrap color="#7952b3" size={size} />,
  sass: (size) => <SiSass color="#7952b3" size={size} />,
  konvajs: (size) => <SiKonva size={size} />,
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

      {/* Carousel d'images - Version responsive */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
          <Carousel id={project.id} />
        </div>
      </div>

      {/* Technologies utilisées - Version responsive */}
      <div className="mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 sm:mb-4 md:mb-6 text-gray-900 text-center">
          Technologies utilisées
        </h2>
        <div className="bg-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
          {/* Grid responsive pour les icônes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:flex xl:justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10">
            {project.technologies.map((tech: string) => (
              <div
                key={tech}
                className="flex justify-center items-center hover:scale-110 transition-transform duration-200 p-2 sm:p-3 md:p-4"
              >
                {/* Icônes responsives */}
                <div className="block sm:hidden">
                  {responsiveTechIcons[tech](40)}
                </div>
                <div className="hidden sm:block md:hidden">
                  {responsiveTechIcons[tech](50)}
                </div>
                <div className="hidden md:block lg:hidden">
                  {responsiveTechIcons[tech](60)}
                </div>
                <div className="hidden lg:block xl:hidden">
                  {responsiveTechIcons[tech](65)}
                </div>
                <div className="hidden xl:block">
                  {responsiveTechIcons[tech](70)}
                </div>
              </div>
            ))}
          </div>
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
