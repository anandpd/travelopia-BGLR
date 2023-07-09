import { Button, Container } from "react-bootstrap";
import { Chip } from "@mui/material";
import React, { ReactElement, useEffect } from "react";
import moment from "moment";
import { IQuery } from "../../../../interfaces/singleQuery";
import "../adminlisting.style.css";

export const SingleQueryListing: React.FC<any> = (props: IQuery): ReactElement => {
  useEffect(() => {
    console.log("Single Listing re-rendred !!");
  });
  return (
    <Container className="listing-container">
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
            <span className="txt-bold"> ID </span>: 64aa8c2f2f898a75bfe5d671
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
        <Button variant="danger">Delete Query</Button>
      </div>
    </Container>
  );
};
