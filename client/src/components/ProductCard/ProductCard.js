import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({products}) => (
    <div class="product-card-flex">

{products.map((product) => (
      <Link className="text-link" to={`/products/${product.id}`}>
        <div class="product-card">
    <div class="product-img">
        <img src={product.imageUrl} />
    </div>
    <h4 class="text-center">{product.name}</h4>
    <h5 class="text-center">{product.price} KR</h5>
    <h6 class="text-center">Lorem ipsum</h6>
    </div>
      </Link>
    ))}

  </div>
)
  


export default ProductCard;
