import Hero from "../../components/Hero/Hero";
import Moonphase from "../../components/Moonphase/Moonphase";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const Home = ({hero})=>{
   return (
    <div>
         <Moonphase/>
        <Hero hero={hero}/>
        
        
        </div>
        
   );
}

export default Home;