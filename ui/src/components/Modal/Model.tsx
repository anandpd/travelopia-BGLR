import React, { ReactElement } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";

export const ModalComponent: React.FC<any> = (props: any): ReactElement => {
  const createPostMutation = useMutation({
    mutationFn: 
  });
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit your details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter name" autoFocus type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Phn No.</Form.Label>
              <Form.Control placeholder="Enter Phn No" autoFocus type="text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={props.handleClose}>
            Submit my info
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
