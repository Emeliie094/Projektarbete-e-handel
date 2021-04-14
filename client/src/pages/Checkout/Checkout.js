import ProductCheckout from "../../components/ProductCheckout/ProductCheckout";
import style from "./checkout.module.css"
import PageFooter from "../../components/PageFooter/PageFooter"

const Cart = ({removeFromCart, cart }) => {
  console.log(cart);
  return (
    <div>
      <div className={style.heading}>
      <h1>Checkout</h1>
      </div>
      <ProductCheckout removeFromCart={removeFromCart} cart={cart} />
    </div>
  );
};

export default Cart;
