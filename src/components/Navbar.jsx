import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link">
          À Propos
        </a>
      </li>
      <li className="nav-item">
        <a href="#projet" className="nav-link">
          Projet
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
