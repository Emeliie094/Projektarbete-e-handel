import React from 'react'
import ProductTable from '../../components/ProductTable/ProductTable';


const Admin = ({products, onDelete, onEditProduct}) => {
    return (
        <div>
            <ProductTable products={products} onDelete={onDelete} onEdit={onEditProduct}/>
        </div>
    )
}

export default Admin;
