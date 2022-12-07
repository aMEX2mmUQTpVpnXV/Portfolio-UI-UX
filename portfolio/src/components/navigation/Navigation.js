import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import NavigationBar from "./Navbar";
export default function Navigation() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

function About() {
  return (
    <div>
      <NavigationBar />
      <h2>About</h2>
    </div>
  );
}
function Credits() {
  return (
    <div>
      <NavigationBar />
      <h2>Credits</h2>
    </div>
  );
}
function Projects() {
  return (
    <div>
      <NavigationBar />
      <h2>Projects</h2>
    </div>
  );
}
