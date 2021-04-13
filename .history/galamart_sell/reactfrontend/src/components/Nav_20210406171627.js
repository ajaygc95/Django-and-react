import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBeer } from "react-icons/fa";

function Nav() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
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
            <Link to=
            HOME</li>
          <li className="nav-item">SHOP</li>
          <li className="nav-item">ABOUT</li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
