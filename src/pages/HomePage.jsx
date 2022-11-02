import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import { SearchGoogleMaps } from "../components/SearchGoogleMaps";
import { Map } from "../map";

export const HomePage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <SearchGoogleMaps />
      {isLoaded && <Map />}
    </>
  );
};
