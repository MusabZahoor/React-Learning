import Product from "../product/Product";
import "../product/Product.css";
const Kids = () => {
  let kidProducts = [
    {
      id: 1,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/5/0/50378jcks_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2",
      name: "RUST KAMEEZ SHALWAR",
      newPrice: "PKR 4,290.00",
      originalPrice: "PKR 5,290.00",
    },
    {
      id: 2,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/4/6/46764_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2",
      name: "BLUE KAMEEZ SHALWAR",
      newPrice: "PKR 4,290.00",
      originalPrice: "PKR 5,290.00",
    },
    {
      id: 3,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/3/9/39379jcks_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2",
      name: "GREEN KAMEEZ SHALWAR",
      newPrice: "PKR 4,290.00",
      originalPrice: "PKR 5,290.00",
    },
  ];
  return (
    <>
      <h1 className="heading">Kids Products</h1>
      <div className="productContainer">
        {kidProducts.map((product) => (
          <Product
            image={product.image}
            name={product.name}
            newPrice={product.newPrice}
            originalPrice={product.originalPrice}
          />
        ))}
      </div>
    </>
  );
};
export default Kids;
