import { Button, Container } from "react-bootstrap";
import { Chip } from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import moment from "moment";
import { IQuery } from "../../../../interfaces/singleQuery";
import "../adminlisting.style.css";
import { useMutation } from "@tanstack/react-query";
import { deleteQueryMutation } from "../../../../mutations";
import { toast } from "react-toastify";

export const SingleQueryListing: React.FC<any> = (props: IQuery): ReactElement => {
  const { mutate, isSuccess, error, data, isLoading } = useMutation({
    mutationFn: (id: string) => deleteQueryMutation(id),
    onSuccess: (data) => {
      toast.success("Query was deleted from database!");
      props.queryClient.invalidateQueries(["queries"]);
    },
    onError: (error: any) => {
        console.log("Error => ", error);
    },
  });

  function handleOnClick(e: any) {
    if (!navigator.onLine) toast.error("You are not connected to n/w")
    e.preventDefault();
    mutate(String(e.target.id));
  }

  return (
    <Container className="listing-container" id={props._id}>
      <div>
        <h4 className="listing-headline"> User Details </h4>
        <div className="user-detail-single">
          <div>
            <span className="txt-bold">Name:</span> {props.name}
          </div>
          <div>
            <span className="txt-bold">Email</span>: {props.email}
          </div>
          <div>
            <span className="txt-bold">Contact</span>: {props.phn}
          </div>
        </div>
      </div>
      <hr />
      <div>
        <h4 className="listing-headline"> Query Details</h4>
        <div className="query-detail-single">
          <div className="single-textf">
            <span className="txt-bold"> ID </span>: {props._id}
          </div>
          <div className="single-textf">
            <span className="txt-bold">Created At </span>: {moment(props.createdAt).format("DD/MMMM/YYYY")}
          </div>
          <div className="single-textf">
            <span className="txt-bold">travelersCount </span>: {props.travelersCount}
          </div>
          <div className="single-textf">
            <span className="txt-bold">Budget </span>: {props.budget}{" "}
          </div>

          <div className="single-textf">
            <span className="txt-bold">Countries :</span>
            <div>
              {props.countries.map((eachCountry: string) => (
                <Chip clickable label={eachCountry} />
              ))}
            </div>
          </div>

          <div className="single-textf">
            <span className="txt-bold">Intrests :</span>
            <div className="single-textf">
              {props.intrests.map((eachIntrest: string) => (
                <Chip clickable label={eachIntrest} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="trash-btn">
        <Button variant="danger" onClick={handleOnClick} id={props._id}>
          Delete Query
        </Button>
      </div>
    </Container>
  );
};
