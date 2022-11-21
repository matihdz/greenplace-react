import { Box } from "@mui/material";
import { useLoadScript } from "@react-google-maps/api";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchGoogleMaps } from "../components/SearchGoogleMaps";
import { Map } from "../map";

export const HomePage = () => {
  const route = useSelector((state) => state.route);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });
  console.log(route.steps);
  return (
    <Box>
      {route && (
        <div className="route">
          <span>Distancia restante: {route.distance}</span>
          <span>Tiempo restante: {route.duration}</span>
          {/* {route.steps.map((step) => (
            <div dangerouslySetInnerHTML={{ __html: step.instructions }}></div>
          ))} */}
        </div>
      )}
      <div className="home-tour-step-1">
        <SearchGoogleMaps />
      </div>
      <div className="home-tour-step-2">{isLoaded && <Map />}</div>
    </Box>
  );
};
