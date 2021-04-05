import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid.js";
import { useState } from "react";

const Shop = ({ products, addToCart, Popup }) => {
  return (
    <div>
      <h1>Shop</h1>
      <h1>**FILTER**</h1>

      <ProductCardGrid products={products} addToCart={addToCart} Popup={Popup} />
    </div>
  );
};

export default Shop;
