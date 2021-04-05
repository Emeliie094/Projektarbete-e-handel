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

  const url = "http://localhost:5000/api/products"

  useEffect(() => {

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  const [products, setProducts] = useState([]);

  const hero = [{
    id: 1,
    heading: "Full moon in aquarius meditation",
    info: "Let go of your old beliefs and leave your troubles behind. Powerful full moon coming up.",
    imgUrl: "https://images.pexels.com/photos/374672/pexels-photo-374672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    linkUrl: "/"
  }]

  return (
    <Router>
      <PageHeader/>
      <Switch>
        <Route path="/" exact>
          <Home hero={hero} products={products}/>
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
