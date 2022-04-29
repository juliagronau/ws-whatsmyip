import React from "react";
import { Map, Marker } from "pigeon-maps";

const MyMap = ({ userLocation: { lat, lng } }) => {
  return (
    <div>
      <Map height={300} defaultCenter={[lat, lng]} defaultZoom={12}>
        <Marker width={50} anchor={[lat, lng]} />
      </Map>
    </div>
  );
};

export default MyMap;
