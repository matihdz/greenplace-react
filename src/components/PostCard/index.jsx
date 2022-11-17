import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const PostCard = ({ title, date, description, image, imageLabel }) => {
  return (
    <Grid item xs={12} md={6} >
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex", width: 345, mt: 2, mb: 2 }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h6">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="primary" className={"info-tour-step-1"}>
              Continuar leyendo...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={image}
            alt={imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default PostCard;
