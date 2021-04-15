import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid.js";
import { useState } from "react";
import style from "./shop.module.css"
import PageFooter from "../../components/PageFooter/PageFooter"


const Shop = ({ products, addToCart }) => {

  return (
    <div>
      <div className={style.heading}>
      <h1>All products</h1>
      </div>

<<<<<<< HEAD
      <ProductCardGrid products={products} addToCart={addToCart} Popup={Popup} />
=======
      <ProductCardGrid products={products} addToCart={addToCart}  />
      <PageFooter/>
>>>>>>> bcac06f71a7c8c767ae2c979b8f68a09afba33cb
    </div>
  );
};

export default Shop;
