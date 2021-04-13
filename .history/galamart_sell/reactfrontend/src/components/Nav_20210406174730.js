import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBeer } from "react-icons/fa";
import Button from "./Button";

function Nav() {
  const [click, setclick] = useState(false);
  const [button, setbutton] = useState(true);
  const handleClick = () => setclick(!click);

  const showButton = () => {
    if(window.innerWidth <=960){
      setbutton(false)
    }else{
      setbutton(true)
    }
  }

  window.addEventListener

  return (
    <>
      <div className="navbar">
        <div className="nabvar container container">
          <Link to="/" className="navbar-logo">
            <FaBeer className="navbar-icon" />
            LOGO
          </Link>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/shop" className="nav-links"></Link>
            SHOP
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-links">
              PRODUCTS
            </Link>
          </li>
          {button ? (
            <Link className="btn-link">
              <Button buttonStyle="btn--outline">Sign UP</Button>
            </Link>
          ) : (
            <Link className="btn-link">
              <Button buttonStyle="btn--outline" buttonSize="btn-mobile">
                SIGN UP
              </Button>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}

export default Nav;
