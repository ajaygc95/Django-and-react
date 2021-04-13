import React, { useState } from "react";
import { Link className="nam" } from "react-router-dom";
import { FaBars, FaTimes, FaBeer } from "react-icons/fa";
import { Button } from "./Button";
import "./Newnav.css";
import { MenuItems } from "./MenuItems";
import ItemDetail from "./ItemDetail";

function Nav() {
  const [click, setclick] = useState(false);
  const [button, setbutton] = useState(true);
  const handleClick = () => setclick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link className="nam" to="/" className="navbar-logo">
            BoozeCart
            <FaBeer className="navbar-icon"></FaBeer>
          </Link className="nam">

          {/* {MenuItems.map((item, index) => (
              <li>
                <Link className="nam" key={index} to={`${item.url}`} className={item.cName}>
                  {item.title}
                </Link className="nam">
              </li>
            ))} */}

          {/* {button ? (
                <Link className="nam" to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link className="nam">
              ) : (
                <Link className="nam" to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link className="nam">
              )} */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link className="nam" to="/Home">About</Link className="nam">
            </li>
            <li>
              <Link className="nam" to="/Home">Services</Link className="nam">
            </li>
            <li>
              <Link className="nam" to="/Home">Projects</Link className="nam">
            </li>
            <Button>Sign Up</Button>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
