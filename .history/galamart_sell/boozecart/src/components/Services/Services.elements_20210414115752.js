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
  background: rgb(24, 126, 157);
  background: linear-gradient(
    90deg,
    rgba(24, 126, 157, 1) 0%,
    rgba(59, 165, 184, 1) 29%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const WrapperBoxSide = styled.div`
  height: 400px;
  background: rgb(126, 135, 150);
  background: linear-gradient(
    90deg,
    rgba(126, 135, 150, 1) 0%,
    rgba(133, 201, 212, 1) 38%,
    rgba(138, 211, 226, 1) 100%
  );
`;
