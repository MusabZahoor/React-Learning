import React, { useContext } from "react";
import "./ShopCard.css";
import { ShopProductsContext } from "./ShopProductsContext";

const ShopProductCard = ({ product }) => {
const {addToCart} = useContext(ShopProductsContext)

  return (
    <div className="shop-card">
      <img src={product.img} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        <span className="shop-sale">${product.salePrice}</span>{" "}
        <span className="shop-original">${product.originalPrice}</span>
      </p>
      <button onClick={()=>{addToCart(product)}}>Add to Cart</button>
    </div>
  );
};

export default ShopProductCard;
