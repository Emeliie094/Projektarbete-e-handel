import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid.js";
import { useState } from "react";
import style from "./shop.module.css"
import PageFooter from "../../components/PageFooter/PageFooter"


const Shop = ({ products, addToCart, Popup }) => {

  return (
    <div>
      <div className={style.heading}>
      <h1>All products</h1>
      </div>

      <ProductCardGrid products={products} addToCart={addToCart} Popup={Popup} />
      <PageFooter/>
    </div>
  );
};

export default Shop;
