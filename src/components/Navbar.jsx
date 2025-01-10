import { Link } from "react-router-dom";

function Navbar() {
  const handleAnchorClick = (e) => {
    e.preventDefault();
    // Récupère l'élément cible basé sur l'ID du lien
    const target = document.querySelector(e.target.hash);
    if (target) {
      // Fait défiler la page vers l'élément ciblé
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page">
          Accueil
        </Link>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link" onClick={handleAnchorClick}>
          À Propos
        </a>
      </li>
      <li className="nav-item">
        <a href="#projet" className="nav-link" onClick={handleAnchorClick}>
          Projet
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" className="nav-link" onClick={handleAnchorClick}>
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
