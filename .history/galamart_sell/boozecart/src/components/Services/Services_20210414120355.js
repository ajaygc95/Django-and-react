import React from "react";
import { Button } from "../../globalStyles";
import {
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
              <BoxContaint></BoxContaint>
            
            <Button>Shop Now </Button>
          </WrapperBoxMain>
          <WrapperBoxSide></WrapperBoxSide>
        </ServiceWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
