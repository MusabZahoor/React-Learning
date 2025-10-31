import { useState } from "react";
import "./Product.css";
const Product = (props) => {
  let [showBtn, setShowBtn] = useState(false);
  return (
    <>
      <div className="productCard">
        <img src={props.image} alt="image of product" className="img" />
        <h3 className="name">{props.name}</h3>
        <button className="button" onClick={() => setShowBtn(!showBtn)}>
          {showBtn ? "Hide price" : "Show price"}
        </button>
        {showBtn && (
          <p className="newPrice">
            {props.newPrice} <br />
            <del className="origPrice">{props.originalPrice}</del>
          </p>
        )}
      </div>
    </>
  );
};
export default Product;
