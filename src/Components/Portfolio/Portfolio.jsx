import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogPage from "../../img/blog_page.png";
import MealIt from "../../img/meal_it.png";
import NewsApp from "../../img/newsApp.png";
import CRSM from "../../img/CRSM.png";
import Portfolioo from "../../img/portfolio.png";
import "swiper/css";
import { themeContext } from "../../Context";

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Project</span>
      <span>Portfolio</span>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="work">
          <img src={BlogPage} alt="" />
          <a
            href="https://main--mac-blog-page.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 style={{ color: darkMode ? "white" : "" }}>Blog Page</h3>
          </a>
          <p>
            A stylish blog site powered by cutting-edge technologies. Leveraging
            Vite React, Tailwind CSS, and Appwrite, this project showcases
            seamless content management, intuitive user experience, and robust
            performance.
          </p>
        </SwiperSlide>
        <SwiperSlide className="work">
          <img src={MealIt} alt="" />
          <a
            href="https://meal-it-mernstack.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 style={{ color: darkMode ? "white" : "" }}>
              Online Food Ordering Web Application
            </h3>
          </a>
          <p>
            Online Food Ordering Platform built with MERN stack. Seamlessly
            browse, order, and track deliveries with user authentication and
            PayPal integration. Responsive design ensures optimal user
            experience. Future plans include personalized recommendations and
            social media integration.
          </p>
        </SwiperSlide>
        <SwiperSlide className="work">
          <img src={NewsApp} alt="" />
          <a
            href="https://mannyamm21.github.io/TheNews_webpage_api/"
            target="_blank"
            rel="noreferrer"
          >
            <h3 style={{ color: darkMode ? "white" : "" }}>News WebPage</h3>
          </a>
          <p>
            The News is a dynamic and interactive news webpage that harnesses
            the power of HTML, CSS, JavaScript, and the News API to provide
            users with a seamless and personalized news browsing experience. API
            Used: gnews.io
          </p>
        </SwiperSlide>
        <SwiperSlide className="work">
          <img src={CRSM} alt="" />
          <a
            href="https://github.com/mannyamm21/computerstore"
            target="_blank"
            rel="noreferrer"
          >
            <h3 style={{ color: darkMode ? "white" : "" }}>
              Computer Retailer Store and Maintenance
            </h3>
          </a>
          <p>
            Computer Retailer store database management system that keeps track
            of the store's data and assists the owner in providing better
            service. - Java , MySql.
          </p>
        </SwiperSlide>
        <SwiperSlide className="work">
          <img src={Portfolioo} alt="" />
          <a
            href="https://github.com/mannyamm21/ReactPortfolio"
            target="_blank"
            rel="noreferrer"
          >
            <h3 style={{ color: darkMode ? "white" : "" }}>My Own Portfolio</h3>
          </a>
          <p>
            I've created a portfolio using ReactJS, React hooks, modern CSS,
            Swiper JS, Framer Motion, and more. For contact, I've used the
            EmailJS library. To improve functionality, I've added dark/light
            mode toggles using the useContext hook.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
