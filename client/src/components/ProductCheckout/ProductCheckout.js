import React from "react";
import style from "./styles.module.css";

function ProductCheckout({ cart, removeFromCart }) {
  const total = [];

  return (
    <div className={style.wrapper}>
      {cart.map((product) => (
        <div key={product.id} className={style.items}>
          {total.push(Number(product.price))}
          <button
            className={style.removeBtn}
            onClick={() => removeFromCart(product)}
          >
            Remove
          </button>

          <img className={style.productImg} src={product.imageUrl} alt="" />
          <div className={style.itemInfo}>
            <p>{product.name}</p>

            <p>{product.price} KR</p>
          </div>
        </div>
      ))}
      <div className={style.calcSum}>
        <h3>Total cost: {total.reduce((a, b) => a + b, 0)} KR </h3>
        <p></p>
      </div>
    </div>
  );
}

export default ProductCheckout;
