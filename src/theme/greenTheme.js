import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const greenTheme = createTheme({
  palette: {
    primary: {
      main: "#39A388",
    },
    secondary: {
      main: "#FFFD95",
    },
    tertiary: {
      main: "#28262C",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#30453f",
    },
    background: {
      default: "#39A388",
    },
    /* background: {
      default: "#39A388",
    }, */
  },
});
