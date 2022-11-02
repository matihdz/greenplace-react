import {
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

export const LevelBenefitsCard = ({
  level = "Nivel 1",
  benefits = [],
  isCurrent = false,
}) => {
  return (
    <Card sx={{ width: 345, mt: 2, mb: 1 }}>
      <CardContent
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {isCurrent && (
          <Chip
            label={"Actual"}
            color={"primary"}
            size={"small"}
            variant="outlined"
          />
        )}
        <Typography gutterBottom variant="h6" component="div">
          {level}
        </Typography>
        <List>
          {benefits.map(({ id, label, description }) => (
            <ListItem key={id}>
              <ListItemText
                primary={label}
                secondary={description ? description : null}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
