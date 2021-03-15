import React from 'react'
import ProductTable from '../../components/ProductTable/ProductTable';


const Admin = ({products}) => {
    return (
        <div>
            <ProductTable products={products}/>
        </div>
    )
}

export default Admin;
