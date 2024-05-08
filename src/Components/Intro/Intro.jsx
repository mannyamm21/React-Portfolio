import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import boy from "../../img/user2.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
function Intro() {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Manyam Chaitanya</span>
          <span>
            Welcome to my portfolio! I'm Manyam Chaitanya, an Electronics and
            Communication Engineering student passionate about technology.
            Currently pursuing my Bachelor's degree, I've honed skills in Java,
            Python, HTML, CSS, and JavaScript. Drawing from my engineering
            background, I craft dynamic web applications and delve into
            front-end development using React.js. Committed to making a
            meaningful impact, I actively contribute to community initiatives as
            a social worker at WeCare. As a seasoned Web Developer, I specialize
            in creating visually stunning websites with seamless functionality.
            <br />
            <br />
            Additionally, I contribute graphic design skills to an NGO,
            amplifying their mission through captivating visuals. Proficient in
            various technologies including ReactJS, NodeJS, MongoDB, and MySQL,
            I strive to build user-friendly and impactful digital solutions.
            Let's collaborate and create something extraordinary together!
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a
            href="https://www.instagram.com/manyamm._/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="" />
          </a>
          <a
            href="https://github.com/mannyamm21"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/manyam-chaitanya-24715821a/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floatingDiv"
        >
          <FloatingDiv image={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floatingDiv"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatingDiv image={thumbup} text1="Software" text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
