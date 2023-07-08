import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.style.css";
import { ICarouselItem } from "../../interfaces/carousel.interface";

export const CarouselComponent = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const carouselData: Array<ICarouselItem> = [
    {
      source: "https://images.unsplash.com/photo-1549737525-45c81177eef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      key: "1",
    },
    {
      source: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      key: "2",
    },
    {
      source: "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      key: "3",
    },
  ];
  return (
    <>
      <div className="main-txt">
        <h2 className="carousel-text main-text">We Care, So You Can Travel Carefree</h2>
        <p className="carousel-text">Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations.</p>
      </div>

      <Carousel activeIndex={index} onSelect={handleSelect} className="carousel-main">
        {carouselData.map((Item) => (
          <Carousel.Item className="carousel-main">
            <img className="d-block w-100 item" src={Item.source} alt={Item.key} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};
