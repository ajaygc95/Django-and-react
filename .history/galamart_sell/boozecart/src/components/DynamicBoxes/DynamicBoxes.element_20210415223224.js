import styled from "styled-components";

export const DynamicBoxContainer = styled.div`
border: 
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const DynamicWrapper = styled.div`
  color: red;
`;
