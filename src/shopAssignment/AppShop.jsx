import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ShopProductsContext, ShopProductsProvider } from "./ShopProductsContext";
import ShopHeader from "./ShopHeader";
import WomenShop from "./WomenShop";
import MenShop from "./MenShop";
import KidsShop from './KidsShop';


import "./AppShop.css";
import Cart from "./Cart";

const AppShop = () => {
    const {user , checkUser, logout}=useContext(ShopProductsContext)
  return (
   
      <Router>
        <h1>welcome {user.isLoggedIn ? user.name : "Guest"}</h1>
        {
            user.isLoggedIn? (<>
                <button onClick={logout} className="danger">Logout</button>
                </>) :(
                <>
                <button onClick={checkUser}>Login</button>
                </>
            )
        }
{
    user.isLoggedIn && (
        <>
                <ShopHeader />

        
        <Routes>
          <Route path="/" element={<Navigate to="/women-shop" />} />
          <Route path="/women-shop" element={<WomenShop />} />
          <Route path="/men-shop" element={<MenShop />} />
          <Route path="/kids-shop" element={<KidsShop />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </>
    )
}
      </Router>
   
  );
};

export default AppShop;
