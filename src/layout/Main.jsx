import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext } from "react";

export const ProductContext = createContext();

const Main = () => {
  const products = useLoaderData();

  return (
    <ProductContext.Provider value={products}>
      <Navbar />
      <Outlet />
      <Footer />
    </ProductContext.Provider>
  );
};

export default Main;
