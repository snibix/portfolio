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
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white position-fixed top-0 z-1 w-100 shadow overflow-hidden"
      style={{ opacity: "0.96" }}
    >
      <div className="container">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto p-2">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={handleAnchorClick}>
                À Propos
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projet"
                className="nav-link"
                onClick={handleAnchorClick}
              >
                Projets
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#formation"
                className="nav-link"
                onClick={handleAnchorClick}
              >
                Formations
              </a>
            </li>
            <li className="nav-item">
              <a href="#exp" className="nav-link" onClick={handleAnchorClick}>
                Expériences
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={handleAnchorClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
