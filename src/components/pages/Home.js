import "./../../App.css";
import React from "react";
import NavigationBar from "../navigation/Navbar";
import Space from "../spaceElements/Space";

function Home() {
  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <Space></Space>
    </div>
  );
}

export default Home;
