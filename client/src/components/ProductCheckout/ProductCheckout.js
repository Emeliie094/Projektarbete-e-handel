import React from "react";
import style from "./styles.module.css";

function ProductCheckout({ cart, setCart }) {
  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <div className={style.wrapper}>
      {cart.map((product) => (
        <div className={style.items}>
          <button
            className={style.removeBtn}
            onClick={() => removeFromCart(product)}
          >
            Remove
          </button>

          <img className={style.productImg} src={product.imageUrl} alt="" />
          <div className={style.itemInfo}>
            <p>{product.name}</p>
            {console.log(product.name)}
            <p>{product.price} KR</p>
          </div>
        </div>
      ))}
      <div className="calcSum">
        <h3>Total cost: </h3>
        <p></p>
      </div>
    </div>
  );
}

export default ProductCheckout;
