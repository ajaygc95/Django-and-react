import styled from "styled-components";

export const ServicesContainer = styled.div``;

export const ServiceWrapper = styled.div`
  height: 50vh;
  border: 2px solid blue;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: ;
  grid-template-areas: "big big small";
  max-width: 1100px;
  margin: auto;
  /* border: 2px blue solid;
  display: grid;
  margin-top: 40px;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto; */
`;

export const WrapperBoxMain = styled.div`
  background: 
  grid-area: big;

  /* background: rgb(24, 126, 157);
  background: linear-gradient(
    90deg,
    rgba(24, 126, 157, 1) 0%,
    rgba(59, 165, 184, 1) 29%,
    rgba(0, 212, 255, 1) 100%
  ); */

  /* height: 400px;
  color: #fff;
  padding: 40px;

  border-radius: 5px; */
`;

export const WrapperBoxSide = styled.div`
  grid-area: small;
  background: #a8b9b1;
  /* background: rgb(41, 88, 162); */
  /* background: linear-gradient(
    90deg,
    rgba(41, 88, 162, 1) 0%,
    rgba(72, 156, 226, 1) 100%
  ); */
  /* height: 400px;
  width: 400px;

  padding: 20px;

  align-items: center;
  border-radius: 5px; */
`;

export const BoxContain = styled.div`
  /* display: grid;

  grid-template-columns: 2fr 2fr;
  color: white;
  margin-bottom: 20px; */
`;

export const ImageSection = styled.div`
  /* margin-left: 20px; */
`;

export const ItemDef = styled.p`
  /* padding: 5px; */
`;
