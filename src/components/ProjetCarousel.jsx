import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";

function ProjectCarousel({ images }) {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators"></div>
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <img
              src={image}
              className="d-block w-100"
              alt={`Project Image ${index + 1}`}
              data-aos="fade-up"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <button
            className={`carousel-control-prev ${
              images.length === 2 ? "" : "d-none"
            }`}
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className={`carousel-control-next ${
              images.length === 2 ? "" : "d-none"
            }`}
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
}

ProjectCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCarousel;
