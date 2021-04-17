import styled from "styled-components";
import { Container } from "../../globalStyles";

export const DynamicBoxContainer = styled(Container)`
  border: 2px blue solid;
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const DynamicWrapper = styled.div`
  color: red;
`;

export const DynamicItem = styled.div
