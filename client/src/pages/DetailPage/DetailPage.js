import { useParams } from "react-router-dom";
import "./DetailPage.css";

const DetailsPage = ({ products }) => {
  const { id } = useParams();

  const product = products.find((product) => product.id == id);

  return (
    <div>
      <div class="product-container">
        <div class="img-container">
          <img src={product.imageUrl} alt="{product.name}" />
        </div>
        <h3>{product.name}</h3>
        <h4>{product.price} KR</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default DetailsPage;
