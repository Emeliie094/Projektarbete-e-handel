
import Hero from "../../components/Hero/Hero";
import Moonphase from "../../components/Moonphase/Moonphase";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import styles from "./Home.module.css";
// import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";

const Home = ({hero,currentMoon,filterHero,relatedProducts,products}) => {
   console.log(products);

   return (
      <div  >
         <div className={styles.wrapper}>
            <div>
               <Moonphase filterHero={filterHero} currentMoon={currentMoon} relatedProducts={relatedProducts}/>           
            </div>
            <div>
               <h2>Related moon rituals:</h2>
               <Hero hero={hero}/>
            </div>
         </div>
         <h2>Related products:</h2>
         <ProductCarousel products={products}/>
         <button>See all products in our shop</button>
      </div>     
   );
};

export default Home;