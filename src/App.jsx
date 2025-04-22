import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import "bootstrap/dist/css/bootstrap.min.css";

import Shop from "./Shop";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/shop/:id" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
