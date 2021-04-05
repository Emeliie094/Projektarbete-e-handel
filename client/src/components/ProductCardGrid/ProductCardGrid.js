import ProductCard from "../ProductCard/ProductCard";
import style from "./styles.module.css";

const ProductCardGrid = ({ products, addToCart, Popup }) => (
  <div>
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} Popup={Popup} addToCart={addToCart}/>
      ))}
    </div>
  </div>
);
export default ProductCardGrid;
