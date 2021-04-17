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
  font-family: sans-serif;
  font-size: 25px;
  color: ${({ giveColor }) => (giveColor ? "white" : "black")};
  text-align: center;
  margin-bottom: 20px;
`;
export const Subtitle = styled.p`
  font-family: sans-serif;
  padding: 40px;
  font-size: 15px;
  color: ${({ giveColor }) => (giveColor ? "white" : "black")};
`;
export const Heading = styled.h1`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
  font-size: 25px;
  padding: 0px 40px;
  color: ${({ giveColor }) => (giveColor ? "white" : "black")};
`;
