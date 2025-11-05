import React, { useContext } from "react";
import { ShopProductsContext } from "./ShopProductsContext";
import ShopProductCard from "./ShopProductCard";
import "./ShopPages.css";

const WomenShop = () => {
  const { womenProducts } = useContext(ShopProductsContext);
  return (
    <div className="shop-grid">
      {womenProducts.map((p) => (
        <ShopProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default WomenShop;
