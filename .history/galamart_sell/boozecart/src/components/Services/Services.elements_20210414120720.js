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
  height: 350px;
  color: #fff;
  padding: 40px;
  background: rgb(24, 126, 157);
  background: linear-gradient(
    90deg,
    rgba(24, 126, 157, 1) 0%,
    rgba(59, 165, 184, 1) 29%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const WrapperBoxSide = styled.div`
  height: 350px;
  width: 400px;
  background: rgb(41, 88, 162);
  background: linear-gradient(
    90deg,
    rgba(41, 88, 162, 1) 0%,
    rgba(72, 156, 226, 1) 100%
  );
`;

export const BoxContain = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr;
  color: white;
  margin-bottom: 20px;
`;

export const ImageSection = styled.div`
  back: #745bb9;
`;
