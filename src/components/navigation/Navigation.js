import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Credits from "../pages/Credits";
import RoyalRoad from "../pages/RoyalRoad/src/RoyalRoad";
import Personas from "../pages/Personas/Personas";

export default function Navigation() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/credits" element={<Credits />} />
          <Route exact path="/royal-road" element={<RoyalRoad />} />
          <Route exact path="personas" element={<Personas />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
