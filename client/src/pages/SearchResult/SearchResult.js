// import ProductCard from '../../components/ProductCard/ProductCard';
import ProductCardGrid from '../../components/ProductCardGrid/ProductCardGrid';

const SearchResult = ({searchResult})=>{

    return (
        <div>
            
            <ProductCardGrid products={searchResult}/>
        </div>
        
    );
};

export default SearchResult;