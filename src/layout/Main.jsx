import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createContext, useState } from "react";
// import Footer from "../components/Footer";

export const DataProvider = createContext();

const Main = () => {
  const [formData, setFormData] = useState([]);

  const updateFormData = (data) => {
    setFormData([...formData, data]);
  };

  return (
    <DataProvider.Provider value={{ formData, updateFormData }}>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </DataProvider.Provider>
  );
};

export default Main;
