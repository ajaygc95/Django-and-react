import styled from "styled-components";

export const ServicesContainer = styled.div``;

export const ServiceWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: ;
  grid-template-areas: "big big small";
  grid-template-rows: 400px 350px;
  max-width: 1300px;
  margin: auto;
  grid-column-gap: 20px;
  padding: 25px 15px;
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
  grid-area: big;
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 20px;
  background: #e2ede8;

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
  display: flex;
  flex-direction: column;
  padding: 20px;
  grid-area: small;
  background: black;
  color: white;
  align-items: center;
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

export const BoxContain = styled.div``;

export const ImageSection = styled.div`
  background: white;
  padding: 10px;
  /* margin-left: 20px; */
`;

export const ItemDef = styled.p`
  /* padding: 5px; */
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 25px;
`;

export const ButtonGrid = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 200px;
  height: 50px;
`;

export const FaIconRight = styled.div``;

export const ButtonContainer = styled.div`
  margin-top: 10px;
  align-self: flex-start;
`;
