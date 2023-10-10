import { useContext, useState } from "react";
import { ProductContext } from "../layout/Main";
import Product from "./Product";
import { addToDb } from "../utils/fackdb";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const products = useContext(ProductContext);

  const handleAddToCart = (product) => {
    const exist = cart.find((existProduct) => existProduct.id === product.id);

    if (exist) {
      const rest = cart.filter(
        (existProduct) => existProduct.id !== product.id
      );
      exist.quantity = exist.quantity + 1;
      setCart([...rest, product]);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }

    addToDb(product.id);
  };

  console.log(cart);
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
