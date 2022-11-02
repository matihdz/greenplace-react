import { Avatar, Box, Typography } from "@mui/material";
import { levels } from "../apis/levelsApi";
import { LevelBenefitsCard } from "../components/LevelBenefitsCard";
import { LinearProgressWithLabel } from "../components/LinearProgressWithLabel";

const avatarSize = 75;

export const ProfilePage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
      <Avatar sx={{ width: avatarSize, height: avatarSize }} />
      <Typography
        marginTop={2}
        marginBottom={4}
        fontWeight={"bold"}
        variant={"h6"}
      >
        John Doe
      </Typography>
      <LinearProgressWithLabel value={51} color={"tertiary"} />
      {levels.map((level) => (
        <LevelBenefitsCard
          key={level.id}
          level={level.label}
          benefits={level.benefits}
          isCurrent={level.id === 1}
        />
      ))}
    </Box>
  );
};
