import React, { ReactElement, RefObject, useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useMutation } from "@tanstack/react-query";
import "./admindash.style.css";
import { adminLoginMutation } from "../../../mutations";
import { toast } from "react-toastify";
import { AlertComponent } from "../../Alert/Alert";
import { useNavigate } from "react-router-dom";

export const AdminDash: React.FC<any> = (): ReactElement => {
  const usernameRef: RefObject<any> = useRef("");
  const passwordRef: RefObject<any> = useRef("");
  const navigate = useNavigate();
  const { isLoading, mutate, error } = useMutation({
    mutationFn: (data: any) => adminLoginMutation(data),
    onSuccess: (res: any) => {
      // success
      if (res.data) {
        localStorage.setItem("isAdmin", "true");
        toast.success(res.data.message);
        navigate("/admin/listing", {});
      } else if (res.response.data.success === false) {
        toast.error(res.response.data.message);
      }
    },
    onError: (error: any) => {
      console.log("Error = ", error);
    },
  });
  function handleSubmit(e: any) {
    if (!navigator.onLine) {
      return <AlertComponent variant="warning" heading="Something went wrong on your end" message="Seems you are offline" resolver="Refresh after connecting to the internet ..." />;
    }
    e.preventDefault();
    mutate({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
  }

  if (isLoading) {
    return <h1>Loading .....</h1>;
  }
  if (error) {
    <h3>{error}</h3>;
  }
  return (
    <Container className="admin-form-container">
      <h2>Admin Sign-In</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter username" ref={usernameRef} />
          <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>

        <Button variant="dark" type="button" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  );
};
