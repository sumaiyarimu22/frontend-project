import { useContext } from "react";
import { CartContext, ProductContext } from "../layout/Main";
import Product from "../components/Product";
import { addTodb } from "../utils/fackdb";
import { toast } from "react-toastify";

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);
  const addToCart = (product) => {
    const isExist = cart.find((data) => data.id === product.id);

    if (isExist) {
      const rest = cart.filter((data) => data.id !== product.id);
      isExist.quantity = isExist.quantity + 1;
      setCart([...rest, isExist]);
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }

    addTodb(product.id);
    toast.success("Product added", { autoClose: 500 });
  };

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {products.map((product) => (
          <Product product={product} key={product.id} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
