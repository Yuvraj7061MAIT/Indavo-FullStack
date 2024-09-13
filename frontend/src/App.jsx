import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCatogery from "./Pages/ShopCatogery";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Login from "./Components/Login/Login";
import SignIn from "./Components/Login/SignIn"; // Import the SignIn component

// Banner images
import woman from "./assets/Assets/Frontend_Assets/banner_women.png";
import kid from "./assets/Assets/Frontend_Assets/banner_kids.png";
import man from "./assets/Assets/Frontend_Assets/banner_kids.png";
import NewsLetter from "./Components/NewsLetter/NewsLetter";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCatogery banner={man} category="men" />} />
        <Route path="/womens" element={<ShopCatogery banner={woman} category="women" />} />
        <Route path="/kids" element={<ShopCatogery banner={kid} category="kid" />} />
        <Route path="/product/:productID" element={<Product />} /> {/* Corrected route for product */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <NewsLetter />
    </BrowserRouter>
  );
}

export default App;
