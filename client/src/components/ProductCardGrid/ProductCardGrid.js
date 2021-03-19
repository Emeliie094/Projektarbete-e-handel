import ProductCard from "../ProductCard/ProductCard";
import style from "./styles.module.css";

const ProductCardGrid = ({ products, setButtonPopup }) => (
  <div>
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard product={product} setButtonPopup={setButtonPopup}/>
      ))}
    </div>
  </div>
);
export default ProductCardGrid;
