import Hero from "../../components/Hero/Hero";
import Moonphase from "../../components/Moonphase/Moonphase";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const Home = ({filterHero, products, hero})=>{

   return (
    <div>
         <Moonphase products={products} filterHero={filterHero}/>
         {/* <Hero hero={hero}/> */}
         {/* <ProductCarousel/> */}
        
        
        </div>
        
   );
}

export default Home;