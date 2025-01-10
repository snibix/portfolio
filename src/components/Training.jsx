import PropTypes from "prop-types";
import Tag from "./Tag"; // Assure-toi d'avoir un composant Tag pour afficher les tags

function Training({ title, time, children, tags }) {
  return (
    <div className="mb-4">
      <h4>{title}</h4>
      <p>
        <strong>{time}</strong>
      </p>
      <p className="fs-5">{children}</p>
      <div className="d-flex flex-wrap mt-3 fs-5 gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} content={tag} />
        ))}
      </div>
    </div>
  );
}

Training.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  children: PropTypes.node,
  tags: PropTypes.arrayOf(PropTypes.string), // Attendre un tableau de chaînes de caractères
};

export default Training;
