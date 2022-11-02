import { Route, Routes } from "react-router-dom";
import { GreenplaceRoutes } from "./GreenplaceRoutes";
import { AuthRoutes } from "./AuthRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<GreenplaceRoutes />} />
    </Routes>
  );
};
