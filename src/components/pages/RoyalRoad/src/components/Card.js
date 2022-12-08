import ReactCardFlip from "react-card-flip";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import React from "react";

class Card extends React.Component {
  // Basic Card Flipping setup taken from React-Card-Flip Documentation
  constructor(props) {
    super();
    this.state = {
      isFlipped: props.flipped.find((cur) => cur.title === props.title),
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(
      !this.props.flipped.find((cur) => cur.title === this.props.title)
    );
    this.props.handleFlippedChange(this.props);
    console.log(this.props.flipped);
  }

  render() {
    return (
      <div style={styles.container}>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <CardFront
            title={this.props.title}
            rating={this.props.rating}
            categories={this.props.categories}
            img={this.props.img}
            chapters={this.props.chapters}
            followers={this.props.followers}
            warnings={this.props.warnings}
            author={this.props.author}
            bookmarks={this.props.bookmarks}
            handleBookmarkChange={this.props.handleBookmarkChange}
            onClick={this.handleClick}
          ></CardFront>
          <CardBack
            title={this.props.title}
            desc={this.props.desc}
            img={this.props.img}
            onClick={this.handleClick}
          ></CardBack>
        </ReactCardFlip>
      </div>
    );
  }
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

export default Card;
