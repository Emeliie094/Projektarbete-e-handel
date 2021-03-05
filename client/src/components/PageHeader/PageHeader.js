import {NavLink, Link} from "react-router-dom";
import {useState} from "react";
import './PageHeaderStyle.css';

const PageHeader = () => {

    const [open,setOpen]=useState(false);
    const [openCart,setOpenCart]=useState(false);
    // const [openSearch,setOpenSearch]=useState(false);

    const openMenuIcon = ()=>{
        setOpen(!open);
        console.log("menu open");

    };
    const openCartIcon = ()=>{
        setOpenCart(!open);
        console.log("cart open");

        const element = document.getElementsByClassName("shopping-nav");
        // transform: open ? "translateX(0px)" : ""}



    };

    // const openSearchBar = ()=>{
    //     setOpenSearch(!open);
    //     console.log("search open");
    // };

return (
    <header>
        <nav>
            <div className="logo">
                <img className="nav-logo"src="https://via.placeholder.com/50x50.png?text=Logo" alt="logo"/>
            </div>
        <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""}}>
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
        <ul className="shopping-nav">
        
            {/* <ul className="shopping-items">Shopping cart items</ul>
            <li>Kristall 1, 450kr<button>Remove</button></li>
            <li>Kristall 2, 600kr<button>Remove</button></li>
            <li>Kristall 3, 900kr<button>Remove</button></li>
            <li>Sum:</li>
            <button>Proceed to payment</button> */}
        </ul>
        <i onClick={openMenuIcon} className="fas fa-bars burger"></i>
        <i className="fas fa-search search"></i>
        <i onClick={openCartIcon} className="fas fa-shopping-bag shop-bag"></i>
        </nav>
        
    </header>
);
}
export default PageHeader;

<NavLink className="nav-link"  exact to = {"/"}>Home</NavLink>