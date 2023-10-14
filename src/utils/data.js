export const productAndCartData = async () => {
  const data = await fetch("products.json");
  const products = await data.json();

  const getLocalStroageData = localStorage.getItem("shopping-cart");
  const storeData = JSON.parse(getLocalStroageData);

  let initialProduct = [];

  for (const id in storeData) {
    const foundProduct = products.find((product) => product.id === id);
    if (foundProduct) {
      const quantity = storeData[id];
      foundProduct.quantity = quantity;
      initialProduct.push(foundProduct);
    }
  }

  return { products, initialProduct };
};
