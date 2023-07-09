import { ToastContainer } from "react-toastify";
import { Alert } from "react-bootstrap";

export const AlertComponent = ({ variant, message }: { variant: string; message: string }) => {
  return (
    <Alert dismissible style={{ position: "absolute", top: "100px", right: "20px" }} variant={variant}>
      {message}
    </Alert>
  );
};
