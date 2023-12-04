import "./Carrousel.css";
import slide1 from "./Carrousel_Images/slide1.png";
import slide2 from "./Carrousel_Images/slide2.png";
import slide3 from "./Carrousel_Images/slide3.png";

import Carousel from "react-bootstrap/Carousel";

function Carrousel() {
  return (
    <Carousel className="carousel">
      <Carousel.Item>
        <img className="carouselImage" src={slide1} alt="First slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselImage" src={slide2} alt="Second slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carouselImage" src={slide3} alt="Third slide" />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel;
