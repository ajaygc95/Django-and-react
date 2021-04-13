import React from "react";
import { Container } from "../../globalStyles";
import { InfoSec } from "./InfoSection.element";

const InfoSection = (lightBg) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
          <Container>
              <InfoRow imgStart={imgStart}>
                  <InfoColumn>
                      
                  </InfoColumn>
              </InfoRow>
          </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
