import ProductCard from "../ProductCard/ProductCard";
import style from "./styles.module.css";

const ProductCardGrid = ({ products, addToCart }) => (
  <div>
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}  addToCart={addToCart}/>
      ))}
    </div>
  </div>
);
export default ProductCardGrid;
