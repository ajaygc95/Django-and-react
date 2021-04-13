import React from 'react'
import './Nav.css'
import {Link, withRouter} from 'react-router-dom'

function Nav() {

    const navStyle = {
        color: "white"
    };

    return (
        <div className="navbar">
            <h3>LOGO</h3>
            <ul style = {navStyle} className='nav-links' >
                <Link style = {navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style = {navStyle} to='/about'>
                    <li>Home</li>
                </Link>
                <Link style = {navStyle} to='/shop'>
                    <li>Shop</li>
                </Link>

            </ul>
        </div>
    )
}

export default Nav
