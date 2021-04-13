import React from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo, Mo } from "./Navbar.element";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            BoozeCart
          </NavLogo>
          <MobileIcon>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
