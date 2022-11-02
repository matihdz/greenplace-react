import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { InfoPage } from "../pages/InfoPage";
import { ProfilePage } from "../pages/ProfilePage";
import { EventsPage } from "../pages/EventsPage";

export const GreenplaceRoutes = () => {
  return (
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="info" element={<InfoPage />} />
      <Route path="events" element={<EventsPage />} />
      <Route path="profile" element={<ProfilePage />} />

      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
