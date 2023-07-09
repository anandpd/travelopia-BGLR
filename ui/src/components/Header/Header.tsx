// CSS
import "./header.style.css";

// React hooks
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

// UI components
import { Navbar, Container, Nav } from "react-bootstrap";

export const Header: React.FC = (props: any): ReactElement => {
  return (
    <React.Fragment>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brandname-txt">
              enchanting <span className="header-travels-txt">Travels</span>
            </Link>
          </Navbar.Brand>

          <Nav className="me-auto">
            
              <Nav.Link className="nav-link-home"> <Link to="/" className="nav-home-txt">Home</Link></Nav.Link>

            <Nav.Item className="navbar-text align-right navbar-right nav-helper-txt">Private tailor-made journeys of a lifetime</Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
