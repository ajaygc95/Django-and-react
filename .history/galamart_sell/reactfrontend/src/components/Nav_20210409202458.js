import React, { useState } from "react";
import {   } from "react-router-dom";
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
          <  to="/" className="navbar-logo">
            BoozeCart
            <FaBeer className="navbar-icon"></FaBeer>
          </ >

          {/* {MenuItems.map((item, index) => (
              <li>
                <  key={index} to={`${item.url}`} className={item.cName}>
                  {item.title}
                </ >
              </li>
            ))} */}

          {/* {button ? (
                <  to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </ >
              ) : (
                <  to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </ >
              )} */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <  to="/Home">About</ >
            </li>
            <li>
              <  to="/Home">Services</ >
            </li>
            <li>
              <  to="/Home">Projects</ >
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
