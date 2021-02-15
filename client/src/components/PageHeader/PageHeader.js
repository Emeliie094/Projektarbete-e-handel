import {NavLink} from "react-router-dom";
import {useState} from "react";
import './PageHeaderStyle.css';

const PageHeader = () => {

    const [open,setOpen]=useState(false);
return (
    <header>
        <nav>
            <div className="logo">
                <img src='src\components\PageHeader\mystical2.12.png' alt="logo"/>
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
        <i onClick={()=> setOpen(!open)}className="fas fa-bars burger"></i>
        </nav>
        
    </header>
);
}
export default PageHeader;

<NavLink className="nav-link"  exact to = {"/"}>Home</NavLink>