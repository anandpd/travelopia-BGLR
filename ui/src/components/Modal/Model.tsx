// CSS
import "./modal.style.css";

// React hooks
import React, { ReactElement, useState } from "react";

// UI components
import { Button, Modal, Form, Alert } from "react-bootstrap";
import { toast } from "react-toastify";

//Mutations
import { useMutation } from "@tanstack/react-query";
import { postQueryMutation } from "../../mutations";

// interfaces
import { IAxiosResponse } from "../../interfaces/axios.interface";
import { IMutationData } from "../../interfaces/form.select.interface";
import { IModalProps } from "../../interfaces/mutations.interface";

export const ModalComponent: React.FC<any> = (props: IModalProps): ReactElement => {
  function clearInput() {
    const { stateProps } = props;
    setState({
      name: "",
      email: "",
      phn: "",
    });
    stateProps.setPlaces([]);
    stateProps.setIntrests([]);
    stateProps.setBudget("");
    stateProps.setCount("");
  }
  function handleSucces(res: any) {
    if (res?.data) {
      props.handleClose();
      clearInput();
      toast.success(res.data.message);
    } else if (res.code === "ERR_NETWORK") {
      props.handleClose();
      toast.error("OOps :( Something went wrong on server or maybe server is down.");
    } else {
      toast.error(res.response.data.message);
    }
  }
  const { isLoading, mutate } = useMutation({
    mutationFn: (data: IMutationData) => postQueryMutation(data),
    onSuccess: (res: any) => handleSucces(res),
    onError: (err: IAxiosResponse) => {
      console.log("Error = ", err);
    },
  });

  const [state, setState] = useState({
    name: "",
    email: "",
    phn: "",
  });
  function handleSubmit(e: any) {
    if (!navigator.onLine) {
      props.handleClose();
      return toast.error("You are not connected to n/w");
    }
    e.preventDefault();

    mutate({
      countries: props.stateProps.places,
      intrests: props.stateProps.intrests,
      travelersCount: props.stateProps.count,
      budget: props.stateProps.budget,
      name: state.name,
      email: state.email,
      phn: state.phn,
    });
  }

  return (
    <>
      {isLoading ? (
        <Alert variant="warning" className="loading-alert">
          <Alert.Heading>Retrieving Data</Alert.Heading>
          <p>Loading Please wait....</p>
        </Alert>
      ) : (
        <>
          <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Submit your details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} type="email" placeholder="name@example.com" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} placeholder="Enter name" autoFocus type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Phn No.</Form.Label>
                  <Form.Control value={state.phn} onChange={(e) => setState({ ...state, phn: e.target.value })} placeholder="Enter Phn No" autoFocus type="number" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={props.handleClose}>
                Close
              </Button>
              <Button variant="dark" disabled={isLoading} onClick={handleSubmit}>
                Go on! Submit my info
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};
