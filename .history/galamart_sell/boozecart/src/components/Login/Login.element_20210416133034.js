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
  display: grid;
  width: 80%;
  align-self: center;
  grid-gap: 20px;

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
  margin: auto;
  background: blue;
  color: red;
`;

export const SocialLabel = styled.div`
  color: white;
`;
