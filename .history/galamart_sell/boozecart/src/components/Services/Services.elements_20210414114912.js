import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: grid;
  border 2px solid red;
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  max-width: 1100px;
  margin: auto;
`;

export const WrapperBoxMain = styled.div`
  background: #ebd964;
`;

export const WrapperBoxSide = styled.div`
  background: blue;
`;
