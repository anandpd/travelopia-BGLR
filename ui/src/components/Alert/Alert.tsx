
import { Alert, Container } from "react-bootstrap";
import React, { ReactElement } from "react";

export const AlertComponent: React.FC<any> = ({ variant, heading, message, resolver }: any): ReactElement => {
  return (
    <Container style={{ margin: "1%" }}>
      <Alert variant={variant}>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{message}</p>
        <hr />
        <p className="mb-0">{resolver}</p>
      </Alert>
    </Container>
  );
};
