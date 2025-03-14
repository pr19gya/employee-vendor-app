import React from "react";
import { Alert } from "react-bootstrap";


export default function Alerts(props) {
    const {message, hidden} = props;
    return (
      <div hidden={hidden}>
        <div className="alert alert-success" role="alert">
          {message}
          {/* <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button> */}
        </div>
      </div>
    )
}
