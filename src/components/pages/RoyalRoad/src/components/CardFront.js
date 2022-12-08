import { Rating } from "react-simple-star-rating";
import { IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState, useEffect } from "react";

function CardFront(props) {
  const [flag, setFlag] = useState(
    props.bookmarks.find((cur) => cur.title === props.title)
  );

  useEffect(() => {
    setFlag(props.bookmarks.find((cur) => cur.title === props.title));
  });

  return (
    <div style={styles.card} onClick={props.onClick}>
      <div style={styles.cardImage}>
        <img
          style={styles.img}
          src={require("./../assets/".concat(props.img))}
          alt={props.title}
        ></img>
      </div>
      <div style={styles.cardContentFront}>
        <div style={styles.contentCol}>
          <div style={styles.contentSection}>
            <div style={styles.categoryList}>
              {props.categories.map((category, i) => (
                <div style={styles.category} key={i}>
                  {category}
                </div>
              ))}
            </div>
          </div>
          <div style={styles.h2}>{props.title}</div>

          <p style={styles.start}>
            Chapters: {props.chapters.toLocaleString()}
          </p>
          <p style={styles.start}>
            Followers: {props.followers.toLocaleString()}
          </p>
          <p style={styles.author}>By: {props.author.toLocaleString()}</p>
          {props.warnings.length > 0 && (
            <p style={styles.warnings}>Warnings: {props.warnings.join(", ")}</p>
          )}
          <div style={styles.colEnd}>
            <Rating
              readonly={true}
              allowFraction={true}
              initialValue={props.rating}
              fillColor="crimson"
            ></Rating>
            <IconButton
              aria-label="heart"
              size="large"
              sx={{
                color: flag ? "gold" : "lightgray",
              }}
              onClick={(event) => {
                props.handleBookmarkChange(props, flag, setFlag);
                event.stopPropagation();
              }}
            >
              <BookmarkIcon fontSize="inherit" />
            </IconButton>{" "}
            <div style={styles.bookmark}></div>
          </div>
        </div>
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
  h2: {
    display: "block",
    fontSize: "1.5em",
    marginBlockStart: "0.83em",
    marginBlockEnd: "0.83em",
    margiIinlineStart: "0px",
    marginInlineEnd: "0px",
    fontWeight: "bold",
  },
};

export default CardFront;
