import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import cart_icon from "../../assets/Assets/Frontend_Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <p className="logo-text">Indavo</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => handleClick("shop")}
          className={activeMenu === "shop" ? "underline active" : "underline"}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Shop</span>
          </Link>
        </li>
        <li
          onClick={() => handleClick("men")}
          className={activeMenu === "men" ? "underline active" : "underline"}
        >
          <Link to="/mens" style={{ textDecoration: "none" }}>
            <span>Men</span>
          </Link>
        </li>
        <li
          onClick={() => handleClick("women")}
          className={activeMenu === "women" ? "underline active" : "underline"}
        >
          <Link to="/womens" style={{ textDecoration: "none" }}>
            <span>Women</span>
          </Link>
        </li>
        <li
          onClick={() => handleClick("kids")}
          className={activeMenu === "kids" ? "underline active" : "underline"}
        >
          <Link to="/kids" style={{ textDecoration: "none" }}>
            <span>Kids</span>
          </Link>
        </li>
      </ul>
      <div className="nav-cart">
        <div className="nav-cart-icon-container">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <img src={cart_icon} alt="Cart" className="nav-cart-icon" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <button className="login-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
