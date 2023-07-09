// React hooks
import React, { ReactElement } from "react";

// Components
import { Footer, InfoText, FormSelectComponent, CarouselComponent } from "../../components";

// UI components
import { Container } from "react-bootstrap";

// Util Funs.
import { formSelectionData } from "../../utils/data/Formselection";
import { carouselData } from "../../utils/data/carousel";


export const Home: React.FC = (): ReactElement => {
  return (
    <React.Fragment>
      <CarouselComponent carouselData={carouselData} />
      <Container>
        <FormSelectComponent formSelectionData={formSelectionData} />
        <InfoText />
      </Container>
        <Footer />
    </React.Fragment>
  );
};
