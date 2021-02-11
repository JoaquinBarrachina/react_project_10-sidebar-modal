import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";

import { AppContext, useGlobalContext } from "../context";

const Home = () => {
  //bring methods from the global app context created in context.js
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Show modal
      </button>
    </main>
  );
};

export default Home;
