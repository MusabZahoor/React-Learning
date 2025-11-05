import React, { useContext } from "react";
import { ShopProductsContext } from "./ShopProductsContext";

const Cart = () => {
  const { cart } = useContext(ShopProductsContext);
  
  return (
    <h1>
      {
        cart.length===0 ? "No Items in the cart" : cart.map((p)=> <p>{p.name} {p.quantity}</p>)
      }
    
    </h1>
  );
};

export default Cart;
