import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./feature/components/navigation/Navbar";
import { Shop } from "./feature/pages/products/shop";
import { ContactUsPage } from "./feature/pages/contact/ContactUsPage";
import { AboutUsPage } from "./feature/pages/about/about";
import { AppFooter } from "./feature/components/footer/AppFooter";
import { ShopContextProvider } from "./feature/context/shop-context";
import { HomePage } from "./feature/pages/home/HomePage";
import Cookies from "universal-cookie";
// import { Cart } from "./feature/pages/cart/cart";
import "./App.css";
import { Cart } from "./feature/pages/cart/Cart";

function App() {
  const cookies = new Cookies();
  const [cookieAccepted, setCookieAccepted] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cookieAccepted = cookies.get("cookieAccepted");
    if (!cookieAccepted) {
      cookies.set("cookieAccepted", "true", { path: "/" });
      setCookieAccepted(true);
    } else {
      setCookieAccepted(true);
    }

    const savedCartItems = cookies.get("cartItems");
    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  const addToCart = (productId) => {
    const updatedCartItems = [...cartItems, productId];
    setCartItems(updatedCartItems);
    cookies.set("cartItems", updatedCartItems, { path: "/" });
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item !== productId);
    setCartItems(updatedCartItems);
    cookies.set("cartItems", updatedCartItems, { path: "/" });
  };

  return (
    <div className="App">
      <div style={{ flex: "1" }}>
        {cookieAccepted && (
          <ShopContextProvider value={{ cartItems, addToCart, removeFromCart }}>
            <div
              style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Router>
                <Navbar />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<Shop />} />
                  <Route path="/about-us" element={<AboutUsPage />} />
                  <Route path="/contact" element={<ContactUsPage />} />
                  <Route path="/cart" element={<Cart />} />
                  {/* <Cart/> */}
                </Routes>
              </Router>
            </div>
            <AppFooter />
          </ShopContextProvider>
        )}
      </div>
    </div>
  );
}

export default App;
