"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

function Map() {
  return (
    <>
      <MapContainer
        scrollWheelZoom={false}
        className="h-[50vh] rounded-lg relative z-0"
        center={[40.5, -0.5]}
        zoom={14}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.github.com/shpetimaliu">ShpetimAliu</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </>
  );
}

export default Map;
