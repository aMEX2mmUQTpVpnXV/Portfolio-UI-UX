import React from "react";
import { motion } from "framer-motion";

function Banner(props) {
  return (
    <div style={styles.wrapper}>
      <motion.div
        whileHover={{ scale: props.hoverScale }}
        whileTap={{ scale: props.tapScale }}
      >
        <img src={props.img} alt={props.alt} style={styles.img} />
      </motion.div>
    </div>
  );
}

const styles = {
  wrapper: {
    margin: "2%",
  },
  img: {
    height: "400px",
    boxShadow: "0 7px 30px -10px rgba(150,170,180,1)",
    backgroundColor: "transparent",
    borderRadius: "30px",
  },
};

export default Banner;
