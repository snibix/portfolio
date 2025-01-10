import "bootstrap-icons/font/bootstrap-icons.css";
const SocialLinks = () => {
  return (
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="https://github.com/snibix"
          target="_blank"
        >
          <i className="bi bi-github fs-4"></i>
        </a>
      </li>
      <li className="ms-3">
        <a
          className="text-body-secondary"
          href="https://www.linkedin.com/in/damien-jaworski-49b813246/"
          target="_blank"
        >
          <i className="bi bi-linkedin fs-4"></i>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
