import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";
import "./routenotfound.style.css";
import { Link } from "react-router-dom";

export const RouteNotFound: React.FC<any> = (): ReactElement => {
  return (
    // <div className="txt-404">
      <Container className="container-404">
        <div>
          <h2> Let's Get Lost !!  but not here ...</h2>
        </div>
        <div>
              Click on  <Link to="/"> Home </Link> to get back
        </div>
      </Container>
    // </div>
  );
};
