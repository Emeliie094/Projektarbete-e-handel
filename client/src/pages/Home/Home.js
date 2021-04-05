import Hero from "../../components/Hero/Hero";
import Moonphase from "../../components/Moonphase/Moonphase";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const Home = ({hero, products})=>{
   return (
    <div>
         <Moonphase products={products}/>
         <Hero hero={hero}/>
         {/* <ProductCarousel/> */}
        
        
        </div>
        
   );
}

export default Home;