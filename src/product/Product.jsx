import "./Product.css";
const Product = (props) => {
  return (
    <>
      <div className="productCard">
        <img src={props.image} alt="image of product" className="img" />
        <h3 className="name">{props.name}</h3>
        <p className="newPrice">{props.newPrice}</p>
        <p className="origPrice">
          <del>{props.originalPrice}</del>
        </p>
      </div>
    </>
  );
};
export default Product;
