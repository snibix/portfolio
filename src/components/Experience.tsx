export default function Training() {
  return (
    <div className="bg-white" id="experience">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex-column lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#413ed6ff" />
                <stop offset={1} stopColor="#790d61ff" />
              </radialGradient>
            </defs>
          </svg>

          <h2 className="text-white text-5xl w-auto text-center pt-10 font-semibold">
            Mes Experiences
          </h2>
          <div className="flex justify-evenly">
            <div className="mx-auto max-w-[40%] text-center lg:mx-0 lg:flex-auto lg:py-15 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-md">
                Incubateur de compétences <br /> DM Concept <br />
                <span className="text-xl">03/2025 - 09/2025</span>
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300 h-50">
                Lors de mon stage chez dmConcept, j'ai contribué au
                développement de leur solution SaaS en créant deux
                fonctionnalités clés : un composant interactif pour la
                configuration de fenêtres sur mesure et un système d'export SVG
                depuis des fichiers JSON. J'ai également travaillé sur
                l'intégration PrestaShop, la modification de thèmes e-commerce
                et l'optimisation responsive des interfaces. En parallèle, j'ai
                développé un configurateur intégré au SaaS et réalisé la
                stylisation d'interfaces pour les présentations client. Ce stage
                m'a permis d'approfondir mes compétences en développement SaaS,
                d'acquérir une expertise en intégration e-commerce et de me
                familiariser avec les enjeux techniques d'une solution B2B en
                production.
              </p>
            </div>
            <div className="mx-auto max-w-[40%] text-center lg:mx-0 lg:flex-auto lg:py-15 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-md">
                Stage de formation <br />
                KR-Barber <br />
                <span className="text-xl">01/2023 - 02/2023</span>
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                Formation de 11 mois, axée sur les fondamentaux du développement
                web avec des langages et technologies essentiels : HTML, CSS,
                JavaScript, PHP et MySQL. Durant cette formation, j'ai réalisé
                trois projets pratiques, renforçant mes compétences techniques
                et mon esprit de conception : un projet fil rouge permettant
                d'approfondir progressivement les acquis, un site e-commerce
                complet, et un site de suite au stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
