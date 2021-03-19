import ProductCard from "../ProductCard/ProductCard";
import style from "./styles.module.css";

const ProductCardGrid = ({ products }) => (
  <div>
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);
export default ProductCardGrid;
