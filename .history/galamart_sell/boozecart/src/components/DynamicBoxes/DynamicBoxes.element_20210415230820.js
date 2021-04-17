import styled from "styled-components";
import { Container } from "../../globalStyles";

export const DynamicBoxContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
  max-width: 1300px;
  margin: auto;
  margin-bottom: 20px;
`;

export const DynamicWrapper = styled.div`
  background: white;
  display: grid;
  color: white;
  grid-template-columns: repeat(2, 1fr);
  height: 500px;
  grid-gap: 20px;
`;

export const DynamicItem = styled.div`
  padding: 20px;
  background: ${({ giveColor }) => (giveColor ? "#ced7de" : "#a959f0")};
`;

export const Topline = styled.div`
  font-size: 20px;
  color: ${({ giveColor }) => (giveColor ? "#ced7de" : "#a959f0")};
  text-align: center;
`;
