import React from "react";
import { Button } from "../../globalStyles";
import {
  BoxContain,
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
              This is topLine
              <h1> This is hella header and need some space</h1>
              <p>
                To view the CSS Grid that's affecting an element, hover over an
                element in the DOM Tree of the Elements panel. A dashed border
                appears around each of the grid items. This only works when the
                selected item, or the parent of the selected item, has
                display:grid applied to it.
              </p>
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
