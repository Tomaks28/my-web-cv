import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { images, screens } from "../../constants";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src={images.PROFIL} alt="thomas" />
          <h3>Thomas AKSOGUT</h3>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <NavLink exact to={screens.CV} activeClassName="navActive">
                <i className="fa fa-home"></i>
                <span>Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={screens.CV_KNOWLEDGES}
                activeClassName="navActive"
              >
                <i className="fa fa-graduation-cap"></i>
                <span>Compétences</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={screens.CV_PORTFOLIO}
                activeClassName="navActive"
              >
                <i className="fa fa-briefcase"></i>
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={screens.CV_CONTACT}
                activeClassName="navActive"
              >
                <i className="fa fa-address-book"></i>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/thomas-aksogut-b0a46780/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/TomAks28"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
