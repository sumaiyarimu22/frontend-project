export const addTodb = (id) => {
  let shoppingCart = {};

  const localStroageData = localStorage.getItem("shopping-cart");
  if (localStroageData) {
    shoppingCart = JSON.parse(localStroageData);
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export const removeDb = (id) => {
  const getData = localStorage.getItem("shopping-cart");
  if (getData) {
    const storeData = JSON.parse(getData);
    if (id in storeData) {
      delete storeData[id];
      localStorage.setItem("shopping-cart", JSON.stringify(storeData));
    }
  }
};

export const deleteShoppingCart = () => {
  localStorage.clear("shoppig-cart");
};
