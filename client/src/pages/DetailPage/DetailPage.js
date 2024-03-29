import { useParams } from "react-router-dom";
import style from "./DetailPage.module.css"
import DetailCard from "./DetailCard/DetailCard"
import { NavLink } from 'react-router-dom';
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel"
import { useHistory } from 'react-router-dom';
import PageFooter from "../../components/PageFooter/PageFooter"

const DetailsPage = ({  products, addToCart  }) => {
  const history = useHistory()
  
  return (
    <div>
      <div className={style.container}>
        {/* <button className={style.button} onClick={() => {
        history.goBack()
   }}>Go back to all products</button> */}
        </div>
        <DetailCard products={products} addToCart={addToCart} />
        <h1 className={style.h1}>You might also like...</h1>
        <ProductCarousel products={products} addToCart={addToCart}/>
        <div className={style.container}>
        <button className={style.button} onClick={() => {
        history.goBack()
   }}>Go back to all products</button>
        </div>
        </div>
        
  );
};

export default DetailsPage;