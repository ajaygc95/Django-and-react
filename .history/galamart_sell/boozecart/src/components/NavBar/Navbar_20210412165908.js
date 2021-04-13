import React from "react";
import { Nav, NavbarContainer, NavIcaon, NavLogo } from "./Navbar.element";


const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
            <NavLogo to=''>
                <NavIcaon>
                    ULTRA
                </NavIcon>

            </NavLogo>

        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
