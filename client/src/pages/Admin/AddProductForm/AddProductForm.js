import {useState} from 'react';
import styles from './style.module.css';

const AddProductForm = () => {
    
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [color, setColor] = useState("");
    const [moonphase,setMoonphase] = useState("");
    const [moon, setMoon] = useState("");
    const [zodiac, setZodiac] = useState("");

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
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.container}>
            <div className={styles.name}>
                <label for="name" className="form-label">
                Name
                </label>
                <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
        
            <div className="mb-3">
                <label for="description" className="form-label">
                Description
                </label>
                <textarea
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
        
            <div className="mb-3">
                <label for="price" className="form-label">
                Price
                </label>
                <input
                type="text"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </div>
        
            <div className="mb-3">
                <label for="imageUrl" className="form-label">
                Image URL
                </label>
                <input
                type="text"
                className="form-control"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="color" className="form-label">
                Color
                </label>
                <input
                type="text"
                className="form-control"
                id="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                />
            </div>
            {/* Hur löser man det med checkbox som kan ta in flera värden */}
            <div>
                <label for="moonphase_1">
                    New Moon
                <input 
                type="checkbox" 
                id="moonphase_1"
                value= "newmoon"
                onChange={(e) => setMoonphase (e.target.value)}
                />
                </label>
                <label for="moonphase_1">
                    Full Moon
                <input 
                type="checkbox" 
                id="moonphase_1"
                value= "fullmoon"
                onChange={(e) => setMoonphase (e.target.value)}
                />
                </label>
                
                
            </div>
           
            <div className="mb-3">
                <label for="imageUrl" className="form-label">
                Moon
                </label>
                <input
                type="text"
                className="form-control"
                id="color"
                value={moon}
                onChange={(e) => setMoon(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label for="imageUrl" className="form-label">
                Zodiac
                </label>
                <input
                type="text"
                className="form-control"
                id="color"
                value={zodiac}
                onChange={(e) => setZodiac(e.target.value)}
                />
            </div>
        
            <button type="submit" className="btn btn-primary">
                Add Product
            </button>
            </form>
        </div>
    )
}

export default AddProductForm;
