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
  /* -webkit-box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75); */
  box-shadow: 2px 3px 24px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 20px;
  position: absolute;

  left: 0;
  right: 0;
  bottom: auto;
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

export const LoginForm = styled.form`
  margin-top: 20px;
  display: grid;
  width: 80%;
  align-self: center;
  grid-gap: 10px;

  @media screen and (max-width: 820px) {
    width: 80%;
  }
`;

export const SocialLabel = styled.div`
  font-weight: bold;
  margin-left: 10px;
  font-size: 20px;
`;

export const IconStyle1 = styled.div`
  border-radius: 10px;
  background: #4267b2;

  &:hover {
    cursor: pointer;
    background: #38aee0;
  }
`;

export const IconStyle2 = styled.div`
  color: red;
  border: 2px solid red;
  /* background: red; */
  &:hover {
    cursor: pointer;
    opacity: 0.9;
    background: #4285f4;
    color: white;
    border: 2px solid red;
  }
`;

export const IconStyle3 = styled.div`
  border-radius: 10px;
  background: black;
  &:hover {
    cursor: pointer;
    background: teal;
  }
`;

export const SignUpDetail = styled.div`
  /* border: 1px solid aqua; */
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const DetailGrid = styled.div`
  margin-bottom: 10px;
  /* background: red; */
  display: flex;
  justify-content: space-around;
`;

export const LoginFormInput = styled.div`
  width: 100%;
  margin-right: 6px;
`;

export const FormName = styled.h4`
  font-size: 0.9rem;
  padding-left: 5px;
  margin-bottom: 5px;
  text-align: left;
  margin-left: 3px;
`;
export const FormField = styled.input`
  width: 100%;
  border: none;
  height: 50px;
  padding-left: 10px;
  border-radius: 5px;
  background: #d1d3e8;

  &::placeholder {
    padding-left: 10px;
  }
`;

export const SocialDiv = styled.div``;

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
  padding: 15px 40px;
  font-size: 20px;
  border-radius: 5px;
`;

export const FontAwesomeStyle = styled.div`
  font-family: DD-TTNorms;
  display: flex;
  height: 50px;
  font-size: 35px;
  padding: 10px 20px;
  align-items: center;
  justify-content: center;
`;
