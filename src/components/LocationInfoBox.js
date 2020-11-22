import React from "react";
import moment from "moment";

const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event location info</h2>
      <ul>
        <li>
          ID: &nbsp;<strong>{info.id}</strong>
        </li>
        <li>
          Title: &nbsp;<strong>{info.title}</strong>
        </li>
        <li>
          Date: &nbsp;
          <strong>{info.date}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
