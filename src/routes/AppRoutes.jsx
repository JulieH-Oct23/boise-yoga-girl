// src/routes/AppRoutes.jsx
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PosePage from "../pages/PosePage";
import PowerPage from "../pages/PowerPage";
import PowerPage1 from "../pages/PowerPage1";
import PowerPage2 from "../pages/PowerPage2";
import RestorativePage from "../pages/RestorativePage";
import RestorativePage1 from "../pages/RestorativePage1";
import RestorativePage2 from "../pages/RestorativePage2";
import SequencePage from "../pages/SequencePage";
import YinPage from "../pages/YinPage";
import YinPage1 from "../pages/YinPage1";
import YinPage2 from "../pages/YinPage2";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posepage" element={<PosePage />} />
      <Route path="/powerpage" element={<PowerPage />} />
      <Route path="/powerpage/hips" element={<PowerPage1 />} />
      <Route path="/powerpage/core" element={<PowerPage2 />} />
      <Route path="/restorativepage" element={<RestorativePage />} />
      <Route path="/restorativepage/sequence1" element={<RestorativePage1 />} />
      <Route path="/restorativepage/sequence2" element={<RestorativePage2 />} />
      <Route path="/yinpage" element={<YinPage />} />
      <Route path="/yinpage/sequence1" element={<YinPage1 />} />
      <Route path="/yinpage/sequence2" element={<YinPage2 />} />
      <Route path="/sequencepage" element={<SequencePage />} />
    </Routes>
  );
};

export default AppRoutes;