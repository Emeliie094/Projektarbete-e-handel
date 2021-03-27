import ProductCheckout from "../../components/ProductCheckout/ProductCheckout"

const Cart = ({products, cart, setCart})=>{
    console.log(cart)
    return (
     <div>
         <h1>Cart</h1>
         <ProductCheckout  products={products} cart={cart} setCart={setCart}/>
         </div>
         
    )}
 
 export default Cart;