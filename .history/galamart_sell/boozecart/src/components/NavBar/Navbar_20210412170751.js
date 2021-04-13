import React from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo } from "./Navbar.element";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            BoozeCart
          </NavLogo>
          <MobileIcon></MobileIcon> {click ? <Fatimes /> : <FaBars />}/>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
