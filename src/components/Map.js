import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Marker, LocationInfoBox } from "./";

//-- Natural event ids
const NATURAL_EVENT_WILDFIRE = 8;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  // Get all wildfires
  const markers = eventData.map((ev, index) => {
    const geoCoords = ev.geometries[0].coordinates;
    return (
      ev.categories[0].id === NATURAL_EVENT_WILDFIRE && (
        <Marker
          key={index}
          lat={geoCoords[1]}
          lng={geoCoords[0]}
          onClick={() =>
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              date: ev.geometries[0].date,
              link: ev.sources[0].url,
            })
          }
        />
      )
    );
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_API_KEY,
        }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
};

Map.defaultProps = {
  center: { lat: 42.3265, lng: -122.8756 },
  zoom: 6,
};

export default Map;