import styles from "./ProductTable.module.css";

function ProductTable({products, onDelete, onEdit}) {
    return (
        <div className={styles.wrapper}>
           <table className={styles.table}>
               <thead>
                   <tr className={styles.tablehead}>
                       {/* <td>Image:</td>
                       <td>ID:</td>
                       <td>Product:</td>
                       <td>Price:</td>
                       <td>Moon:</td> */}
                       
                   </tr>

               </thead>
               <tbody className={styles.tbody}>
                  {products.map(product => (
                      <tr className={styles.bodyrow}>
                          <td><img className={styles.img}src={product.imageUrl} /></td>
                          <td>{product.id}.</td>
                          <td>{product.name}</td>
                          <td>{product.price}sek</td>
                          <td>{product.moon}</td>
                          <td>{product.moonphase}</td>
                          <td>{product.zodiac}</td>
                          <td>
                          <button className={styles.deletebtn} onClick={()=>{onDelete(product.id)}}>Delete</button>
                          <button className={styles.editbtn}>Update onClick={()=>{onEdit(product.id)}}</button>
                          </td>
                      </tr>
                  ))}
               </tbody>
           </table> 
           <button>Add product</button>
        </div>
    )
}

export default ProductTable;

