function CardBack(props) {
  return (
    <div style={styles.card} onClick={props.onClick}>
      <div style={styles.cardImage}>
        <img
          style={styles.img}
          src={require("./../assets/".concat(props.img))}
          alt={props.title}
        ></img>
      </div>
      <div style={styles.cardContentBack}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export const styles = {
  card: {
    width: "600px",
    display: "flex",
    flexDirection: "row",
    border: "1px solid lightgray",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "5px",
    overflow: "hidden",
    backgroundColor: "white",
  },
  cardImage: {
    width: "50%",
    height: "370px",
    backgroundColor: "black",
  },

  cardContentFront: {
    width: "50%",
    padding: " 20px 40px",
    overflow: "scroll",
  },
  cardContentBack: {
    width: "50%",
    padding: "20px 40px",
    overflow: "scroll",
    maxHeight: "300px",
  },

  categoryList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    height: "20%",
  },
  category: {
    margin: "1%",
    padding: "1% 4%",
    backgroundColor: "crimson",
    color: "white",
    flex: "0 25%",
    whiteSpace: "nowrap",
  },
  container: {
    margin: "2%",
  },

  start: {
    textAlign: "start",
    margin: "auto",
    marginBottom: "auto",
  },
  author: {
    textAlign: "start",
    margin: "auto",
    marginBottom: "auto",
    fontWeight: "bold",
  },

  contentCol: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },

  contentSection: {
    height: "20%",
  },
  colEnd: {
    marginTop: "auto",
    marginBottom: "4%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "fill",
  },
  warnings: {
    color: "red",
  },

  bookmark: {
    zIndex: "2",
  },
};

export default CardBack;
