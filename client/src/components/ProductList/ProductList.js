function ProductList({products}) {
    return (
        <div>
           <table>
               <thead>
                   <tr>
                       <td>ID:</td>
                       <td>Product:</td>
                       <td>Price:</td>S
                   </tr>

               </thead>
               <tbody>
                  {products.map(product => (
                      <tr>
                          <td>{product.id}</td>
                          <td>{product.name}</td>
                          <td>{product.price}<button>Delete</button><button>Edit</button></td>
                      </tr>
                  ))}
               </tbody>
           </table> 
        </div>
    )
}

export default ProductList;

