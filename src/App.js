import React from "react";
import { Home } from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./components/Constants/Register";
import { Login } from "./components/Constants/Login";
import { LogOut } from "./components/Constants/LogOut";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/LogOut" element={<LogOut />} />
    </Routes>
  </BrowserRouter>
);

export default App;
