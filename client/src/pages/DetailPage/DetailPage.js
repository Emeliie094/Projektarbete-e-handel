import { useParams } from "react-router-dom";
// import "./DetailPage.css";
import DetailCard from "./DetailCard/DetailCard"
import { NavLink } from 'react-router-dom';

const DetailsPage = ({ products }) => {

  
  return (
        <DetailCard products={products}/>
  );
};

export default DetailsPage;

    // <div>
    //   <div class="product-container">
    //     <div class="img-container">
    //       <img src={product.imageUrl} alt="{product.name}" />
    //     </div>
    //     <h3>{product.name}</h3>
    //     <h4>{product.price} KR</h4>
    //     <p>{product.description}</p>
    //   </div>
    // </div>