import {NavLink} from "react-router-dom";
import {useState} from "react";
import './PageHeaderStyle.css';

const PageHeader = () => {

    const [open,setOpen]=useState(false);

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
        {/* <ul className="shopping-nav" style={{transform: open ? "translateX(0px)" : ""}}>
            <li>Shopping cart items</li>
        </ul> */}
        <i onClick={()=> setOpen(!open)}className="fas fa-bars burger"></i>
        <i className="fas fa-search search"></i>
        {/* <i onClick={()=> setOpen(!open)} className="fas fa-shopping-bag shop-bag"></i> */}
        </nav>
        
    </header>
);
}
export default PageHeader;

<NavLink className="nav-link"  exact to = {"/"}>Home</NavLink>