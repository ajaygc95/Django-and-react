import React from 'react'
import './Nav.css'
import {Link, withRouter} from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: "white"
    };

    return (
      <>
      <nav className="navbar">
        <div className="nabvar-container"></div>
        <Link to='/' className='navbar-logo'> 
        Logo <i className=
        </Link>
      </nav>
      </>
    )
}

export default Nav
