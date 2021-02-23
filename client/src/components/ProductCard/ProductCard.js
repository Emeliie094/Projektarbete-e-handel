import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ products }) => (
  <div className="product-card-flex">
    {products.map((product) => (
      <div className="wrapper">
        <div className="container">
          <Link className="text-link" to={`/products/${product.id}`}>
            <div className="top">
              <img src={product.imageUrl} />
            </div>
          </Link>
          <div className="bottom">
            <div className="left">
              <div className="details">
                <Link className="text-link" to={`/products/${product.id}`}>
                  <h4>{product.name}</h4>
                  <p>{product.price} KR</p>
                </Link>
              </div>
              <div className="buy">
                <button className="add-to-cart">
                  <i className="fas fa-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="inside">
          <div className="icon">
            <i className="fas fa-info-circle"></i>
          </div>
          <div className="contents">
            <div className="text">
              <h5>{product.moon} {product.zodiac}</h5><br/>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default ProductCard;
