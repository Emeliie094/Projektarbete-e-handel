import React from 'react'
import ProductList from '../../components/ProductList/ProductList'

const Admin = ({products}) => {
    return (
        <div>
            <ProductList products={products}/>
        </div>
    )
}

export default Admin;
