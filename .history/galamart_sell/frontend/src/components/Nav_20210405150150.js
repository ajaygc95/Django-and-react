import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    const 
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
