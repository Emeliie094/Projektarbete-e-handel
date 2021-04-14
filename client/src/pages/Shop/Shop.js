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

      <ProductCardGrid products={products} addToCart={addToCart}  />
      <PageFooter/>
    </div>
  );
};

export default Shop;
