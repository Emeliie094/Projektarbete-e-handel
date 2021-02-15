import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
      <Router>
        <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        </Switch>
        </Router> 
    </div>
  );
}

export default App;
