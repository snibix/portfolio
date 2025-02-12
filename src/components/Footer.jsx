import SocialLinks from "./SocialLinks";

function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center py-5 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="text-body-secondary text-decoration-none lh-1">
            <svg className="bi" width="30" height="24">
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>
          <span className="text-body-secondary">
            &copy; 2024 Damien Jaworski
          </span>
        </div>

        <SocialLinks />
      </footer>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
