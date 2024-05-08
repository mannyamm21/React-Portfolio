import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>manyamchaitanya07@gmail.com</span>
        <div className="f-icons">
          <a
            href="https://www.instagram.com/manyamm._/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size="3rem" />
          </a>
          <a
            href="https://www.linkedin.com/in/manyam-chaitanya-24715821a/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin color="white" size="3rem" />
          </a>
          <a
            href="https://github.com/mannyamm21"
            target="_blank"
            rel="noreferrer"
          >
            <Gitub color="white" size="3rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
