import styled from "styled-components";
import { Container } from "../../globalStyles";

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
`;
