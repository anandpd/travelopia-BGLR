import React, { ReactElement } from "react";
import "./header.style.css";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { CarouselComponent } from "../Carousel/Carousel";

export const Header: React.FC = (props: any): ReactElement => {
  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brandname-txt">
              enchanting <span className="header-travels-txt">Travels</span>
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link className="nav-link-home">Home</Nav.Link>
            {/* <Nav.Link disabled>Features</Nav.Link> */}
            <Nav.Item className="navbar-text align-right navbar-right nav-helper-txt">Private tailor-made journeys of a lifetime</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
