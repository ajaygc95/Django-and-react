import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoColumn,
  InfoRow,
  InfoSec,
  TextWrapper,
} from "./InfoSection.element";

const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightText={lightTextDesc}>{description}</Subtitle>
                <Lingk tp="/sign-up"></Lingk>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
