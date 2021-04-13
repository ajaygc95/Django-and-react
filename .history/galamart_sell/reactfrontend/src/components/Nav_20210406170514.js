import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, AiOutlineShoppingCart } from "react-icons/fa";

function Nav() {
  return (
    <>
      <div className="navbar">
        <div className="nabvar container container">
          <Link to="/" className="navbar-logo">
            LOGO {AiOutlineShoppingCart}
          </Link>
        </div>
        <div className="menu-icon">

          </Link>

        </div>
      </div>
    </>
  );
}

export default Nav;
