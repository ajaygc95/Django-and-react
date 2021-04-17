import styled from "styled-components";
import { Container } from "../../globalStyles";

export const ServicesContainer = styled.div``;

export const ServiceWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: ;
  grid-template-areas: "big big small";
  grid-template-rows: 450px;
  max-width: 1300px;
  margin: auto;
  grid-column-gap: 20px;
  padding: 25px 10px;
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

export const BoxContain = styled.div``;
export const BoxMainContain = styled.div``;
export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "balck" : "#4b59f7")};
  font-size: 16px;
  line-height: 14px;
  letter-spacing: 1.2px;
  margin-bottom: 30px;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 42px;
  line-height: 1;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Subtitle = styled.p`
margin
  font-size: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "white" : "#1c2237")};
`;

export const WrapperBoxSide = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: small;
  background: #2787cc;
  color: white;
  align-items: center;
  padding: 20px;
`;

export const ImageSection = styled.div`
  padding: 10px;
  /* margin-left: 20px; */
`;

export const ItemDef = styled.p`
  /* padding: 5px; */
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
`;

export const ImageSide = styled.div`
  margin-top: 40px;
`;

export const ImageMain = styled.img`
  width: 250px;
  height: 300px;
  margin-top: 25px;
`;

export const ButtonGrid = styled.button`
  background: ${({ yesblue }) => (yesblue ? "#2fa4d6" : "")};
  color: ${({ yesblue }) => (yesblue ? "#f0f5f7" : "")};
  border: ${({ yesblue }) => (yesblue ? "none" : "")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 200px;
  height: 50px;

  &:hover {
    background: ${({ yesblue }) => (yesblue ? "#258eba" : "black")};
    color: white;
    border: none;
  }
`;

export const FaIconRight = styled.div``;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  align-self: flex-start;
`;

export const ButtonMainContainer = styled.div`
  margin-top: 30px;
`;
