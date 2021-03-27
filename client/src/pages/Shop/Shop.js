import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid.js";
import Popup from "../../components/PopUpCart/PopUpCart";
import { useState } from "react";

const Shop = ({ products, cart, setCart }) => {
  return (
    <div>
      <h1>Shop</h1>
      <h1>**FILTER**</h1>

      <ProductCardGrid products={products} cart={cart} setCart={setCart} />
    </div>
  );
};

export default Shop;
