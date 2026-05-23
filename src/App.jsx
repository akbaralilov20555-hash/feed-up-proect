import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Aloqa from "./pages/Aloqa";
import BizHaqimizda from "./pages/BizHaqimizda";
import Filiallar from "./pages/Filiallar";
import Home from "./pages/Home";
import IshOrinlari from "./pages/IshOrinlari";
import Menyu from "./pages/Menyu";

export default function App() {
  return (
    <React.Fragment>
      <Header />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/aloqa" element={<Aloqa />} />
        <Route path="/bizhaqimizda" element={<BizHaqimizda />} />
        <Route path="/filiallar" element={<Filiallar />} />
        <Route path="/ishorinlari" element={<IshOrinlari />} />
        <Route path="/menyu" element={<Menyu />} />
      </Routes>

      <Footer />
    </React.Fragment>
  );
}
