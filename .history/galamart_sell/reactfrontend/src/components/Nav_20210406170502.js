import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, AiOutlineShoppingCart } from "react-icons/fa";

function Nav() {
  return (
    <>
      <div className="navbar">
        <div className="nabvar container container">
          <Link to="/" className="navbar-logo">
            LOGO 
          </Link>
        </div>
        <div className="menu-icon">
        <Link to="/" className="navbar-logo">
                      <Link to="/" className="navbar-logo">
            LOGO
          </Link>
          </Link>

        </div>
      </div>
    </>
  );
}

export default Nav;
