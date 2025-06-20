// src/routes/AppRoutes.jsx
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PosePage from "../pages/PosePage";
import PowerPage from "../pages/PowerPage";
import RestorativePage from "../pages/RestorativePage";
import SequencePage from "../pages/SequencePage";
import YinPage from "../pages/YinPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posepage" element={<PosePage />} />
      <Route path="/powerpage" element={<PowerPage />} />
      <Route path="/restorativepage" element={<RestorativePage />} />
      <Route path="/yinpage" element={<YinPage />} />
      <Route path="/sequencepage" element={<SequencePage />} />
    </Routes>
  );
};

export default AppRoutes;