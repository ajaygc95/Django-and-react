import styled from "styled-components";
import { Container } from "../../globalStyles";
export const MainContainer = styled.div`
  max-width: 1500px;
  margin: auto;
`;

export const TypeCircleContainer = styled.div`
  padding-top: 15px;
  height: 150px;
  display: flex;
  justify-content: space-around;
`;
export const CircleBoxWrapper = styled.div`

`;

export const FontAwesomeWrapper = styled.div`
  text-align: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;

  &:hover {
    transition: 0.5s all ease-out;
    background: #cae8d2;
  }
`;

export const Image = styled.img`
  margin-top: 10px;
  height: 60px;
  width: 60px;
`;

export const LinkWrapper = styled.div`
  width: 80px;
  text-align: center;
  margin-top: 10px;
  font-size: 15px;
  text-decoration: none;
`;

export const Linker = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 12px;

  &:hover {
    cursor: pointer;
    color: #2474b5;
    text-decoration: underline;
  }
`;
