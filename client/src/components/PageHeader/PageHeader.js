import {NavLink} from "react-router-dom";

const PageHeader = () => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img className="navbar-brand" src="mystical2.12.png"></img>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <NavLink className="nav-link"  exact to = {"/"}>Home</NavLink>
      </li>
      <li className="nav-item">
      <NavLink  className="nav-link" exact to = {"/shop"}>Shop</NavLink>
      </li>
      <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  exact to = {"/checkout"}>Checkout</NavLink>

        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
        
    </header>
)
export default PageHeader;