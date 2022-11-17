import { GoogleMap, MarkerF, DirectionsRenderer } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import "./styles.css";

export const Map = () => {
  /* States */
  const [currentLocation, setCurrentLocation] = useState();
  const [greenpoints, setGreenpoints] = useState([
    { lat: -33.00990906255701, lng: -71.54381557840145 },
    { lat: -33.00671636316352, lng: -71.55056391461453 },
    { lat: -33.0379593818336, lng: -71.58280626030785 },
    { lat: -33.0105434618489, lng: -71.54637619557768 },
  ]);

  const [bounds, setBounds] = useState(null);
  /* ------- */
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  /* Scripts */
  const onMapLoad = (map) => {
    google.maps.event.addListener(map, "bounds_changed", () =>
      setBounds({ bounds: map.getBounds() })
    );
  };

  const calculateRoute = async () => {
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: new google.maps.LatLng(currentLocation.lat, currentLocation.lng),
      destination: new google.maps.LatLng(
        greenpoints[0].lat,
        greenpoints[0].lng
      ),
      travelMode: google.maps.TravelMode.WALKING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  };

  const calculateCurrentLocation = async () => {
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setCurrentLocation({ lat, lng });
      }
    );
  };

  useEffect(() => {
    calculateCurrentLocation();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      calculateRoute();
    }
  }, [currentLocation]);

  return (
    <>
      <GoogleMap
        onLoad={onMapLoad}
        zoom={14}
        center={currentLocation}
        mapContainerClassName="map-container"
      >
        {currentLocation && (
          <span>
            <MarkerF
              position={currentLocation}
              icon={{
                url: require("../assets/svg/person.svg"),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          </span>
        )}
        {greenpoints &&
          greenpoints.map((marker) => (
            <MarkerF
              key={marker?.lat + marker?.lng}
              position={{ lat: marker?.lat, lng: marker?.lng }}
              icon={{
                url: require("../assets/svg/trash.svg"),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
        {directionsResponse && (
          <DirectionsRenderer
            directions={directionsResponse}
            options={{
              polylineOptions: {
                strokeColor: "#000",
              },
              suppressMarkers: true,
            }}
          />
        )}
      </GoogleMap>
    </>
  );
};
