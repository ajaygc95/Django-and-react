import styled from "styled-components";
import { Button, Container } from "../../globalStyles";

export const LoginContainer = styled(Container)`
  height: 100vh;
`;

export const LoginWrapper = styled.div`
  position: relative;
  height: 100%;
  /* display: table-cell;

  vertical-align: middle;
  text-align: center; */
`;

export const LoginBox = styled.div`
box-
  display: flex;
  flex-direction: column;
  max-width: 500px;
  padding: 20px;
  position: absolute;
  border: 2px solid blue;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  text-align: center;
  margin: auto;
`;

export const LoginHeader = styled.h1`
  font-size: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

export const LoginButton = styled(Button)`
  padding: 10px 20px;
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

export const LoginFormInput = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid blue;
  &::placeholder {
    color: #242424;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
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

export const SocialLabel = styled.div`
  font-weight: bold;
  margin-left: 10px;
  font-size: 20px;
  color: white;
`;

export const IconStyle1 = styled.div`
  border-radius: 5px;
  background: #4267b2;

  &:hover {
    background: #38aee0;
  }
`;

export const IconStyle2 = styled.div`
  border-radius: 5px;
  background: red;
  &:hover {
    opacity: 0.9;
    background: #4285f4;
  }
`;

export const IconStyle3 = styled.div`
  border-radius: 5px;
  background: black;
  &:hover {
    background: teal;
  }
`;
