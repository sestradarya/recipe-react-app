import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cuisine } from "./Cuisine";
import Home from "./Home";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
