// import PropTypes from 'prop-types'

import { FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiReactrouter,
} from "react-icons/si";

function Skills() {
  return (
    <div className="container py-4">
      <div className="row g-3 justify-content-center">
        <div className="col-4 col-md-2 text-center">
          <SiHtml5
            title="Html"
            className="home-logo"
            style={{ color: "#E34F26", fontSize: "3rem" }}
          />
        </div>
        <div className="col-4 col-md-2 text-center">
          <SiCss3
            title="Css"
            className="home-logo"
            style={{ color: "#2965F1", fontSize: "3rem" }}
          />
        </div>
        <div className="col-4 col-md-2 text-center">
          <SiJavascript
            title="JavaScript"
            className="home-logo"
            style={{ color: "#F7DF1E", fontSize: "3rem" }}
          />
        </div>

        <div className="col-4 col-md-2 text-center">
          <SiPhp
            title="PHP"
            className="home-logo"
            style={{ fontSize: "3rem", color: "#777BB4" }}
          />
        </div>
        <div className="col-4 col-md-2 text-center">
          <SiMysql
            title="My SQL"
            className="home-logo"
            style={{ fontSize: "3rem", color: "#00758F" }}
          />
        </div>
        <div className="col-4 col-md-2 text-center">
          <SiBootstrap
            title="Bootstrap"
            className="home-logo"
            style={{ fontSize: "3rem", color: "#7952B3" }}
          />
        </div>
        <div className="col-4 col-md-2 text-center">
          <FaReact
            title="React"
            className="home-logo"
            style={{ color: "#61DAFB", fontSize: "3rem" }}
          />
        </div>
        <div className="col-4 col-md-2 text-center">
          <SiReactrouter
            title="React-router"
            className="home-logo"
            style={{ color: "#CA4245", fontSize: "3rem" }}
          />
        </div>

        <div className="col-4 col-md-2 text-center">
          <SiGithub
            title="Github"
            className="home-logo"
            style={{ fontSize: "3rem" }}
          />
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {};

export default Skills;
