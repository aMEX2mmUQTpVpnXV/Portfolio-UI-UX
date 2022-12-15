import InterfaceCarousel from "./Carousel";

function Personas() {
  return (
    <div>
      <div style={styles.header}>
        A User's Experience Ordering Boba Tea through a Kiosk
      </div>
      <div style={styles.wrapper}>
        <div>Introduction</div>
        <div>
          This project explores a user's experience ordering boba tea through a
          kiok at a local tea shop. In order to accomplish this, I surveyed
          customers of the store, built personas, and created a storyboard to
          best elucidate the experience!{" "}
        </div>
        <div>The Interface</div>
        <div>
          To help familiarize you with the interface I have made a mockup of the
          different screens involved in the ordering process.
        </div>
        <InterfaceCarousel style={styles.interfaceCarousel}></InterfaceCarousel>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    width: "60%",
    margin: "auto",
  },
  header: {
    background: "#FDBBB8",
    height: "50vh",
  },
  interfaceCarousel: {
    margin: "50%",
  },
};

export default Personas;
