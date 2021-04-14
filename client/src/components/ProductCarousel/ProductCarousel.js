import style from "./ProductCarousel.module.css";
import Slider from "infinite-react-carousel";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";


const settings = {
  autoplay: true,
  centerMode: true,
  dots: true,
  duration: 300,
  slidesToShow: 2,
};

const ProductCarousel = ({ products, addToCart }) => {
  
  return (
    products.length > 0 &&
    <div className={style.container} addToCart={addToCart} >
    <Slider {...settings}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </Slider>
  </div>
  );

};

export default ProductCarousel;
