import styled from "styled-components";
import { Container } from "../../globalStyles";

export const DynamicBoxContainer = styled(Container)`
  border: 2px blue solid;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const DynamicWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr)
`;

export const DynamicItem = styled.div`
  background: orange;
`;
