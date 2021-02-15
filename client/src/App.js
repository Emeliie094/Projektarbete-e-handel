import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import PageHeader from "./components/PageHeader/PageHeader.js";
import Home from "./pages/Home/Home.js";
import Shop from "./pages/Shop/Shop.js";
import Checkout from "./pages/Checkout/Checkout.js";
import Admin from "./pages/Admin/Admin.js";
import NotFound from "./pages/NotFound/NotFound.js";
import './App.css';

function App() {
  return (
    <Router>
      <PageHeader/>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/shop">
          <Shop/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
