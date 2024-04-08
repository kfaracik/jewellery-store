import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation/Navbar";
import { Shop } from "./pages/products/shop";
import { ContactUsPage } from "./pages/contact/ContactUsPage";
import { Cart } from "./pages/cart/Cart";
import { AboutUsPage } from "./pages/about/about";
import { ShopContextProvider } from "./context/shop-context";
import { AppFooter } from "./components/footer/footer";
import { HomePage } from "./pages/home/HomePage";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
      <ShopContextProvider>
        <div
          style={{
            marginTop: "auto",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ flex: "1", marginBottom: 32 }}>
            <Router>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Shop />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Router>
          </div>
          <AppFooter />
        </div>
      </ShopContextProvider>
    </div>
  );
}

export default App;
