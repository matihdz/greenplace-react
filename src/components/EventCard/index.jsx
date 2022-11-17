import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

export const EventCard = ({
  title = "",
  description = "",
  datetime = "",
  location = "",
}) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ width: 345, mt: 2, mb: 2 }}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Button variant="contained" sx={{ mt: 3, mb: 2, maxWidth: 345 }} className={'event-tour-step-1'}>
              Voy a ir!
            </Button>
            <Typography variant="body2" color="text.secondary">
              {datetime + " | " + location}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};
