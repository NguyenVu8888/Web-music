import { Routes, Route } from "react-router-dom";

import "./App.css";
import LoginRegister from "./component/Pages/LoginRegister";
import HomePage from "./component/Pages/HomePage";
import KhamPhaPage from "./component/Pages/KhamPha";
import ZingChartPage from "./component/Pages/ZingChart";
import RadioPage from "./component/Pages/Radio";
import NhacMoiPage from "./component/Pages/NhacMoi";
import TheLoaiPage from "./component/Pages/TheLoai";
import MVPage from "./component/Pages/MV";
import Admin from "./component/Pages/Admin";
import Layout from "./component/Layout";
import MVDetail from "./component/Pages/MVDetail";
import DetailAlbum from "./component/elements/DetailAlbum";
import Slide from "./component/elements/Slide";

function App() {
  return (
    //  <Slide />
    // <DetailAlbum />
    // <Admin />
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route path="/Home" element={<HomePage />} />
          <Route index element={<KhamPhaPage />} />
          <Route path="/ZingChart" element={<ZingChartPage />} />
          <Route path="/Radio" element={<RadioPage />} />
          <Route path="/NhacMoi" element={<NhacMoiPage />} />
          <Route path="/TheLoai" element={<TheLoaiPage />} />
          <Route path="/MV" element={<MVPage />} />
          <Route path="/Album" element={<DetailAlbum />} />
        </Route>
        <Route path="/Login" element={<LoginRegister />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/MVDetail" element={<MVDetail />} />
      </Routes>
    </>
  );
}

export default App;
