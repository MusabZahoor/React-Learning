import React from "react";
import { Link } from "react-router-dom";
import "./ShopHeader.css";

const ShopHeader = () => {
  return (
    <nav className="shop-navbar">
      <Link to="/women-shop">Women</Link>
      <Link to="/men-shop">Men</Link>
      <Link to="/kids-shop">Kids</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
};

export default ShopHeader;
