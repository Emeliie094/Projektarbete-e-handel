import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid.js";

const Shop = ({products})=>{
    return (
     <div>
         <h1>Shop</h1>
         <h1>**FILTER**</h1>
         
        <ProductCardGrid products={products}/>
         </div>
    );
    }
 
 
 export default Shop;