import React from "react";
import girlcart from "../../images/cart_girl.svg";
import superwomen from "../../images/super_women.svg";
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
  ImageMain,
  Image,
  ButtonGrid,
  FaIconRight,
  ButtonContainer,
  TopLine,
  Heading,
  Subtitle,
  ButtonMainContainer,
} from "./Services.elements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServiceWrapper>
          <WrapperBoxMain>
            <BoxMainContain>
              <TopLine lightTopLine="true">
                Claim your first free delivary
              </TopLine>
              <Heading> This is hella header and need some space</Heading>
              <Subtitle>
                To view the CSS Grid that's affecting an element, hover over an
                element in the DOM Tree of the Elements panel. A dashed border
                appears around each of the grid items. This only works
              </Subtitle>
              <ButtonMainContainer>
                <ButtonGrid yesblue="true">
                  Shop Now
                  <FaIconRight>
                    <FaArrowRight></FaArrowRight>
                  </FaIconRight>
                </ButtonGrid>
              </ButtonMainContainer>
            </BoxMainContain>
            <ImageSection>
              <ImageMain src={superwomen}></ImageMain>
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
            <ImageSide></ImageSide>
            
          </WrapperBoxSide>
        </ServiceWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
