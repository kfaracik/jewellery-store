import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import Cookies from "universal-cookie";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const cookies = new Cookies();
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const savedCartItems = cookies.get("cartItems");
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    const updatedCartItems = { ...cartItems, [itemId]: cartItems[itemId] + 1 };
    setCartItems(updatedCartItems);
    cookies.set("cartItems", updatedCartItems, { path: "/" });
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = { ...cartItems, [itemId]: cartItems[itemId] - 1 };
    setCartItems(updatedCartItems);
    cookies.set("cartItems", updatedCartItems, { path: "/" });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    const updatedCartItems = { ...cartItems, [itemId]: newAmount };
    setCartItems(updatedCartItems);
    cookies.set("cartItems", updatedCartItems, { path: "/" });
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
    cookies.remove("cartItems");
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
