import React, { useContext } from "react";
import { ShopProductsContext } from "./ShopProductsContext";
import ShopProductCard from "./ShopProductCard";
import "./ShopPages.css";

const KidsShop = () => {
  const { kidsProducts } = useContext(ShopProductsContext);
  return (
    <div className="shop-grid">
      {kidsProducts.map((p) => (
        <ShopProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default KidsShop;
