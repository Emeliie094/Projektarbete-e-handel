import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home/Home.js";
import './App.css';

function App() {

const products = [
  {
    id: 1,
    name: "ROSENKVARTS RÅ JUMBO",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/4040586/pexels-photo-4040586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa"
  },
  {
    id: 2,
    name: "KALCIT TOUCHSTONE",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/4040606/pexels-photo-4040606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa"
  },
  {
    id: 3,
    name: "BLÅ KALCIT RÅ",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/6474101/pexels-photo-6474101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa"
  },
  {
    id: 4,
    name: "NY JADEPLATTA",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/2942849/pexels-photo-2942849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa"
  }
]

  return (
    <div className="App">
     <h1>Hello World</h1>
      <Router>
        <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        </Switch>
        </Router> 
    </div>
  );
}

export default App;
