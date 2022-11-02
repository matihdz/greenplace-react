import { Box } from "@mui/material";
import { events } from "../apis/eventsApi";
import { EventCard } from "../components/EventCard";

export const EventsPage = () => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {events.map((event) => (
        <EventCard key={event?.id} {...event} />
      ))}
    </Box>
  );
};
