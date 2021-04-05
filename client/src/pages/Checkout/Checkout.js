import ProductCheckout from "../../components/ProductCheckout/ProductCheckout";

const Cart = ({removeFromCart, cart }) => {
  console.log(cart);
  return (
    <div>
      <h1>Cart</h1>
      <ProductCheckout removeFromCart={removeFromCart} cart={cart} />
    </div>
  );
};

export default Cart;
