import React, { ReactElement, useEffect, useState } from "react";
import "./adminlisting.style.css";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { getAdminQueriesMutation } from "../../../mutations";
import { toast } from "react-toastify";
import { SingleQueryListing } from "./SingleQuery/SingleQuery";
import { IQuery } from "../../../interfaces/singleQuery";
import { AlertComponent } from "../../Alert/Alert";

export const AdminListing: React.FC<any> = (): ReactElement => {
  const [response, setRes] = useState({ success: null, message: "", data: [] });

  const { isLoading, isError, error } = useQuery({
    queryKey: ["queries"],
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryFn: () => getAdminQueriesMutation(),
    onSuccess: (res) => {
      if (res?.code == "ERR_NETWORK") {
        toast.error("Something went wrong on server or maybe server is down!");
        // @ts-ignore
        setRes({ success: false, message: "SERVER_ERR", data: [] });
      }
      if (res.data?.success == true) {
        toast.success(res.data.message);
        setRes(res.data);
      }
      console.log("Success = ", res);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  if (!navigator.onLine) {
    return <AlertComponent variant="warning" heading="Something went wrong on your end" message="Seems you are offline" resolver="Refresh after connecting to the internet ..." />;
  }
  if (isLoading) return <h1>Loading ....</h1>;
  if (isError) return <h1>Error : {JSON.stringify(error)}</h1>;
  if (response.message == "SERVER_ERR") {
    return <AlertComponent variant="danger" heading="Something went wrong !" resolver="Please contact Developer to resolve the same" message="Something went wrong on server or maybe server is down." />;
  }

  return (
    <React.Fragment>
      {response.data.map((eachObj: IQuery) => (
        <SingleQueryListing
          name="Anand"
          email="anand@yopmail.com"
          phn="8569890580"
          createdAt="2023-07-09T10:30:07.476Z"
          travelersCount="2"
          budget="Rs 10000+"
          countries={eachObj.countries}
          intrests={eachObj.intrests}
        />
      ))}
    </React.Fragment>
  );
};
