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
import Dashboard from "./pages/Admin/Dashboard";
import NotFound from "./pages/NotFound/NotFound.js";
import './App.css';
import AddProductForm from "./pages/Admin/AddProductForm/AddProductForm.js";

function App() {

const products = [
  {
    id: 1,
    name: "ROSENKVARTS RÅ JUMBO",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/4040586/pexels-photo-4040586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa",
    moonphase: "☾",
    moon: "snowmoon",
    zodiac: "♉"
  },
  {
    id: 2,
    name: "KALCIT TOUCHSTONE",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/4040606/pexels-photo-4040606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa",
    moonphase: "☾",
    moon: "harvestmoon",
    zodiac: "♉"
  },
  {
    id: 3,
    name: "BLÅ KALCIT RÅ",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/6474101/pexels-photo-6474101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa",
    moonphase: "☾",
    moon: "strawberrymoon",
    zodiac: "♉"
  },
  {
    id: 4,
    name: "NY JADEPLATTA",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/2942849/pexels-photo-2942849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa",
    moonphase: "☾",
    moon: "snowmoon",
    zodiac: "♉"
  },
  {
    id: 5,
    name: "ROSENKVARTS RÅ JUMBO 2",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/4040586/pexels-photo-4040586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa",
    moonphase: "☾",
    moon: "wormmoon",
    zodiac: "♉"
  },
  {
    id: 6,
    name: "KALCIT TOUCHSTONE 2",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/4040606/pexels-photo-4040606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa",
    moonphase: "☾",
    moon: "harvestmoon",
    zodiac: "♉"
  },
  {
    id: 7,
    name: "BLÅ KALCIT RÅ 2",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/6474101/pexels-photo-6474101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa",
    moonphase: "☾",
    moon: "snowmoon",
    zodiac: "♉"
  },
  {
    id: 8,
    name: "NY JADEPLATTA 2",
    price: "xx",
    description: "Det här är verkligen kristallen som du kan använda precis hur du vill. Ha den med dig under dagen för att boosta dig själv med kärlek, ge bort den som present, inred med den för lite extra good vibes, ta ett avkopplande bad tillsammans med den.. ja du hör ju själv, bara din fantasi sätter gränser för hur du kan använda din Rosenkvarts. Let the feelgood begin!",
    imageUrl: "https://images.pexels.com/photos/2942849/pexels-photo-2942849.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    color: "rosa",
    moonphase: "☾",
    moon: "snowmoon",
    zodiac: "♉"
  }
  
]

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
          <Dashboard/>
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
