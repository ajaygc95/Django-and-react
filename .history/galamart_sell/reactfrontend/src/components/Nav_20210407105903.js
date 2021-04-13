import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBeer } from "react-icons/fa";
import { Button } from "./Button";
import "./Nav.css";

function Nav() {
  const [click, setclick] = useState(false);
  const [button, setbutton] = useState(true);
  const handleClick = () => setclick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
    <nav className="navbar">
      

    </nav>
    </>
  )
}

export default Nav;
