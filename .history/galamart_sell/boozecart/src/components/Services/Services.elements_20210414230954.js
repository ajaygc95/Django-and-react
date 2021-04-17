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
`;

export const WrapperBoxSide = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  grid-area: small;
  background: black;
  color: white;
  align-items: center;
`;

export const BoxContain = styled.div``;
export const BoxMainContain = styled.div`
  background-color: red;
`;

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
  margin-top: 15px;
  align-self: flex-start;
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4b59f7")};
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
  margin-bottom: 100px;
  font-size: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "white" : "#1c2237")};
`;
