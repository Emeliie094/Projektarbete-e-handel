import {NavLink} from "react-router-dom";

const PageHeader = () => (
    <header>
        <ul>
            <li>
                <NavLink  exact to = {"/"}>Home</NavLink>
                <NavLink  exact to = {"/shop"}>Shop</NavLink>
                <NavLink  exact to = {"/checkout"}>Checkout</NavLink>
            </li>
        </ul>
    </header>
)
export default PageHeader;