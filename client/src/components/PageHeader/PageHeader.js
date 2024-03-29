import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import "./PageHeaderStyle.css";
import logo from './logo.png';

const PageHeader = ({ onSearch, removeFromCart, cart }) => {
  const total = [];
  const history = useHistory();

    const [query, setQuery]=useState("");
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();

    history.push({
      pathname: "/search",
      search: "?=${query}",
    });
    onSearch(query);

  };
     
  const openMenuIcon = () => {
    setOpenMenu(!openMenu);
  };
  const openCartIcon = () => {
    setOpenCart(!openCart);
  };

  const openSearchBar = () => {
    setOpenSearch(!openSearch);
  };

  function handleClick() {
    history.push({
      pathname: "/checkout",
    });
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <img
            className="nav-logo"
            src= {logo}
            alt="logo"
          />
        </div>
        <ul
          className="nav-links"
          style={{ transform: openMenu ? "translateX(0px)" : "" }}
        >
          <li>
            <NavLink className="nav-link" exact to={"/"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to={"/shop"}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" exact to={"/checkout"}>
              Checkout{` • ${cart.length} `}
            </NavLink>
          </li>
        </ul>
        <div
          className="shopping-nav"
          style={{ transform: openCart ? "translateX(0px)" : "" }}
        >
          <ul className="shopping-items">Shopping cart items</ul>

          <hr></hr>
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.imageUrl} />
              {total.push(Number(product.price))}
              <li className="li">
                {" "}
                {product.name}, {product.price}kr
              </li>
              <button
                className="removeBtn"
                onClick={() => removeFromCart(product)}
                >
                Remove
              </button>
            </div>
          ))}
          <li>Sum: {total.reduce((a, b) => a + b, 0)} KR</li>
          <button className="goToCartBtn" onClick={handleClick}>
            Proceed to payment
          </button>
        </div>

        <form
          onSubmit={handleSearch}
          className="search-bar"
          style={{ transform: openSearch ? "translateX(0px)" : "" }}
        >
          <div className="search-bar-div">

          <input
            className="search-bar-field"
            type="search"
            placeholder="search"
            name="q"
            value={query}
            onChange={(e)=> setQuery(e.target.value)} /> 
            <button className="search-bar-btn"><i className="fas fa-search "></i></button>
            
          </div>
        </form>

        <i onClick={openMenuIcon} className="fas fa-bars burger"></i>
        <i onClick={openSearchBar} className="fas fa-search search"></i>
        <i
          onClick={openCartIcon}
          className="fas fa-shopping-bag shop-bag"
        >{` ${cart.length} `}</i>
      </nav>
    </header>
  );
};
export default PageHeader;
