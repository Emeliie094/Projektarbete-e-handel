import ProductCard from "../ProductCard/ProductCard";
import style from "./styles.module.css";

const ProductCardFlex = ({ products }) => (
  <div>
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  </div>
);
export default ProductCardFlex;
