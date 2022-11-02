import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppRouter } from "./router";
import { AppTheme } from "./theme/AppTheme";
import { store } from "./store";

export const GreenplaceApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <AppRouter />
          <NavBar />
        </AppTheme>
      </BrowserRouter>
    </Provider>
  );
};
