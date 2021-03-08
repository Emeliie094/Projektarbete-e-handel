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

const ProductCarousel = ({ products }) => (
  <div className={style.container}>
    <Slider {...settings}>
      {products.map((product) => (
          <div className={style.wrapper}>
        <img
          className={style.image}
          src={product.imageUrl}
          alt={product.name}
        />
        <h3>{product.name}</h3>
        <h2>{product.price} KR</h2>
        </div>
      ))}
    </Slider>
  </div>
);

export default ProductCarousel;
