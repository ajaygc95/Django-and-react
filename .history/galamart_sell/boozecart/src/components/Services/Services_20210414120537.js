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
              <div></div>
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
