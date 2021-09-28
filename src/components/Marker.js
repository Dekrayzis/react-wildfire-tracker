import React from "react";
import LocationIcon from "@iconify/icons-mdi/fire-alert";
import { Icon } from "@iconify/react";

const Marker = ({ onClick }) => {
  return (
    <div className="locationMarker" onClick={onClick}>
      <Icon icon={LocationIcon} className="location-icon" />
    </div>
  );
};

export default Marker;
