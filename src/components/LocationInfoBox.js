import React from "react";
import moment from "moment";

const LocationInfoBox = ({ info }) => {

  const infoDate = moment.parseZone(info.date);
  const formatDate = () => `${infoDate.format('dddd Do MMM YYYY')} @ ${infoDate.format('HH:mm:ss')}`;
    
  return (
    <div className="location-info">
      <h2>Fire event info</h2>
      <ul>
        <li>
          Title: &nbsp;<a href={info.link}
            rel="noreferrer"
            target="_blank"><strong>{info.title}</strong></a> 
        </li>
        <li>
          Date Reported: &nbsp;
          <strong>{formatDate()}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
