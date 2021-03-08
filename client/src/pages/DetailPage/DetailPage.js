import { useParams } from "react-router-dom";
import style from "./DetailPage.module.css"
import DetailCard from "./DetailCard/DetailCard"
import { NavLink } from 'react-router-dom';
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel"
import { useHistory } from 'react-router-dom';

const DetailsPage = ({ products }) => {
  const history = useHistory()
  
  return (
    <div>
      <div className={style.container}>
        <button className={style.button} onClick={() => {
        history.goBack()
   }}>Go back to all products</button>
        </div>
        <DetailCard products={products}/>
        <h1 className={style.h1}>You might also like...</h1>
        <ProductCarousel products={products}/>
        <div className={style.container}>
        <button className={style.button} onClick={() => {
        history.goBack()
   }}>Go back to all products</button>
        </div>
        </div>
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