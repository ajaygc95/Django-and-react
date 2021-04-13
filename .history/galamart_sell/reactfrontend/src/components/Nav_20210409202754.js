import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/" className="navbar-logo">
            BoozeCart
            <FaBeer className="navbar-icon"></FaBeer>
          </Link>

          {/* {MenuItems.map((item, index) => (
              <li>
                <Link key={index} to={`${item.url}`} className={item.cName}>
                  {item.title}
                </Link>
              </li>
            ))} */}

          {/* {button ? (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link to="/sign-up" className="btn-link">
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    SIGN UP
                  </Button>
                </Link>
              )} */}

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/Home" className="nav-links" className="nav-links">
                About
              </Link>
            </li>
            <li>
              <Link to="/Home" className="nav-links">Services</Link>
            </li>
            <li>
              <Link to="/Home" className="nav-links">Projects</Link>
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
