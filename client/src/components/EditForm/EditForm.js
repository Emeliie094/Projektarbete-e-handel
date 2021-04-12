import { useState, useEffect} from 'react';
import styles from './EditForm.module.css';

const EdirForm = ({product, onUpdate, setEditing, onDelete}) => {

    const [id,setId]=useState(product.id);
    const [name,setName]=useState(product.name);
    const [price,setPrice]=useState(product.price);
    const [moon,setMoon]=useState(product.moon);
    const [updatedProduct,setUpdatedProduct] = useState();
    

    useEffect(() => {
     setId(product.id);
     setName(product.name);
     setPrice(product.price);
     setMoon(product.moon);
    }, [product]);
    

    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedProduct = {
            id,
            name,
            price,
            moon
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
                        placeholder={product.moon}  
                        value={moon}  
                        
                        onChange={(e) => setMoon(e.target.value)}
                    />
    
               
                <button>Save</button>
                <button onClick= {() => {setEditing(false)}}>Cancel</button>
                <button onClick= {() => {onDelete(product.id)}}>Delete</button>
    
            </form>
        </div>
    );


  
};

export default EdirForm;