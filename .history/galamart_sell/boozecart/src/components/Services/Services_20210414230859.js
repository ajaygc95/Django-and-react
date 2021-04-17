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

} from "./Services.elements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServiceWrapper>
          <WrapperBoxMain>
            <BoxMainContain>
              <TopL>
                This is topLine
                <h1> This is hella header and need some space</h1>
                <ItemDef>
                  To view the CSS Grid that's affecting an element, hover over
                  an element in the DOM Tree of the Elements panel. A dashed
                  border appears around each of the grid items. This only works
                </ItemDef>
              </TopL>

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
