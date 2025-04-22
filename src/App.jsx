import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';


import Shop from "./Shop";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop/:id" element={<Shop />} />
      </Routes>
    </>
  );
};

export default App;
