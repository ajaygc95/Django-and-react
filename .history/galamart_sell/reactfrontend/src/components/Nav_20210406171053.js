import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, AiOutlineShoppingCart } from "react-icons/fa";

function Nav() {
  const [click, setclick] = useState(false)
  const handleClick = () => setclick(!click)
  return (
    <>
      <div className="navbar">
        <div className="nabvar container container">
          <Link to="/" className="navbar-logo">
            <FaBars className="navbar-icon" />
            LOGO
          </Link>
        </div>
        <div className="menu-icon" onClick></div>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </>
  );
}

export default Nav;
