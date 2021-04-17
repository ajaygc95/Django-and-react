import styled from "styled-components";
import { Container } from "../../globalStyles";

export const DynamicBoxContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
  max-width: 1300px;
`;

export const DynamicWrapper = styled.div`
  display: grid;
  color: white;
  grid-template-columns: repeat(2, 1fr);
  height: 500px;
  grid-gap: 20px;
`;

export const DynamicItem = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;
