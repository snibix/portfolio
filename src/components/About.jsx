function About() {
  return (
    <div className="px-4 pt-lg-4 pt-sm-2 my-3 text-center border-bottom container py-5 ">
      <div className="col-12 mx-auto d-flex flex-column flex-lg-row align-items-center">
        <div className="col-12 col-lg-5" data-aos="fade-right">
          <h3 className="fs-1">Jaworski Damien</h3>
          <h4 className="fs-2 pb-3">Développeur web</h4>
          <p className="lead fs-4 pb-lg-5 text-start">
            Je suis un Développeur web passionné par la création
            d&#39;applications modernes et réactives. <br />
            <br />
            Mon parcours en développement web a commencé en 2022, après une
            reconversion professionnelle. J&#39;ai d&#39;abord acquis des
            compétences en HTML, CSS, JavaScript, PHP, MySQL, et Bootstrap,
            avant de me spécialiser dans le développement front-end avec React.
          </p>
        </div>
        <img
          src="./img/illustration/Handcoding-bro.svg"
          alt="Illustration"
          className="w-50 img-fluid mx-auto"
          data-aos="fade-left"
        />
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
