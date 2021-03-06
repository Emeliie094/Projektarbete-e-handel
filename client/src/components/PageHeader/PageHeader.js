import {NavLink} from "react-router-dom";
import {useState} from "react";
import './PageHeaderStyle.css';

const PageHeader = () => {

    const [openMenu,setOpenMenu]=useState(false);
    const [openCart,setOpenCart]=useState(false);
    const [openSearch,setOpenSearch]=useState(false);

    const openMenuIcon = ()=>{
        setOpenMenu(!openMenu)

    };
    const openCartIcon = ()=>{
        setOpenCart(!openCart);

    };

    const openSearchBar = ()=>{
        setOpenSearch(!openSearch);
    };

return (
    <header>
        <nav>
            <div className="logo">
                <img className="nav-logo"src="https://via.placeholder.com/50x50.png?text=Logo" alt="logo"/>
            </div>
        <ul className="nav-links" style={{transform: openMenu ? "translateX(0px)" : ""}}>
            <li>
                <NavLink className="nav-link"  exact to = {"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink className="nav-link"  exact to = {"/shop"}>Shop</NavLink>
            </li>
            <li>
                <NavLink className="nav-link"  exact to = {"/checkout"}>Checkout</NavLink>
            </li>
        </ul>
        <div className="shopping-nav" style={{transform: openCart ? "translateX(0px)" : ""}}>
        
            <ul className="shopping-items">Shopping cart items</ul>
            <li>Kristall 1, 450kr<button>Remove</button></li>
            <li>Kristall 2, 600kr<button>Remove</button></li>
            <li>Kristall 3, 900kr<button>Remove</button></li>
            <li>Sum:</li>
            <button>Proceed to payment</button>
        </div>
        <form className="search-bar" style={{transform: openSearch ? "translateX(0px)" : ""}}>
            <input type="text" placeholder="search"></input>
            <button>Search</button>
        </form>
       
        <i onClick={openMenuIcon} className="fas fa-bars burger"></i>
        <i onClick={openSearchBar}className="fas fa-search search"></i>
        <i onClick={openCartIcon} className="fas fa-shopping-bag shop-bag"></i>
        </nav>
        
    </header>
);
}
export default PageHeader;

<NavLink className="nav-link"  exact to = {"/"}>Home</NavLink>