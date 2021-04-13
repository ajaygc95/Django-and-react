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
                <Link tp="/sign-up">
                    <Button big fontBig primary=
                </Link>
              </TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
