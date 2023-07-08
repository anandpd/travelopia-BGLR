import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.style.css";
import { ICarouselDataProps, ICarouselItem } from "../../interfaces/carousel.interface";

export const CarouselComponent = ({ carouselData }: ICarouselDataProps) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="main-txt">
        <h2 className="carousel-text main-text">We Care, So You Can Travel Carefree</h2>
        <p className="carousel-text">Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations.</p>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-main">
        {carouselData.map((Item) => (
          <Carousel.Item className="carousel-main" key={Item.key}>
            <img className="d-block w-100 item" src={Item.source} alt={Item.key} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
