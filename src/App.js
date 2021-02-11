import React from "react";
import "./App.css";

//Components
import Home from "./components/Home";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <React.Fragment>
      <Home />
      <Modal />
      <Sidebar />
    </React.Fragment>
  );
}

export default App;
