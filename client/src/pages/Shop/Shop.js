import ProductCardGrid from "../../components/ProductCardGrid/ProductCardGrid.js";
import Popup from "../../components/PopUpCart/PopUpCart"
import { useState } from "react";

const Shop = ({products})=>{
    
    // const [buttonPopup, setButtonPopup] = useState()

    return (
     <div>
         <h1>Shop</h1>
         <h1>**FILTER**</h1>
         
        <ProductCardGrid products={products} />
        {/* <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup> */}

         </div>
    );
    }
 
 
 export default Shop;