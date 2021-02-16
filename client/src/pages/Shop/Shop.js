<<<<<<< HEAD
import ProductCard from "../../components/ProductCard/ProductCard.js";

const Shop = ({products})=>(
     <div>
         <h1>Shop</h1>
       <ProductCard products={products}/>
        
=======
import ProductCard from "../../components/ProductCard/ProductCard.js"
import "../../components/ProductCard/ProductCard.css"

const Shop = ({products})=>{
    return (
     <div>
         <h1>Shop</h1>
         <h1>**FILTER**</h1>
        <ProductCard products={products}/>
>>>>>>> d33f9f198a66bd59be1d5ab1a696b4c1dc8f6a6f
         </div>
    );
 
 
 export default Shop;