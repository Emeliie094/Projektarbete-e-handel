import React from 'react'
import ProductTable from '../../components/ProductTable/ProductTable';
import {Link} from 'react-router-dom';
import styles from "./Dashboard.module.css";


const Admin = ({products, onDelete, onEdit}) => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1>ADMIN AREA</h1>
                </div>
                <div>
                    <Link to="/admin/addproduct"
                    className={styles.addLink}>Add new product</Link>
                </div>
            </div>
           
       
            
           
           
            <span></span>
            <ProductTable products={products} onDelete={onDelete} onEdit={onEdit}/>
            
        </div>
            
    
    )
}

export default Admin;
