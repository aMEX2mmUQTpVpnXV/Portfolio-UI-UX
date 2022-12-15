import "./../../App.css";
import React, { useState } from "react";
import NavigationBar from "../navigation/Navbar";
import Space from "../spaceElements/Space";
import { Button } from "react-bootstrap";
import Modal from "./Modal";

function Home() {
  const [openModal, setOpenModal] = useState(true);
  const toggleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const heart = "<3";

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <div style={{ display: "flex", maxHeight: "100vh", overflow: "hidden" }}>
        <Space toggleOpenModal={toggleOpenModal}></Space>
        <Modal toggleOpenModal={toggleOpenModal} open={openModal}></Modal>
      </div>
    </div>
  );
}

export default Home;
