import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import PageHeader from "./components/PageHeader/PageHeader.js";
import Home from "./pages/Home/Home.js";
import Shop from "./pages/Shop/Shop.js";
import DetailPage from "./pages/DetailPage/DetailPage.js";
import Checkout from "./pages/Checkout/Checkout.js";
import Dashboard from "./pages/Admin/Dashboard";
import NotFound from "./pages/NotFound/NotFound.js";
import "./App.css";
import AddProductForm from "./pages/Admin/AddProductForm/AddProductForm.js";
import Popup from "../src/components/PopUpCart/PopUpCart";

function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  const [buttonPopup, setButtonPopup] = useState();

  const url = "http://localhost:5000/api/products";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const addToCart = (products) => {
    setCart([...cart, products]);
    setButtonPopup(true);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <Router>
      <PageHeader removeFromCart={removeFromCart} cart={cart} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop">
          <Shop
            products={products}
            addToCart={addToCart}
            Popup={<Popup trigger={buttonPopup} setTrigger={setButtonPopup} />}
          />
        </Route>
        <Route path="/products/:id">
          <DetailPage
            products={products}
            addToCart={addToCart}
            Popup={<Popup trigger={buttonPopup} setTrigger={setButtonPopup} />}
          />
        </Route>
        <Route path="/checkout">
          <Checkout removeFromCart={removeFromCart} cart={cart} />
        </Route>
        <Route path="/admin" exact>
          <Dashboard />
        </Route>
        <Route path="/admin/addproduct">
          <AddProductForm />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
