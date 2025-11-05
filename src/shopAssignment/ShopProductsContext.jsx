import React, { createContext, useState } from "react";

export const ShopProductsContext = createContext();

export const ShopProductsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
 
  const womenProducts = [
    {
      id: 1,
      img: "https://www.junaidjamshed.com/media/catalog/product/a/n/ank-011-b_-_copy.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "BLACK KHADDI TROUSERS",
      salePrice: "PKR 1,445.00",
      originalPrice: "PKR 2,445.00",
    },
    {
      id: 2,
      img: "https://www.junaidjamshed.com/media/catalog/product/2/5/25-525-11111.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "LEMON PRINTED LAWN SHALWAR",
      salePrice: "PKR 2,090.00",
      originalPrice: "PKR 3,090.00",
    },
    {
      id: 3,
      img: "https://www.junaidjamshed.com/media/catalog/product/2/5/25-524-11111.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "MAROON PRINTED LAWN TROUSERS",
      salePrice: "PKR 1,990.00",
      originalPrice: "PKR 2,990.00",
    },
  ];

  const menProducts = [
    {
      id: 1,
      img: "https://www.junaidjamshed.com/media/catalog/product/5/0/50197_4_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "CREAM COTTON FORMAL KURTA",
      salePrice: "PKR 7,490.00",
      originalPrice: "PKR 9,490.00",
    },
    {
      id: 2,
      img: "https://www.junaidjamshed.com/media/catalog/product/3/3/33684_2_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "MAROON COTTON SEMI-FORMAL KURTA",
      salePrice: "PKR 4,990.00",
      originalPrice: "PKR 5,990.00",
    },
    {
      id: 3,
      img: "https://www.junaidjamshed.com/media/catalog/product/4/6/46905jjk_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=300&width=240&canvas=240:300&dpr=2",
      name: "NAVY BLUE SEMI-FORMAL KURTA",
      salePrice: "PKR 3,690.00",
      originalPrice: "PKR 4,690.00",
    },
  ];

  const kidsProducts = [
    {
      id: 1,
      img: "https://www.junaidjamshed.com/media/catalog/product/5/0/50378jcks_3_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2",
      name: "RUST KAMEEZ SHALWAR",
      salePrice: "PKR 4,290.00",
      originalPrice: "PKR 5,290.00",
    },
    {
      id: 2,
      img: "https://www.junaidjamshed.com/media/catalog/product/4/6/46764_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2",
      name: "BLUE KAMEEZ SHALWAR",
      salePrice: "PKR 4,290.00",
      originalPrice: "PKR 5,290.00",
    },
    {
      id: 3,
      img: "https://www.junaidjamshed.com/media/catalog/product/3/9/39379jcks_1_.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=755&width=589&canvas=589:755&dpr=2",
      name: "GREEN KAMEEZ SHALWAR",
      salePrice: "PKR 4,290.00",
      originalPrice: "PKR 5,290.00",
    },
  ];
  
 const addToCart = (product) => {
    
    setCart((prevCart)=>{
        const existingItem = prevCart.find((item)=>item.id === product.id);
        if(existingItem){
            return prevCart.map((item)=>item.id===product.id?{...item,quantity:item.quantity +1}:item)
        }else{
            return[...prevCart,{...product,quantity:1}]
        }
    });
  };

  const [user, setUser]=useState({name: "ABC", isLoggedIn : false})
  const checkUser =()=>{
    setUser({name: "ABC", isLoggedIn : true})
  }
 const logout=()=>{
    setUser({name: "ABC", isLoggedIn : false})
 }
  return (
    <ShopProductsContext.Provider
      value={{
        womenProducts,
        menProducts,
        kidsProducts,
        addToCart,
        cart,
        setCart,
        user,
        checkUser,
        logout
      }}
    >
      {children}
    </ShopProductsContext.Provider>
  );
};
