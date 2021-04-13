import React from 'react'
import './Nav.css'
import {Link, withRouter} from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: "white"
    };

    return (
        <div className="nav">
            <h3>LOGO</h3>
            <ul className='nav-links'>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/about'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>Contact</li>
                </Link>

            </ul>
        </div>
    )
}

export default Nav
