import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const Protected: React.FC<any> = (props: any): ReactElement => {
  if (props.isAdminToken == null || props.isAdminToken === "false") {
    toast.error("You are not authorized");
    return <Navigate to="/" replace />;
  }
  return props.children;
};
export { Protected };
