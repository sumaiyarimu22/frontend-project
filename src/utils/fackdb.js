const addToDb = (id) => {
  let shoppingCart = {};

  shoppingCart[id] = 1;

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  //add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

//get data from the localStorage
const getStoreCartData = () => {
  let storeData = {};
  //set products cart
  const localStoreData = localStorage.getItem("shopping-cart");

  if (localStoreData) {
    storeData = JSON.parse(localStoreData);
  }

  return storeData;
};

export { addToDb, getStoreCartData };
