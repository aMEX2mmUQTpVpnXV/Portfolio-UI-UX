import Carousel from "react-bootstrap/Carousel";
import slide1 from "./assets/interface/Start_Screen.png";
import slide2 from "./assets/interface/Selection_Screen.png";
import slide3 from "./assets/interface/Purchase_Screen.png";

function InterfaceCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <Carousel.Caption style={styles.carouselHeader}>
          <div>Start Screen</div>
        </Carousel.Caption>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption style={styles.carouselCaption}>
          <p>
            The first screen that appears is a starting screen. Although it
            doesn't have much text, it is a very important screen because it
            tells the user that the machine is not currently in use!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption style={styles.carouselHeader}>
          <div>Selection Screen</div>
        </Carousel.Caption>
        <img className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption style={styles.carouselCaption}>
          <p>
            The next screen we are brought to is the selection screen. Here you
            can choose from a wide variety of teas, juices and food items. Each
            card shows the price and the number of customers who purchased the
            item as well!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption style={styles.carouselHeader}>
          <div>Purchase Screen</div>
        </Carousel.Caption>
        <img className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption style={styles.carouselCaption}>
          <p>
            We are then brought to the purchase screen which is quite
            straightforward. The details of your purchase are listed and you can
            make adjustments to your drink so that it is best suited to your
            tastes!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

const styles = {
  carouselHeader: {
    position: "relative",
    left: "auto",
    right: "auto",
    color: "black",
    fontSize: "2.5em",
    fontWeight: "bold",
  },
  carouselCaption: {
    position: "relative",
    left: "auto",
    right: "auto",
  },
};

export default InterfaceCarousel;
