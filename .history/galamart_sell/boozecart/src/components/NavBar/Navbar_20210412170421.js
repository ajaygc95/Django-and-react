import React from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo } from "./Navbar.element";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon/>
            
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
