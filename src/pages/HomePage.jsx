import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import { SearchGoogleMaps } from "../components/SearchGoogleMaps";
import { Map } from "../map";

export const HomePage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBC6xje6H66fNkxleDZDNPqRfzalXSi5ck",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <SearchGoogleMaps />
      {isLoaded && <Map />}
    </>
  );
};
