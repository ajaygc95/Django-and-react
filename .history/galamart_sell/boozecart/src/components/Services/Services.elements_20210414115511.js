import styled from "styled-components";

export const ServicesContainer = styled.div`
  border: 2px solid red;
`;

export const ServiceWrapper = styled.div`
  display: grid;
  margin-top: 40px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 40px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

export const WrapperBoxMain = styled.div`
  height: 400px;
  background: #ecebe1;
`;

export const WrapperBoxSide = styled.div`
  height: 400px;
  background: #9bc5d4;
`;
