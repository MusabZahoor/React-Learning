import Product from "../product/Product";
import "../product/Product.css";
const Men = () => {
  let menProducts = [
    {
      id: 1,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/5/0/50197_4_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "CREAM COTTON FORMAL KURTA",
      newPrice: "PKR 7,490.00",
      originalPrice: "PKR 9,490.00",
    },
    {
      id: 2,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/3/3/33684_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "MAROON COTTON SEMI-FORMAL KURTA",
      newPrice: "PKR 4,990.00",
      originalPrice: "PKR 5,990.00",
    },
    {
      id: 3,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/4/6/46905jjk_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "NAVY BLUE SEMI-FORMAL KURTA",
      newPrice: "PKR 3,690.00",
      originalPrice: "PKR 4,690.00",
    },
  ];
  return (
    <>
      <h1 className="heading">Men Products</h1>
      <div className="productContainer">
        {menProducts.map((product) => (
          <Product
            id={product.id}
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
export default Men;
