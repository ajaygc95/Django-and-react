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
        <ul className="">
          <li>Home</li>
          <li>SHOP</li>
          <li>Cart</li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
