import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const SlideUp = {
    initial: { opacity: 0, y: -100 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 },
    transition: { duration: 0.8 },
  };

  const SlideRight = {
    initial: { opacity: 0, x: 100 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 },
    transition: { duration: 0.8 },
  };

  const SlideLeft = {
    initial: { opacity: 0, x: -100 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="bg-white" id="experience">
      <div className="mx-auto">
        <div className="relative isolate overflow-hidden bg-gray-900 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-12 md:py-16 lg:py-20 shadow-2xl">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] -translate-y-1/2 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)] opacity-70"
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
                <stop stopColor="#8d8cccff" />
                <stop offset={1} stopColor="#c2abbdff" />
              </radialGradient>
            </defs>
          </svg>

          <motion.h2
            className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 font-semibold"
            ref={ref}
            {...SlideUp}
          >
            Mes Experiences
          </motion.h2>

          <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly gap-8 md:gap-12 lg:gap-16 xl:gap-20 overflow-x-hidden">
            <motion.div
              className="w-full lg:max-w-[45%] xl:max-w-[40%] text-center lg:text-left space-y-4 sm:space-y-6"
              ref={ref}
              {...SlideLeft}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-balance text-white leading-tight">
                Incubateur de compétences <br />
                <span className="text-purple-300">DM Concept</span> <br />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-normal">
                  03/2025 - 09/2025
                </span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty text-gray-300">
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
            </motion.div>

            <motion.div
              className="w-full lg:max-w-[45%] xl:max-w-[40%] text-center lg:text-left space-y-4 sm:space-y-6 overflow-x-hidden"
              ref={ref}
              {...SlideRight}
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-balance text-white leading-tight">
                Stage de formation <br />
                <span className="text-purple-300">KR-Barber</span> <br />
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-normal">
                  01/2023 - 02/2023
                </span>
              </h3>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-pretty text-gray-300">
                Formation de 11 mois, axée sur les fondamentaux du développement
                web avec des langages et technologies essentiels : HTML, CSS,
                JavaScript, PHP et MySQL. Durant cette formation, j'ai réalisé
                trois projets pratiques, renforçant mes compétences techniques
                et mon esprit de conception : un projet fil rouge permettant
                d'approfondir progressivement les acquis, un site e-commerce
                complet, et un site de suite au stage.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
