import styled from "styled-components";

export const ServicesContainer = styled.div`
  border: 2px solid red;
`;

export const ServiceWrapper = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-space: 10px;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
`;

export const WrapperBoxMain = styled.div`
  height: 400px;
  background: #ebd964;
`;

export const WrapperBoxSide = styled.div`
  height: 400px;
  background: blue;
`;
