import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <h3>LOGO</h3>
            <ul className='nav-links'>
                <Link to='/about'>
                    <li>About</li>
                </Link>

                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Nav
