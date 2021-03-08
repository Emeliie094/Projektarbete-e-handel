import style from "./DetailCard.module.css"
import { useParams } from "react-router-dom";
import { NavLink } from 'react-router-dom';


const DetailCard = ({products})=> {

    const { id } = useParams();

  const product = products.find((product) => product.id == id);

    return (
        <div>
        {/* <NavLink className={style.linkBack} to="/shop">← Go back to all products</NavLink> */}
        <div className={style.wrapper}>
    <div className={style.productImg}>
      <img src={product.imageUrl}/>
    </div>
    <div className={style.productInfo}>
      <div className={style.productText}>
        <h1>{product.name}</h1>
        <h2>Lorem ipsum dolor</h2>
        <p>{product.description}</p>
      </div>
      <div className={style.productPriceBtn}>
        <p><span>{product.price}</span>kr</p>
        <button type="button">buy now</button>
      </div>
    </div>
  </div>
  </div>
    )
}

export default DetailCard