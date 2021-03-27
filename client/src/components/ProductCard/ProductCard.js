import { Link } from "react-router-dom";
import style from "./styles.module.css";
import { useState } from "react";
import Popup from "../PopUpCart/PopUpCart";

const ProductCard = ({ product,cart,setCart }) => {
 
  const [buttonPopup, setButtonPopup] = useState()
  // const [cart, setCart] = useState([])

  //Staten uppdaterars bara om man trycker på det första
  //produktkortet..
  const handleClick = (product)=> {
    setButtonPopup(true)
    setCart([...cart, product]);
  }
  
  
  const addToCart = (product) => {
    setCart([...cart, product]);
    setButtonPopup(true)
  };




  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Link className={style.textLink} to={`/products/${product.id}`}>
          <div className={style.top}>
            <img src={product.imageUrl} />
          </div>
        </Link>
        <div className={style.bottom}>
          <div className={style.left}>
            <div className={style.details}>
              <Link className={style.textLink} to={`/products/${product.id}`}>
                <h4>{product.name}</h4>
                <p>{product.price} KR</p>
              </Link>
            </div>
            <div className={style.buy}>
              <button
                className={style.addToCart}
                // onClick={()=> handleClick()}
                onClick={() => addToCart(product)}
              >
                <i
                  className="fas fa-cart-plus fa-2x"
                  style={{ margin: "33px 15px" }}
                ></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.inside}>
        <div className={style.icon}>
          <i className="fas fa-info-circle fa-2x"></i>
        </div>
        <div className={style.contents}>
          <div className={style.text}>
            <h5>
              {product.moon} {product.zodiac}
            </h5>
            <br />
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
    </div>
  );
};

export default ProductCard;
