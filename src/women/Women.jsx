import Product from "../product/Product";
import "../product/Product.css";

const Women = () => {
  let womenProduct = [
    {
      id: 1,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/a/n/ank-011-b_-_copy.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "BLACK KHADDI TROUSERS",
      newPrice: "PKR 1,445.00",
      originalPrice: "PKR 2,445.00",
    },
    {
      id: 2,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/2/5/25-525-11111.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "LEMON PRINTED LAWN SHALWAR",
      newPrice: "PKR 2,090.00",
      originalPrice: "PKR 3,090.00",
    },
    {
      id: 3,
      image:
        "https://www.junaidjamshed.com/media/catalog/product/2/5/25-524-11111.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "MAROON PRINTED LAWN TROUSERS",
      newPrice: "PKR 1,990.00",
      originalPrice: "PKR 2,990.00",
    },
  ];
  return (
    <>
      <h1 className="heading">Women Products</h1>
      <div className="productContainer">
        {womenProduct.map((product) => (
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

export default Women;
