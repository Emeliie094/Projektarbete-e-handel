import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid.js";
import style from "./shop.module.css"




const Shop = ({ products, addToCart }) => {

  return (
    <div>
      <div className={style.heading}>
      <h1>All products</h1>
      </div>

      <ProductCardGrid products={products} addToCart={addToCart}  />
    </div>
  );
};

export default Shop;
