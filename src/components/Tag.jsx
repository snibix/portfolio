import PropTypes from "prop-types";

function Tag({ content }) {
  return <span className="badge bg-primary me-2">{content}</span>;
}

Tag.propTypes = {
  content: PropTypes.string.isRequired, // Assure-toi que chaque tag est une chaîne de caractères
};

export default Tag;
