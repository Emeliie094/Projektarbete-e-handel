// import ProductCard from '../../components/ProductCard/ProductCard';
import ProductCardGrid from '../../components/ProductCardGrid/ProductCardGrid';
import style from "./searchResult.module.css"
import PageFooter from "../../components/PageFooter/PageFooter"

const SearchResult = ({searchResult})=>{

    return (
        <div>
            <div className={style.heading}>
      <h1>Search result</h1>
      </div>
            <ProductCardGrid products={searchResult}/>
            <PageFooter/>
        </div>
        
    );
};

export default SearchResult;