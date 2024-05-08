import React, { useContext } from "react";
import "./Works.css";
import Reacts from "../../img/react.png";
import NodeJs from "../../img/nodejs.png";
import Java from "../../img/java.png";
import JavaScript from "../../img/js.png";
import MongoDB from "../../img/mongodb.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Expertise Spotlight
        </span>
        <span>Navigate Through My Skill Section</span>
        <span>
          {" "}
          I'm skilled in Java, Python, JavaScript, SQL, and HTML/CSS for web
          development. With ReactJS, NodeJS, and ExpressJS, I make websites look
          great and work smoothly.
          <br />
          I use MongoDB, MySQL, and efficient database techniques to manage data
          effectively. I'm also good at making designs with Tailwind CSS and
          Bootstrap.
          <br />
          Always learning new tech, I solve problems creatively and make sure
          websites are top-notch.
          <br />
          My goal is to build digital solutions that are not only functional but
          also user-friendly and impactful.
        </span>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Reacts} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={NodeJs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Java} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={JavaScript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MongoDB} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
