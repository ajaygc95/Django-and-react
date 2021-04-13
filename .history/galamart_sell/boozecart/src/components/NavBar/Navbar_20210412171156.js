import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavIcon,
  NavLogo,
  MobileIcon,
} from "./Navbar.element";

const Navbar = () => {
    const [click, setClick] = useState(false)


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
