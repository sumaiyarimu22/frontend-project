import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

export const ProductContext = createContext();
export const CartContext = createContext();

const Main = () => {
  const { products, initialProduct } = useLoaderData();
  const [cart, setCart] = useState(initialProduct);

  return (
    <ProductContext.Provider value={products}>
      <CartContext.Provider value={[cart, setCart]}>
        <Navbar />
        <Outlet />
        <Footer />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Main;
