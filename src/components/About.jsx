function About() {
  return (
    <div className="px-4 pt-lg-4 pt-sm-2 my-3 text-center border-bottom">
      <h1
        className="display-4 fw-medium text-body-emphasis py-3"
        data-aos="fade-down"
      >
        Bienvenue sur mon portfolio !
      </h1>
      <div className="col-lg-6 mx-auto" data-aos="fade-up">
        <p className="lead fs-4 pb-lg-5 text-start">
          Je suis Damien Jaworski, Développeur web passionné par la création
          d&#39;applications modernes et réactives. Mon parcours en
          développement web a commencé en 2022, après une reconversion
          professionnelle. J&#39;ai d&#39;abord acquis des compétences en HTML,
          CSS, JavaScript, PHP, MySQL, et Bootstrap, avant de me spécialiser
          dans le développement front-end avec React. Aujourd&#39;hui, je
          cherche à créer des projets innovants et collaborer avec des équipes
          dynamiques pour concevoir des applications web fonctionnelles,
          esthétiques et performantes.
        </p>
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
