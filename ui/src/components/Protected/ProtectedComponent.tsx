import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const Protected: React.FC<any> = ({ isAdminToken, children }: { isAdminToken: string; children: any }): ReactElement => {
  if (!isAdminToken || isAdminToken === "false") {
    toast.error("You are not authorized")
    return <Navigate to="/" replace />;
  }
  return children;
};
export { Protected };
