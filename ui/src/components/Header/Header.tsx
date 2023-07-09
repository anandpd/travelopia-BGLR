// CSS
import "./header.style.css";

// React hooks
import React, { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";

// UI components
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { toast } from "react-toastify";

export const Header: React.FC = (props: any): ReactElement => {
  const navigate = useNavigate();

  function handleAdminAction(e: any) {
    e.preventDefault();
    if (localStorage.getItem("isAdmin") != null) {
      console.log("Logging out !!");
      localStorage.removeItem("isAdmin");
      navigate("/");
      toast.success("Logged out successfuly!");
    } else {
      console.log("Going to login !!");
      navigate("/admin");
    }
  }
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
            <Nav.Link className="nav-link-home">
              {" "}
              <Link to="/" className="nav-home-txt">
                Home
              </Link>
            </Nav.Link>

            <Nav.Item className="navbar-text align-right navbar-right nav-helper-txt">Private tailor-made journeys of a lifetime</Nav.Item>
          </Nav>

          <Button onClick={handleAdminAction} variant="dark" className="logout-btn">
            {localStorage.getItem("isAdmin") != null ? "Logout as Admin" : "Login as Admin"}
          </Button>
        </Container>
      </Navbar>
    </React.Fragment>
  );
};
