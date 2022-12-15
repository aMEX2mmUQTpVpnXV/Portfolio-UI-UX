// Taken From Youtube Video: https://www.youtube.com/watch?v=D5oswSO9y-k&ab_channel=CodeCommerce
import { Button } from "react-bootstrap";

const Modal = ({ open, toggleOpenModal }) => {
  const heart = "<3";
  if (!open) return null;
  return (
    <div style={styles.overlay} onClick={() => toggleOpenModal()}>
      <div style={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <h2 style={styles.header}>Welcome to my UI-UX portfolio!</h2>
        <p style={styles.text}>
          Floating around in space are objects that represent projects and
          pieces of my portfolio. Click any of them to navigate to the
          associated project! If you would like to learn more details about any
          of the projects please navigate to the projects section using the
          navbar at the top. Enjoy! {heart}
        </p>
        <Button onClick={() => toggleOpenModal()} style={styles.button}>
          Close
        </Button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    width: "100vw",
    height: "100%",
    position: "fixed",
    background: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "2%",
    maxWidth: "1000px",
    width: "100%",
    position: "fixed",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1a1a1a",
    color: "white",
    alignItems: "center",
    borderRadius: "10px",
    border: "5px solid white",
  },
  button: {
    background: "red",
    border: "none",
    width: "100px",
    marginTop: "2%",
  },
  content: {
    width: "50%",
  },
  header: {
    color: "whitesmoke",
  },
  text: {
    marginTop: "2%",
    fontSize: "1.5em",
  },
};

export default Modal;
