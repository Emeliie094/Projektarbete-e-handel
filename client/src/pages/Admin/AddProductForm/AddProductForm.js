import {useState} from 'react';
import {useHistory} from "react-router-dom"
import  useStickyState from './hooks/useStickyState';
import styles from './AddProduct.module.css';
import ProductCard from '../../../components/PreviewProductCard/PreviewProductCard';


const AddProductForm = ({onAdd}) => {

    const [openZodiac,setOpenZodiac]=useState(false);
    const [openMoonphase,setOpenMoonphase]=useState(false);
    const [openMoon,setOpenMoon]=useState(false);
    
    const [name, setName] = useStickyState("productForm_name","");
    const [description, setDescription] = useStickyState("productForm_description","");
    const [price, setPrice] = useStickyState("productForm_price","");
    const [imageUrl, setImageUrl] = useStickyState("productForm_imageUrl","");
    const [color, setColor] = useStickyState("productForm_color","");
    const [moonphase,setMoonphase] = useStickyState("productForm_moonphase","");
    const [moon, setMoon] = useStickyState("productForm_moon","");
    const [zodiac, setZodiac] = useStickyState("productForm_zodiac","");

    const history = useHistory()
    
    function handleClick() {
        history.push({
          pathname: "/admin",
        });}
 

    const handleSubmit = (event)=>{
        event.preventDefault();

        const product = {
            name,
            description,
            price,
            imageUrl,
            color,
            moonphase,
            moon,
            zodiac
        }
         
        onAdd(product);

        setName("");
        setDescription("");
        setPrice("");
        setImageUrl("");
        setColor("");
        setMoonphase("");
        setMoon("");
        setZodiac("");

    }

    
    const currentEventHandler = (e) => {

        let values = Array.from(e.currentTarget.selectedOptions, option => option.value);

        if (e.currentTarget.id === "moon"){
            setMoon(values);


        }

        if (e.currentTarget.id === "moonphase"){
            setMoonphase(values); 

        }

        if (e.currentTarget.id === "zodiac"){
            setZodiac(values); 

        }

    
    }


    const openZodiacSelection = ()=>{
        setOpenZodiac(!openZodiac);
    };

    const openMoonphaseSelection = ()=>{
        setOpenMoonphase(!openMoonphase);

    };

    const openMoonSelection = ()=>{
        setOpenMoon(!openMoon);

    };


    function PreviewProduct(){

        const product = {
            name,
            description,
            price,
            imageUrl,
            color,
            moonphase,
            moon,
            zodiac
        }

        return product;
    }

    return (
        <div className={styles.wrapper}>
         
            <form onSubmit={handleSubmit} className={styles.form} >
                <div className={styles.inputFields}>

                    <input
                    type="text"
                    className={styles.input}
                    placeholder="Product name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                
                    <textarea
                    className={styles.textarea}
                    placeholder="Products description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
               
            

                    <input
                    type="text"
                    className={styles.input}
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
            

                    <input
                    type="text"
                    className={styles.input}
                    placeholder="Image"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    />
    
                    <input
                    type="text"
                    className={styles.input}
                    placeholder="Color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    />
                    
                </div>
                
               
                <div className={styles.selectFields}>

                    <div>
                        <label className={styles.zodiac}>Zodiac 
                        <select className={styles.selectZodiac} id="zodiac" multiple={true} onChange= {currentEventHandler} onClick={openZodiacSelection} style={{display: openZodiac ? "block" : ""}}>
                            <option className={styles.option} value="Aries">Aries| March 21-April 19</option>
                            <option className={styles.option}value="Taurus">Taurus | April 20 - May 20</option>
                            <option className={styles.option}value="Gemini">Gemini | May 21 - June 21</option>
                            <option className={styles.option}value="Cancer">Cancer | June 22 - July 22</option>
                            <option className={styles.option}value="Leo">Leo | July 23 - August 22</option>
                            <option className={styles.option}value="Virgo">Virgo | August 23 - September 22</option>
                            <option className={styles.option}value="Libra">Libra | September 23 - Oktober 23</option>
                            <option className={styles.option}value="Scorpius">Scorpius | Oktober 24 - November 21</option>
                            <option className={styles.option}value="Sagittarius">Sagittarius | November 22 - December 21</option>
                            <option className={styles.option}value="Capricornus">Capricornus | December 22 - Januari 19</option>
                            <option className={styles.option}value="Aquarius">Aquarius | January 20 - Februari 18</option>
                            <option className={styles.option}value="Pisces">Pisces| February 19 - March 20</option>
                        </select>
                        </label>    
                    </div>       

                    <div>
                        <label className={styles.moonphase}>Moonphase 
                        <select className={styles.selectMoonphase} id="moonphase"multiple={true} onChange= {currentEventHandler} onClick={openMoonphaseSelection} style={{display: openMoonphase ? "block" : ""}}>
                            <option className={styles.option} value="Last Quarter" >Last Quarter</option>
                            <option className={styles.option}value="Black Moon">New Moon</option>
                            <option className={styles.option}value="First Quarter">First Quarter</option>
                            <option className={styles.option}value="Full moon">Full moon</option>
                        </select>
                        </label>    
                    </div>

                     <div>
                        <label className={styles.moon}>Moon
                        <select className={styles.selectMoon}  id="moon"multiple={true} onChange= {currentEventHandler} onClick={openMoonSelection} style={{display: openMoon ? "block" : ""}}>
                            <option className={styles.option} value="Wolf Moon" >Wolf Moon | Jan 28</option>S
                            <option className={styles.option}value="Snow Moon">Snow Moon | Feb 27</option>
                            <option className={styles.option}value="Worm Moon">Worm Moon | Mar 28</option>
                            <option className={styles.option}value="Pink Moon">Pink Moon | Apr 26</option>
                            <option className={styles.option}value="Flower Moon">Flower Moon | May 26</option>
                            <option className={styles.option}value="Strawberry Moon">Strawberry Moon | Jun 24</option>
                            <option className={styles.option}value="Buck Moon">Buck Moon | Jul 23</option>
                            <option className={styles.option}value="Sturgeon Moon">Sturgeon Moon | Aug 22</option>
                            <option className={styles.option}value="Corn Moon">Corn Moon | Sep 20</option>
                            <option className={styles.option}value="Harvest Moon">Harvest Moon | Oct 20</option>
                            <option className={styles.option}value="Beaver Moon">Beaver Moon | Nov 19</option>
                            <option className={styles.option}value="Cold Moon">Cold Moon | Dec 19</option>
                        </select>
                        </label>    
                    </div> 
                    <div>
                        <button type="submit" className={styles.addBtn}>Add Product</button>
                        <button className={styles.addBtn} onClick={handleClick}>⇦ Back to dashboard</button>
                    </div>             
                  
                </div>
                
                <section className={styles.preview}>
                    <h1>Product preview:</h1>
                    <ProductCard product={PreviewProduct()}/>
                </section>
                
            </form>
            
               
        </div>
    )
}

export default AddProductForm;
