import { getStoreCartData } from "./fackdb";

const productAndCartData = async () => {
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  const localStorageData = getStoreCartData();

  const initialCart = [];
  for (const id in localStorageData) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = localStorageData[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }

  return { products, initialCart };
};

export default productAndCartData;
