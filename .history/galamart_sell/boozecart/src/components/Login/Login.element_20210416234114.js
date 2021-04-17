import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import { Link } from "react-router-dom";

export const LoginContainer = styled(Container)`
  height: 100vh;
`;

export const LoginWrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const LoginBox = styled.div`
  border-radius: 10px;
  -webkit-box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 20px;
  position: absolute;

  left: 0;
  right: 0;
  bottom: 100px;
  top: 60px;
  text-align: center;
  margin: auto;
`;

export const Topq = styled.div`
  display: flex;
  width: 80%;
  height: 40px;
  margin: auto;
  align-items: center;
  justify-content: center;
`;
export const YesAccount = styled.p`
  margin-right: 5px;
`;
export const NavLinks = styled(Link)`
  color: #ed0202;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const LoginHeader = styled.h1`
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const LoginButton = styled(Button)`
  padding: 20px 40px;
  font-size: 20px;
`;

export const FontAwesomeStyle = styled.div`
  font-family: DD-TTNorms;
  display: flex;
  height: 50px;
  font-size: 35px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
  color: white;
`;

