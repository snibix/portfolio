import PropTypes from "prop-types";
import Tag from "./Tag";

function TagList({ tags }) {
  return (
    <div className="d-flex flex-wrap mt-3">
      {tags.map((tag, index) => (
        <Tag key={index} content={tag} />
      ))}
    </div>
  );
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
