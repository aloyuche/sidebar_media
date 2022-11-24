import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChristianMuz from "./components/ChristianMuz";
import Dashboard from "./components/Dashboard";
import JazMuz from "./components/JazMuz";
import Raggae from "./components/Raggae";
import SideBar from "./components/SideBar";

const App = () => {
  return (
    <BrowserRouter>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/christianmuz" element={<ChristianMuz />} />
          <Route path="/jazmuz" element={<JazMuz />} />
          <Route path="/raggae" element={<Raggae />} />
        </Routes>
      </SideBar>
    </BrowserRouter>
  );
};

export default App;
