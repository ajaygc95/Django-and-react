import styled from "styled-components";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";


export const Nav = styled.nav`
  background: #101522;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  color: white;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 65px;
$(Container)

`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaBeer)`
  margin-right: 0.5rem;
  color: white;
`;


export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 960px){
    display: block;
    postion: absolute;
    top: 0;
    right: 0;
    transform: trnaslate(-100%,)

}

`