import styles from "./ProductTable.module.css";
import { useState } from 'react';
import EditForm from "../EditForm/EditForm";

function ProductTable({products, onDelete, onEdit}) {

    // const listProducts = {id:null,name:'',price:'',moon:'',moonphase:'',zodiac:''};

    const [editing, setEditing] = useState(false);
    const [initialFormState,setInitialFormState] = useState({id:null,name:'',price:'',moon:'',moonphase:'',zodiac:''});
    const [currentFormState,setCurrentFormState] = useState(initialFormState);
   

    const editProduct = (product) => {
        setEditing(true);

        const listProduct = {
            id:product.id,
            name:product.name,
            price:product.price,
            description:product.description,
            imageUrl:product.imageUrl,
            color:product.color,
            moonphase:product.moonphase,
            moon:product.moon,
            zodiac:product.zodiac
        };
        setCurrentFormState(listProduct);  

    }

    const updateProduct = (product)=>{
        onEdit(product);
    };

    return (
        <div className={styles.wrapper}>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tablehead}>
                            
                        </tr>

                    </thead>
                    <tbody className={styles.tbody}>
                        {products.map(product => (
                            <tr key={product.id}className={styles.bodyrow}>
                                <td><img className={styles.img}src={product.imageUrl} /></td>
                                <td>{product.id}.</td>
                                <td>{product.name}</td>
                                <td>{product.price}sek</td>
                                <td>{product.moon}</td>
                                <td>{product.moonphase}</td>
                                <td>{product.zodiac}</td>
                                <td>
                                <button className={styles.deletebtn} onClick={()=>{onDelete(product.id)}}>Delete</button>
                                <button className={styles.editbtn} onClick={()=>{editProduct(product)}}>Update</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table> 
           </div>
            <div className={styles.EditForm}>
                {editing === true 
                ? <EditForm product={currentFormState} onUpdate={updateProduct} setEditing={setEditing} onDelete={onDelete}/> : null
                }
            </div>
        </div>
    )
}

export default ProductTable;

