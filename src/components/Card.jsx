import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ id, title, img, description }) {
  return (
    <div
      className="card mx-2 rounded-2"
      style={{
        width: "240px",
        height: "360px",
        flexShrink: 0,
      }}
    >
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text card-content-perso">{description}</p>
        <div className="d-flex justify-content-center py-2">
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
