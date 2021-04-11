import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import PageHeader from "./components/PageHeader/PageHeader.js";
import PageFooter from "./components/PageFooter/PageFooter.js"
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
  const [heros,setHeros]=useState([]);
  const [filteredHero,setFilteredHero]=useState([]);
  
  const [currentMoon,setCurrentMoon] = useState([]);

  const [searchResult, setSearchResult] = useState([]);
  const [cart, setCart] = useState([]);
  const [buttonPopup, setButtonPopup] = useState();

//Fetch products
  const url_products = "http://localhost:5000/api/products"
  const url_heros = "http://localhost:5000/api/heros"

    useEffect(() => {


      fetch(url_products)
        .then(resp => resp.json())
        .then(data => {

          setProducts(data);
        });
        fetch(url_heros)
        .then(resp => resp.json())
        .then(data => {
          setHeros(data);
        });
    }, []);

//Fetch moon API data with use of UNIX timestamp

 let dateTime = new Date().getTime();
 let timestamp = Math.floor(dateTime / 1000);

useEffect (()=>{

   
  let url_moondata=`https://api.farmsense.net/v1/moonphases/?d=${timestamp}`;    
  
      fetch (url_moondata)
          .then (resp => resp.json())
          .then (data => {
            setCurrentMoon(data)}
          );
          
  },[Home]);

  
  //Fungerar men man måste ladda om shop sidan en gång för att få upp den tillagda producten
  const addProduct = (product) => {
    
    fetch(url_products, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
      body: JSON.stringify(product)
     })
     .then(resp => {
       if (resp.status == "204") { // No Content
 
         fetch(url_products)
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
   
           fetch(url_products)
             .then(resp => resp.json())
             .then(data => {
               
               setProducts(data);
          });
        }
      
       });
      };

    const searchProduct = ((query)=> {

        
      fetch (`http://localhost:5000/api/products/${query}`)
        .then(resp => resp.json())
        .then (result => {
           setSearchResult(result);
        });
          
    });

  const filterHero = ((phase) => {
    fetch (`http://localhost:5000/api/heros/${phase}`)
    .then(resp => resp.json())
    .then (result => {
       setFilteredHero(result);
    });
  }); 

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
          <Home 
          currentMoon={currentMoon}
          hero={filteredHero} 
          products={searchResult}
          relatedProducts={searchProduct}
          filterHero={filterHero}/>
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

