import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useEffect, useState } from "react";

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

  const addProduct = (product) => {
    
    fetch("http://localhost:5000/api/products", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(product) // serialisera "{/"name/": "Pink T-Shirt"...
     }).then(resp => {
       if (resp.status == "204") { // No Content
 
         fetch("http://localhost:5000/api/products")
           .then(resp => resp.json())
           .then(p => {
             setProducts(p);
             //history.push("/admin/products");
             //location.href = "/admin/products";
           });
       }
     });

 

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
          <Admin products={products}/>
        </Route>
        <Route path="/admin/addproduct">
          <AddProductForm/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
