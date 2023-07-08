import React, { ReactElement } from "react";
import { CarouselComponent } from "../Carousel/Carousel";
import { FormSelectComponent } from "../Form/Form";
import { Container } from "react-bootstrap";
import { formSelectionData } from "../../utils/data/Formselection";
import { carouselData } from "../../utils/data/carousel";
import { Footer } from "../../components";

export const Home: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <CarouselComponent carouselData={carouselData} />
      <Container>
        <FormSelectComponent formSelectionData={formSelectionData} />
      </Container>
      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  );
};
