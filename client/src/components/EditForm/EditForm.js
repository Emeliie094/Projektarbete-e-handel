import { useState, useEffect} from 'react';
import styles from './EditForm.module.css';

const EdirForm = ({product, onUpdate, setEditing, onDelete}) => {

    const [id,setId]=useState(product.id);
    const [name,setName]=useState(product.name);
    const [price,setPrice]=useState(product.price);
    const [description,setDescription]=useState(product.description);
    const [imageUrl,setImageUrl]=useState(product.imageUrl);
    const [color,setColor]=useState(product.color);
    const [moonphase,setMoonphase]=useState(product.moonphase);
    const [moon,setMoon]=useState(product.moon);
    const [zodiac,setZodiac]=useState(product.zodiac);
    const [updatedProduct,setUpdatedProduct] = useState();
    

    useEffect(() => {
     setId(product.id);
     setName(product.name);
     setPrice(product.price);
     setDescription(product.description);
     setImageUrl(product.imageUrl);
     setColor(product.color);
     setMoonphase(product.moonphase);
     setMoon(product.moon);
     setZodiac(product.zodiac);
    }, [product]);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedProduct = {
            id,
            name,
            price,
            description,
            imageUrl,
            color,
            moonphase,
            moon,
            zodiac
        }
        

        setUpdatedProduct(updatedProduct);
        onUpdate(updatedProduct);
        setEditing(false);

    }

    return(
        <div >  
             <form className={styles.wrapper} onSubmit={handleSubmit}>
                  <input
                        type="text"
                        placeholder={product.name}  
                        value={name}  
                        
                        onChange={(e) => setName(e.target.value)}
                    />
                      <input
                        type="text"
                        placeholder={product.price}  
                        value={price}  
                        
                        onChange={(e) => setPrice(e.target.value)}
                    />
                     <input
                        type="text"
                        placeholder={product.description}  
                        value={description}  
                        
                        onChange={(e) => setDescription(e.target.value)}
                    /> 
                        <input
                        type="text"
                        placeholder={product.imageUrl}  
                        value={imageUrl}  
                        
                        onChange={(e) => setImageUrl(e.target.value)}
                        />

                        {/* <input
                        type="text"
                        placeholder={product.color}  
                        value={color}  
                        
                        onChange={(e) => setColor(e.target.value)}
                        /> */}

                        <input
                        type="text"
                        placeholder={product.moonphase}  
                        value={moonphase}  
                        
                        onChange={(e) => setMoonphase(e.target.value)}
                        />

                      <input
                        type="text"
                        placeholder={product.moon}  
                        value={moon}  
                        
                        onChange={(e) => setMoon(e.target.value)}
                    />
                      <input
                        type="text"
                        placeholder={product.zodiac}  
                        value={zodiac}  
                        
                        onChange={(e) => setZodiac(e.target.value)}
                        />
    
               
                <button>Save</button>
                <button onClick= {() => {setEditing(false)}}>Cancel</button>
                <button onClick= {() => {onDelete(product.id)}}>Delete</button>
    
            </form>
        </div>
    );


  
};

export default EdirForm;