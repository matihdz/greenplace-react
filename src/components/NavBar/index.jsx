import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const NavBar = () => {
  const [pathname, setPathname] = useState("/home");
  const navigate = useNavigate();
  const onNavigationChange = (pathName) =>
    navigate(pathName?.toLowerCase().trim(), { replace: true });

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={pathname}
        onChange={(_, value) => {
          setPathname(value);
          onNavigationChange(value);
        }}
      >
        <BottomNavigationAction
          icon={<LocationOnOutlinedIcon />}
          value={"/home"}
        />
        <BottomNavigationAction icon={<InfoOutlinedIcon />} value={"/info"} />
        <BottomNavigationAction
          icon={<EventOutlinedIcon />}
          value={"/events"}
        />
        <BottomNavigationAction
          icon={<AccountCircleOutlinedIcon />}
          value={"/profile"}
        />
      </BottomNavigation>
    </Paper>
  );
};
