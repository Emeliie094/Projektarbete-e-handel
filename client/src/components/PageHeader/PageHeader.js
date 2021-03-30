import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import "./PageHeaderStyle.css";

const PageHeader = ({ cart, setCart }) => {
  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push({
      pathname: "/search",
      search: "?=${searchTerm}",
    });

    console.log(searchTerm);
  };

  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const openMenuIcon = () => {
    setOpenMenu(!openMenu);
  };
  const openCartIcon = () => {
    setOpenCart(!openCart);
  };

  const openSearchBar = () => {
    setOpenSearch(!openSearch);
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
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
            src="https://via.placeholder.com/50x50.png?text=Logo"
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
            <div>
              <img src={product.imageUrl} />
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
          <li>Sum:</li>
          <button className="goToCartBtn" onClick={handleClick}>
            Proceed to payment
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="search-bar"
          style={{ transform: openSearch ? "translateX(0px)" : "" }}
        >
          <input
            className="search-bar-field"
            type="search"
            placeholder="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-bar-btn">
            <i className="fas fa-search "></i>
          </button>
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
