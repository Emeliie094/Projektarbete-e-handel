import style from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Popup from "../../../components/PopUpCart/PopUpCart";

const DetailCard = ({ products, addToCart, Popup }) => {
  const { id } = useParams();

  const product = products.find((product) => product.id == id);
  

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.productImg}>
          <img src={product.imageUrl} />
        </div>
        <div className={style.productInfo}>
          <div className={style.productText}>
            <h1>{product.name}</h1>
            <h2>Lorem ipsum dolor</h2>
            <p>{product.description}</p>
          </div>
          <div className={style.productPriceBtn}>
            <p>
              <span>{product.price}</span>kr
            </p>
            <button type="button" onClick={() => addToCart(product)}>
              buy now
            </button>
          </div>
        </div>
      </div>
      {Popup}
    </div>
  );
};

export default DetailCard;
