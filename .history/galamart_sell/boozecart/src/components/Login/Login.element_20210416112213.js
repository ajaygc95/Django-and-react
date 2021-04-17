import styled from "styled-components";
import { Button, Container } from "../../globalStyles";

export const LoginContainer = styled(Container)`
  height: 70vh;
`;

export const LoginWrapper = styled.div`
  position: relative;
  border: 2px solid red;
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
margin`;
