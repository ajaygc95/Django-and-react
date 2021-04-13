import React from "react";
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <>
      <div className="navbar">
        <div className="nabvar container container">
          <Link className="navbar-logo">LOGO</Link>
          <Link className="menu-icon">MENU</Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
