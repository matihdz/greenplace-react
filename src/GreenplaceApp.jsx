import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppRouter } from "./router";
import { AppTheme } from "./theme/AppTheme";
import { useTour } from "./hooks/useTour";

export const GreenplaceApp = () => {
  const tour = useTour();
  return (
    <BrowserRouter>
      <AppTheme>
        {tour}
        <AppRouter />
        <NavBar />
      </AppTheme>
    </BrowserRouter>
  );
};
