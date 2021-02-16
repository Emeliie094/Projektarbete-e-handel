import ProductCard from "../../components/ProductCard/ProductCard.js";

const Shop = ({products})=>(
     <div>
         <h1>Shop</h1>
       <ProductCard products={products}/>
        
         </div>
    );
 
 
 export default Shop;