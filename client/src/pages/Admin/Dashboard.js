import React from 'react'
import ProductTable from '../../components/ProductTable/ProductTable';


const Admin = ({products, onDelete}) => {
    return (
        <div>
            <ProductTable products={products} onDelete={onDelete}/>
        </div>
    )
}

export default Admin;
