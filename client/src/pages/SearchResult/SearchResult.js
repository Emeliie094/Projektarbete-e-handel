// import ProductCard from '../../components/ProductCard/ProductCard';
import ProductCardGrid from '../../components/ProductCardGrid/ProductCardGrid';
import style from "./searchResult.module.css"
import PageFooter from "../../components/PageFooter/PageFooter"

const SearchResult = ({searchResult, addToCart})=>{

    return (
        <div>
            <div className={style.heading}>
      <h1>Search result</h1>
      </div>
<<<<<<< HEAD
            <ProductCardGrid products={searchResult}/>
=======
            <ProductCardGrid products={searchResult} addToCart={addToCart}/>
            <PageFooter/>
>>>>>>> bcac06f71a7c8c767ae2c979b8f68a09afba33cb
        </div>
        
    );
};

export default SearchResult;