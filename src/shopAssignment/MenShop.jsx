import React, { useContext } from "react";
import { ShopProductsContext } from "./ShopProductsContext";
import ShopProductCard from "./ShopProductCard";
import "./ShopPages.css";

const MenShop = () => {
  const { menProducts } = useContext(ShopProductsContext);
  return (
    <div className="shop-grid">
      {menProducts.map((p) => (
        <ShopProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default MenShop;
 