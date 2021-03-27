import React from "react";
import { useHistory } from "react-router-dom";
import "./popUp.css";

function PopUpCart(props) {
  const history = useHistory();
  
  function handleClick() {
    history.push({
      pathname: '/checkout'
    });
  }
  return props.trigger ? (
    <div className="popup">
      <div classNAme="blur"></div>
      <div className="popup-inner">
        <h3>Produkten har lagts till i din varukorg</h3>
        <div>
          <button className="popupBtn checkoutBtn" onClick={handleClick}>
            Gå till kassan
          </button>
          <button
            className="popupBtn shopBtn"
            onClick={() => props.setTrigger(false)}
          >
            Fortsätt handla
          </button>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUpCart;
