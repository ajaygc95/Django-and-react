import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, AiOutlineShoppingCart } from "react-icons/fa";

function Nav() {
  return (
    <>
      <div className="navbar">
        <div className="nabvar container container">
          <Link to="/" className="navbar-logo">
            <FaBars className="navbar-icon" />
            LOGO
          </Link>
        </div>
        <div className="menu-icon"></div>
      </div>
    </>
  );
}

export default Nav;
