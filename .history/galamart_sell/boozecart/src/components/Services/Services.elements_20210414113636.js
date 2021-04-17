import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: grid;
  height: 500px;
  border 2px solid red;
`;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 2f 1f;
  border: 2px solid blue;
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: auto;
`;

export const WrapperBoxMain = styled.div`
  background: #ebd964;
`;

export const WrapperBoxSide = styled.div`
  background: blue;
`;
