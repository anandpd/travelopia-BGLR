import React, { ReactElement, useState } from "react";
import "./adminlisting.style.css";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAdminQueriesMutation } from "../../../mutations";
import { toast } from "react-toastify";
import { SingleQueryListing } from "./SingleQuery/SingleQuery";
import { IQuery } from "../../../interfaces/singleQuery";
import { AlertComponent } from "../../Alert/Alert";

export const AdminListing: React.FC<any> = (): ReactElement => {
  // localStorage.setItem("isAdmin", "true");
  const [response, setRes] = useState({ success: null, message: "", data: [] });
  const client = useQueryClient();
  const { isLoading, isError, error } = useQuery({
    queryKey: ["queries"],
    retry: 1,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    queryFn: () => getAdminQueriesMutation(),
    onSuccess: (res) => {
      console.log("Success = ", res);
      if (res?.code === "ERR_NETWORK") {
        toast.error("Something went wrong on server or maybe server is down!");
        // @ts-ignore
        setRes({ success: false, message: "SERVER_ERR", data: [] });
      }
      if (res.data?.success === true) {
        // toast.success(res.data.message);
        setRes(res.data);
      }
    },
    onError: (err) => {
      console.log("Erro => ",err);
    },
  });

  if (!navigator.onLine) {
    return <AlertComponent variant="warning" heading="Something went wrong on your end" message="Seems you are offline" resolver="Refresh after connecting to the internet ..." />;
  }
  if (isLoading) return <h1>Loading ....</h1>;
  if (isError) return <h1>Error : {JSON.stringify(error)}</h1>;
  if (response.message === "SERVER_ERR") {
    return (
      <AlertComponent variant="danger" heading="Something went wrong !" resolver="Please contact Developer to resolve the same" message="Something went wrong on server or maybe server is down." />
    );
  }

  return (
    <React.Fragment>
      {response.data.map((eachObj: IQuery) => (
        <SingleQueryListing
          name={eachObj.name}
          email={eachObj.email}
          phn={eachObj.phn}
          createdAt={eachObj.createdAt}
          travelersCount={eachObj.travelersCount}
          budget={eachObj.budget}
          countries={eachObj.countries}
          intrests={eachObj.intrests}
          queryClient={client}
          _id={eachObj._id}
        />
      ))}
    </React.Fragment>
  );
};
