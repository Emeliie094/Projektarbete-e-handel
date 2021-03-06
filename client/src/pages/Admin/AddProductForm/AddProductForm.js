import {useState, useEffect} from 'react';
import styles from './AddProduct.module.css';
import PreviewProductCard from '../../../components/PreviewProductCard/PreviewProductCard';

const AddProductForm = () => {

    const [openZodiac,setOpenZodiac]=useState(false);
    const [openMoonphase,setOpenMoonphase]=useState(false);
    const [openMoon,setOpenMoon]=useState(false);
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [color, setColor] = useState("");
    const [moonphase,setMoonphase] = useState("");
    const [moon, setMoon] = useState("");
    const [zodiac, setZodiac] = useState([]);

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

        console.log(product);

        // onAdd(product); lägg till AddProductForm({onAdd}) och lägg till i App.js
    }


    const handleSelected = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        setZodiac(value);
    }

    const openZodiacSelection = ()=>{
        setOpenZodiac(!openZodiac);
    };

    const openMoonphaseSelection = ()=>{
        setOpenMoonphase(!openMoonphase);
        console.log("open Moonphase selection");
    };

    const openMoonSelection = ()=>{
        setOpenMoon(!openMoon);
        console.log("open Moon selection");
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
                    // id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                
                    <textarea
                    className={styles.textarea}
                    placeholder="Products description"
                    // id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
               
            

                    <input
                    type="text"
                    className={styles.input}
                    placeholder="Price"
                    // id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
            

                    <input
                    type="text"
                    className={styles.input}
                    placeholder="Image"
                    // id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    />
    
                    <input
                    type="text"
                    className={styles.input}
                    placeholder="Color"
                    // id="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    />
                     <button type="submit" className={styles.addBtn}>
                    Add Product
                </button>
                </div>
                {/* Hur löser man det med checkbox som kan ta in flera värden */}
                <div className={styles.selectFields}>
                    {/* <div> 
                        <label for="moonphase_1">
                        New Moon
                        <input 
                        type="checkbox" 
                        id="moonphase_1"
                        value= "newmoon"
                        className={styles.checkbox}
                        onChange={(e) => setMoonphase (e.target.value)}
                        />
                        </label>
                        <label for="moonphase_2">
                            Full Moon
                        <input 
                        type="checkbox" 
                        id="moonphase_2"
                        value= "fullmoon"
                        className={styles.checkbox}
                        onChange={(e) => setMoonphase (e.target.value)}
                        />
                        </label>    
                    </div>
                   
                    <div>
                        <label for="moon_1">
                        Snowmoon/december
                        </label>
                        <input
                        type="checkbox"
                        className={styles.checkbox}
                        id="moon_1"
                        value={moon}
                        onChange={(e) => setMoon(e.target.value)}
                        />
                    </div> */}
                    <div>
                        <label className={styles.zodiac}>Zodiac 
                        <select className={styles.selectZodiac}  multiple={true} onChange= {handleSelected} onClick={openZodiacSelection} style={{display: openZodiac ? "block" : ""}}>
                            <option className={styles.option} value="Aries" >Aries| March 21-April 19</option>
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
                        <select className={styles.selectMoonphase}  multiple={true} onChange= {handleSelected} onClick={openMoonphaseSelection} style={{display: openMoonphase ? "block" : ""}}>
                            <option className={styles.option} value="Last Quarter" >Last Quarter</option>
                            <option className={styles.option}value="New Moon">New Moon</option>
                            <option className={styles.option}value="First Quarter">First Quarter</option>
                            <option className={styles.option}value="Full moon">Full moon</option>
                        </select>
                        </label>    
                    </div>

                     <div>
                        <label className={styles.moon}>Moon
                        <select className={styles.selectMoon}  multiple={true} onChange= {handleSelected} onClick={openMoonSelection} style={{display: openMoon ? "block" : ""}}>
                            <option className={styles.option} value="Snowmoon" >Snowmoon</option>
                            <option className={styles.option}value="New Moon">New Moon</option>
                            <option className={styles.option}value="First Quarter">First Quarter</option>
                            <option className={styles.option}value="Full moon">Full moon</option>
                        </select>
                        </label>    
                    </div>              

                </div>
            </form>
            {/* Vill hämta in productCard för att göra en autentisk preview men vill lägga map() funktionen i en egen komponent så att ett kort genererar från en produkt,
            skapar upp detta under previewProduct så kan vi radera och ändra när map() fått en egen komponent. */}
            <section className={styles.preview}>
                <h1>Preview product</h1>
            <PreviewProductCard product={PreviewProduct()}/>
            </section>
        </div>
    )
}

export default AddProductForm;
