import React from "react";
import { motion } from "framer-motion";
import NavigationBar from "../navigation/Navbar";
import Banner from "../animated/Banner";
import project1 from "../../assets/banners/boba.svg";
import project2 from "../../assets/banners/roomkast.svg";
import project3 from "../../assets/banners/royalroad.svg";

function Projects() {
  const hoverScale = 1.07;
  const tapScale = 0.95;

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div style={styles.wrapper}>
        <div style={styles.project}>
          <div style={styles.caption}>
            <div style={styles.title}>
              <div style={{ color: "#853f36" }}>Personas & Storyboarding</div>
            </div>
            <div style={styles.text}>
              The goal of this project is to examine the merits of Ten One Tea
              House's ordering kiosk as an interface and to determine its impact
              on customer's experiences.
            </div>
          </div>
          <Banner hoverScale={hoverScale} tapScale={tapScale} img={project1} />
        </div>
        <div style={styles.project}>
          <Banner hoverScale={hoverScale} tapScale={tapScale} img={project2} />
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
        <div style={styles.project}>
          <div style={styles.caption}>
            <div style={styles.title}>
              <div style={{ color: "#001A51" }}>Redesign</div>
            </div>
            <div style={styles.text}>
              Royal Road is the home of thousands of web novels made by amateur
              and even proffesional writers. In this project, I explore a
              potential alternative to the way Royal Road displays stories in
              hopes of creating a more visually appealing interface.{" "}
            </div>
          </div>
          <Banner hoverScale={hoverScale} tapScale={tapScale} img={project3} />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#white",
    width: "80%",
    alignItems: "center",
    flexWrap: "wrap",
    margin: "auto",
  },
  center: {
    display: "flex",
    alignItems: "center",
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
  },
  title: {
    margin: "3%",
    fontWeight: "bold",
    fontSize: "2.5rem",
  },
  text: {
    margin: "3%",
    fontWeight: "500",
    fontSize: "1.5rem",
    color: "black",
  },
};

export default Projects;
