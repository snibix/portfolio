import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ id, title, img, description }) {
  return (
    <div
      className="card mx-2"
      style={{
        width: "290px",
        height: "380px",
        flexShrink: 0,
      }}
    >
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text card-content-perso">{description}</p>
        <div className="d-flex justify-content-center">
          <Link
            to={`/projet/${id}`}
            className="btn btn-primary justify-content-center"
          >
            Voir plus
          </Link>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default Card;
