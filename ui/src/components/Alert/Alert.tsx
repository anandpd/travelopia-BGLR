import { ToastContainer } from "react-toastify";
import { Alert } from "react-bootstrap";
import React, { ReactElement } from "react";

export const AlertComponent:React.FC<any> = ({ variant, message }: { variant: string; message: string }): ReactElement => {
  return (
    <Alert dismissible style={{ position: "absolute", top: "100px", right: "20px" }} variant={variant}>
      {message}
    </Alert>
  );
};
