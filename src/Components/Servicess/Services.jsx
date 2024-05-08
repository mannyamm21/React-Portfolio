import React, { useContext } from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./Resume.pdf";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
function Services() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="services">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>
          {" "}
          As a seasoned Web Developer, I specialize in crafting visually
          stunning websites and apps that boast seamless functionality.
          <br /> My focus is on creating an exceptional online presence for
          clients, ensuring their digital footprint is both captivating and
          user-friendly.
          <br />
          In my role as a part-time Graphic Designer, I contribute my creative
          talents to an NGO, producing captivating visuals that amplify their
          mission and impact.
          <br /> Additionally, I curate compelling graphics for my own YouTube
          channel, leveraging design to engage and inspire audiences.
          <br />
          As a skilled Java Developer, I'm dedicated to crafting efficient web
          solutions that prioritize performance and user experience.
          <br /> Together, let's embark on a journey to build something truly
          exceptional.
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Web Developer"}
            detail={
              "As a web developer, I build websites and apps that look great and work smoothly. Let's create your online presence together."
            }
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Graphic Designer"}
            detail={
              "As a part-time graphic designer, I currently work for an NGO and create the visuals for my YouTube channel."
            }
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Java Developer"}
            detail={
              "Skilled Java Developer crafting efficient web solutions, prioritizing performance and user experience. Let's build something exceptional together!"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple" }}
        ></div>
      </div>
    </div>
  );
}

export default Services;
