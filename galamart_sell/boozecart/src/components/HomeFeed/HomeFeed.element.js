import styled from "styled-components";
import { Container } from "../../globalStyles";

export const HomeFeedContainer = styled.div`
  max-width: 1500px;
  margin: auto;
  margin-top: 50px;
`;

export const ContainerWrapper = styled.div``;

export const HomeFeedWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  align-items: center;
`;

export const BoxWrapper = styled.div`
  /* border: 2px solid red; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: 150px;
  grid-gap: 20px;
`;

export const HeaderTitle = styled.div`
  font-size: 25px;
  margin-bottom: 30px;
`;

export const HomeFeedBox1 = styled.div`
  /* background: orange; */
  padding-top: 5px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-family: Calibri;
  margin-bottom: 30px;
`;

export const HomeFeedBox = styled.div`
  list-style: none;
  color: #666e66;
  margin-bottom: 5px;
`;

export const ImageWrapper = styled.div`
  border: 2px solid orange;
  align-self: flex-start;
`;
export const ItemDetails = styled.div`
  width: 100%;
  height: 100%;
`;

export const HomeImage = styled.img`
  width: 275px;
  height: 130px;
`;

export const CircleWrapper = styled.div``;

export const Circle = styled.div`
  display: inline-block;
  background: #dadbe0;
  text-align: center;
  height: 30px;
  width: 30px;
  font-size: 12px;
  font-weight: bold;
  line-height: 20px;
  padding: 5px;
  border-radius: 50%;
`;

export const FinalLink = styled.a``;
