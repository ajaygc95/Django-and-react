import React from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo } from "./Navbar.element";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon>ULTRA</NavIcon>
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
