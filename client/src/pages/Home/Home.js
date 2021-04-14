
import Hero from "../../components/Hero/Hero";
import Moonphase from "../../components/Moonphase/Moonphase";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import styles from "./Home.module.css";
import PageFooter from "../../components/PageFooter/PageFooter"
import {useHistory} from "react-router-dom"

const Home = ({hero,currentMoon,filterHero,relatedProducts,products, addToCart}) => {

   const history = useHistory()

   function handleClick() {
      history.push({
        pathname: "/shop",
      });}

   return (
      <div>
         < div className={styles.wrapper}  >
            <div>
               <Moonphase filterHero={filterHero} currentMoon={currentMoon} relatedProducts={relatedProducts}/>           
            </div>
            <div>
               <h2>Related moon rituals:</h2>
               <Hero hero={hero}/>
            </div>
         <h2>Related products:</h2>
          <ProductCarousel products={products} addToCart={addToCart}/>
         
         <div className={styles.buttonContainer}>
         <button className={styles.button} onClick={handleClick}>See all products in our shop</button>

         </div>
         <PageFooter/>
         </div>
      </div>     
   );
};

export default Home;