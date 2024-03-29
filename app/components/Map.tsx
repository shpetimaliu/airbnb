"use client";

import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { useCountries } from "../lib/getCountries";

const ICON = icon({
  iconUrl:
    "https://static-00.iconduck.com/assets.00/airbnb-fill-logo-icon-1930x2048-wjsgmkiz.png",
  iconSize: [20, 20],
});

function Map({ locationValue }: { locationValue: string }) {
  const { getCountryByValue } = useCountries();
  const latLang = getCountryByValue(locationValue)?.latLang;

  return (
    <>
      <MapContainer
        scrollWheelZoom={false}
        className="h-[50vh] rounded-lg relative z-0"
        center={latLang ?? [40.5, -0.5]}
        zoom={10}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.github.com/shpetimaliu">ShpetimAliu</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={latLang ?? [40.6, -0.5]} icon={ICON} />
      </MapContainer>
    </>
  );
}

export default Map;
