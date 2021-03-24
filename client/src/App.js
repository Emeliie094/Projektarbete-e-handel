import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PageHeader from "./components/PageHeader/PageHeader.js";
import Home from "./pages/Home/Home.js";
import Shop from "./pages/Shop/Shop.js";
import DetailPage from "./pages/DetailPage/DetailPage.js"
import Checkout from "./pages/Checkout/Checkout.js";
import Admin from "./pages/Admin/Dashboard";
import NotFound from "./pages/NotFound/NotFound.js";
import './App.css';
import AddProductForm from "./pages/Admin/AddProductForm/AddProductForm.js";

function App() {

  const [products, setProducts] = useState([]);

  const url = "http://localhost:5000/api/products"

    useEffect(() => {

      fetch(url)
        .then(resp => resp.json())
        .then(data => {
          setProducts(data);
        });
    }, []);

  
  //Fungerar men man måste ladda om shop sidan en gång för att få upp den tillagda producten
  const addProduct = (product) => {
    
    fetch(url, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
      body: JSON.stringify(product)
     })
     .then(resp => {
       if (resp.status == "204") { // No Content
 
         fetch(url)
           .then(resp => resp.json())
           .then(p => {
             
             setProducts(p);
        });
      }
    
     });
    };

    const deleteProduct = (id) => {
    
      fetch(`http://localhost:5000/api/products/${id}`, {
         method: "DELETE",
        
       })
       .then(resp => {
         if (resp.status == "204") { // No Content
   
           fetch(url)
             .then(resp => resp.json())
             .then(p => {
               
               setProducts(p);
          });
        }
      
       });
      };

  

 

    return (
      <Router>
        <PageHeader/>
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/shop">
            <Shop products={products}/>
          </Route>
          <Route path="/products/:id">
            <DetailPage products={products}/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/admin" exact>
            <Admin products={products} onDelete={deleteProduct}/>
          </Route>
          <Route path="/admin/addproduct">
            <AddProductForm onAdd={addProduct}/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    );
}

export default App;
