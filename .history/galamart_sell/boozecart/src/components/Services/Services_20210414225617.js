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
  ItemDef,
  Image,
  ButtonGrid,
  FaIconRight,
} from "./Services.elements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServiceWrapper>
          <WrapperBoxMain>
            <BoxContain>
              <div>
                This is topLine
                <h1> This is hella header and need some space</h1>
                <ItemDef>
                  To view the CSS Grid that's affecting an element, hover over
                  an element in the DOM Tree of the Elements panel. A dashed
                  border appears around each of the grid items. This only works
                </ItemDef>
              </div>

              <ImageSection></ImageSection>
            </BoxContain>

            <ButtonGrid>
              Shop Now
              <FaIconRight>
                <FaArrowRight></FaArrowRight>
              </FaIconRight>
            </ButtonGrid>
          </WrapperBoxMain>
          <WrapperBoxSide>
            <BoxContain>
              <h1> LOOK FOR SOMETHING NEW IN THE AREA</h1>
            </BoxContain>
            <ButtonContainer>
              {" "}
              <ButtonGrid> Shop Now</ButtonGrid>
            </ButtonContainer>

            <Image src={girlcart}></Image>
          </WrapperBoxSide>
        </ServiceWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
