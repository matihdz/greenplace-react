import { Box } from "@mui/material";
import { useLoadScript } from "@react-google-maps/api";
import { SearchGoogleMaps } from "../components/SearchGoogleMaps";
import { Map } from "../map";

export const HomePage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  return (
    <Box>
      <div className="home-tour-step-1">
        <SearchGoogleMaps />
      </div>
      <div className="home-tour-step-2">{isLoaded && <Map />}</div>
    </Box>
  );
};
