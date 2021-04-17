import React from "react";
import { Button } from "../../globalStyles";
import {
  BoxContain,
  ImageSection,
  ServicesContainer,
  ServiceWrapper,
  WrapperBoxMain,
  WrapperBoxSide,
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

              <ImageSection> This is picture section</ImageSection>
            </BoxContain>

            <Button>Shop Now </Button>
          </WrapperBoxMain>
          <WrapperBoxSide></WrapperBoxSide>
        </ServiceWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
