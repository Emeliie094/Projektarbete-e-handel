import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import PageHeader from "./components/PageHeader/PageHeader.js";
import Home from "./pages/Home/Home.js";
import Shop from "./pages/Shop/Shop.js";
import DetailPage from "./pages/DetailPage/DetailPage.js";
import Checkout from "./pages/Checkout/Checkout.js";
import Admin from "./pages/Admin/Dashboard";
import NotFound from "./pages/NotFound/NotFound.js";
import "./App.css";
import AddProductForm from "./pages/Admin/AddProductForm/AddProductForm.js";
import SearchResult from "./pages/SearchResult/SearchResult.js";
import Popup from "../src/components/PopUpCart/PopUpCart";

function App() {
  const [products, setProducts] = useState([]);

  const [searchResult, setSearchResult] = useState([]);

  const [cart, setCart] = useState([]);

  const [buttonPopup, setButtonPopup] = useState();


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
             .then(data => {
               
               setProducts(data);
          });
        }
      
       });
      };

    const searchProduct = ((query)=> {

      console.log("App searchProduct:" + query);
        
      fetch (`http://localhost:5000/api/products/${query}`)
        .then(resp => resp.json())
        .then (result => {
           setSearchResult(result);
        });
          
    });

  const hero = [{
    id: 1,
    heading: "Full moon in aquarius meditation",
    info: "Let go of your old beliefs and leave your troubles behind. Powerful full moon coming up.",
    imgUrl: "https://images.pexels.com/photos/374672/pexels-photo-374672.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    linkUrl: "/"
  }]


  const addToCart = (products) => {
    setCart([...cart, products]);
    setButtonPopup(true);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <Router>
      <PageHeader removeFromCart={removeFromCart} cart={cart} onSearch={searchProduct}/>
      <Switch>
        <Route path="/" exact>
          <Home hero={hero} products={products}/>
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
          <Admin products={products} onDelete={deleteProduct} onSearch={searchProduct}/>
        </Route>
        <Route path="/admin/addproduct">
          <AddProductForm onAdd={addProduct} />
        </Route>
        <Route path="/search">
            <SearchResult searchResult={searchResult}/>
          </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

