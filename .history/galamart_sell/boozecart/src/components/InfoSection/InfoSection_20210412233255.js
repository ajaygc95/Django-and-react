import React from "react";
import { Container } from "../../globalStyles";
import { InfoSec } from "./InfoSection.element";

const InfoSection = (lightBg) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
          <Container>
              <Info
          </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
