import styled from "styled-components";
import { Container } from "../../globalStyles";

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
  justify-cont
  max-width: 500px;
  padding: 40px;
  position: absolute;
  border: 2px solid blue;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
`;
