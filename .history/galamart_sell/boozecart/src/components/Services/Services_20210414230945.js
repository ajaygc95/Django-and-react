import React from "react";
import { Button } from "../../globalStyles";
import girlcart from "../../images/cart_girl.svg";
import { FaArrowRight } from "react-icons/fa";
import {
  BoxContain,
  ImageSection,
  ServicesContainer,
  ServiceWrapper,
  WrapperBoxMain,
  WrapperBoxSide,
  BoxMainContain,
  ItemDef,
  Image,
  ButtonGrid,
  FaIconRight,
  ButtonContainer,
  TopLine,
  Heading,
  Subtitle,
} from "./Services.elements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServiceWrapper>
          <WrapperBoxMain>
            <BoxMainContain>
              <TopLine>
                This is topLine
                <Heading> This is hella header and need some space</Heading>
                <Subtitle>
                  To view the CSS Grid that's affecting an element, hover over
                  an element in the DOM Tree of the Elements panel. A dashed
                  border appears around each of the grid items. This only works
                </Subtitle>
              </TopLine>

              <ButtonGrid>
                Shop Now
                <FaIconRight>
                  <FaArrowRight></FaArrowRight>
                </FaIconRight>
              </ButtonGrid>
            </BoxMainContain>
            <ImageSection>
              <Image src={girlcart}></Image>
            </ImageSection>
          </WrapperBoxMain>
          <WrapperBoxSide>
            <BoxContain>
              <h1> LOOK FOR SOMETHING NEW IN THE AREA</h1>
            </BoxContain>
            <ButtonContainer>
              <ButtonGrid>
                Shop Now
                <FaIconRight>
                  <FaArrowRight></FaArrowRight>
                </FaIconRight>
              </ButtonGrid>
            </ButtonContainer>

            <Image src={girlcart}></Image>
          </WrapperBoxSide>
        </ServiceWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
