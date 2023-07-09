import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";


const Protected: React.FC<any> = (props): ReactElement => {
  // const token = localStorage.getItem("isAdmin");
  const token = props.token;
  if (token == null || token === "false") {
    toast.error("You are not authorized");
    return <Navigate to="/" replace />;
  }
  return props.children;
};


export { Protected };
