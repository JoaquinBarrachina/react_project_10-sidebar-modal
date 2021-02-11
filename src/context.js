//The whole app is wrapped inside a context, this ease communication among components
import React, { useState, useContext } from "react";

const AppContext = React.createContext();

//{children} are the elements inside the app provider in index.js
const AppProvider = ({ children }) => {
  //Create the context
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom Hook, instead of importing and invoking in every component which needs the app context
//useContext() and AppContext, create this global context ease the importing work

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
