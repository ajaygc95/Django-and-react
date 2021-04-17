import styled from "styled-components";
import { Container } from "../../globalStyles";

export const DynamicBoxContainer = styled(Container)`
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const DynamicWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 500px;
  grid-gap: 20px;
`;

export const DynamicItem = styled.div`
  background: 
`;
