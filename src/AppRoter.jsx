import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../index.css";

import Home from "./page/home";
import Login from "./page/login";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
