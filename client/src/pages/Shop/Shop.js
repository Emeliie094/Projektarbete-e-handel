import ProductCard from "../../components/ProductCard/ProductCard.js";
import "../../components/ProductCard/ProductCard.css";

const Shop = ({products})=>{
    return (
     <div>
         <h1>Shop</h1>
         <h1>**FILTER**</h1>
         
        <ProductCard products={products}/>
         </div>
    );
    }
 
 
 export default Shop;