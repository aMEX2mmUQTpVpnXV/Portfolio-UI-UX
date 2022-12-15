import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavigationBar from "../navigation/Navbar";
import Banner from "../animated/Banner";
import project1 from "../../assets/banners/boba.svg";
import project2 from "../../assets/banners/roomkast.svg";
import project3 from "../../assets/banners/royalroad.svg";
import downIcon from "../../assets/down-icon.png";

function Projects() {
  const hoverScale = 1.07;
  const tapScale = 0.95;

  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  // Take from Stack Overflow
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div style={{ background: "white" }}>
      <div style={styles.screenHeight}>
        <NavigationBar></NavigationBar>
        <div style={styles.wrapper}>
          {/* --- Introduction ---- */}
          <div style={styles.title}>
            ~ Introduction ~<hr></hr>
          </div>
          <div style={styles.introText}>
            Hello! <br></br>
            <br></br>Here are projects related to user interfaces and design
            that I have worked on. These projects are focused on the design
            decisions made while creating the works and the effects those
            decisions have on a user's experience. To view any project in full,
            click on its associated image!
          </div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: tapScale }}
            animate={{ rotate: 360 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 2,
              repeatDelay: 3,
              repeat: Infinity,
            }}
          >
            <img
              style={styles.icon}
              src={downIcon}
              alt="Navigate to Projects Section"
              onClick={handleClick}
            />
          </motion.div>
        </div>
      </div>
      <div style={styles.wrapper}>
        {/* --- Projects --- */}
        <div style={styles.title} ref={ref}>
          ~ Projects ~<hr></hr>
        </div>
        {/* Personas & Storyboarding*/}
        <div style={styles.project}>
          <div style={styles.caption}>
            <div style={styles.title}>
              <div style={{ color: "#853f36" }}>Personas & Storyboarding</div>
            </div>
            <div style={styles.text}>
              The goal of this project is to examine the merits of a local boba
              shop's ordering kiosk as an interface and to determine its impact
              on customer's experiences.
            </div>
          </div>
          <Link to="/personas" target="_blank" rel="noopener noreferrer">
            <Banner
              hoverScale={hoverScale}
              tapScale={tapScale}
              img={project1}
            />
          </Link>
        </div>

        {/* Iterative Design */}
        <div style={styles.projectReverse}>
          <Link to="/iterative" target="_blank" rel="noopener noreferrer">
            <Banner
              hoverScale={hoverScale}
              tapScale={tapScale}
              img={project2}
            />
          </Link>
          <div style={styles.caption}>
            <div style={styles.title}>
              <div style={{ color: "#008FDF" }}>Iterative Design</div>
            </div>
            <div style={styles.text}>
              In this project my team and I designed a mockup app interface for
              a startup named RoomKast. After each round of prototyping we
              gathered feedback, and improved our design accordingly.{" "}
            </div>
          </div>
        </div>

        {/* Redesign */}
        <div style={styles.project}>
          <div style={styles.caption}>
            <div style={styles.title}>
              <div style={{ color: "#001A51" }}>Redesign</div>
            </div>
            <div style={styles.text}>
              Royal Road is the home of thousands of web novels made by amateur
              and even proffesional writers. In this project, I explore a
              potential alternative to story display in hopes of creating a more
              visually appealing interface.{" "}
            </div>
          </div>
          <Link to="/royal-road" target="_blank" rel="noopener noreferrer">
            <Banner
              hoverScale={hoverScale}
              tapScale={tapScale}
              img={project3}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "80%",
    margin: "auto",
  },
  caption: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: "40%",
    maxHeight: "400px",
  },
  project: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: "2%",
    marginBottom: "2%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  projectReverse: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: "2%",
    marginBottom: "2%",
    flexWrap: "wrap-reverse",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    width: "100%",
    marginTop: "30px",
    marginBottom: "30px",
  },
  text: {
    margin: "3%",
    fontWeight: "500",
    fontSize: "1.5rem",
    color: "black",
  },
  introText: {
    display: "flex",
    fontWeight: "500",
    fontSize: "1.8rem",
    color: "black",
  },
  icon: {
    height: "100px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "100px",
  },
  screenHeight: {
    height: "100vh",
  },
};

export default Projects;
