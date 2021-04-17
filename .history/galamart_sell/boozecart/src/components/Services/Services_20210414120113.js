import React from "react";
import { ServicesContainer, ServiceWrapper, WrapperBoxMain, WrapperBoxSide } from "./Services.elements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServiceWrapper>
          <WrapperBoxMain>
              This is topLine
              <h1> This is hella header and need some space</h1>
              <p> </p>
          </WrapperBoxMain>
          <WrapperBoxSide></WrapperBoxSide>
        </ServiceWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
