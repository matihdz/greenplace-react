import { LinearProgress, Typography, Box } from "@mui/material";

export const LinearProgressWithLabel = (props) => {
  const { value, ...other } = props;
  return (
    <Box width="100%" display="flex" alignItems="center">
      <Box width="100%" mr={3}>
        <LinearProgress variant="determinate" value={value} {...other} />
      </Box>
      <Box minWidth={35}>
        <Typography
          variant="body2"
          color="text"
          fontWeight={"bold"}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
};
