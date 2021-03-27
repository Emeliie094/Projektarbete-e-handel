import ProductCard from "../ProductCard/ProductCard";
import style from "./styles.module.css";

const ProductCardGrid = ({ products, setButtonPopup,cart,setCart }) => (
  <div>
    <div className={style.wrapper}>
      {products.map((product) => (
        <ProductCard product={product} setButtonPopup={setButtonPopup} cart={cart} setCart={setCart}/>
      ))}
    </div>
  </div>
);
export default ProductCardGrid;
