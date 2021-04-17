import React from "react";
import { ServicesContainer, ServiceWrapper, WrapperBoxMain, WrapperBoxSide } from "./Services.elements";

const Services = () => {
  return (
    <>
      <ServicesContainer>
        <ServiceWrapper>
          <WrapperBoxMain></WrapperBoxMain>
          <WrapperBoxSide></WrapperBoxSide>
        </ServiceWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
