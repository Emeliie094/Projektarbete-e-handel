
import Hero from "../../components/Hero/Hero";
import Moonphase from "../../components/Moonphase/Moonphase";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
// import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const Home = ({hero,currentMoon,filterHero,relatedProducts,products}) => {
   console.log(products);

   return (
      <div>
         <Moonphase filterHero={filterHero} currentMoon={currentMoon} relatedProducts={relatedProducts}/>
         <Hero hero={hero}/>
         <ProductCarousel products={products}/>
      </div>     
   );
};

export default Home;