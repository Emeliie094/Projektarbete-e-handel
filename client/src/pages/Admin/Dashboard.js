import React from 'react'
import ProductTable from '../../components/ProductTable/ProductTable';


const Admin = ({products, onDelete, onEdit}) => {
    return (
        <div>
            <ProductTable products={products} onDelete={onDelete} onEdit={onEdit}/>
        </div>
    )
}

export default Admin;
