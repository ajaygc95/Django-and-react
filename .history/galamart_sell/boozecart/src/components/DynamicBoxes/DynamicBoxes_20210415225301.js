import React from "react";
import {
  DynamicBoxContainer,
  DynamicItem,
  DynamicWrapper,
} from "./DynamicBoxes.element";
const DynamicBoxes = ({ giveColor, lightBg,topline }) => {
  return (
    <>
      <DynamicBoxContainer lightBg={lightBg}>
        <DynamicWrapper>
          <DynamicItem giveColor={giveColor}>
            <TopLine>{topline}</TopLine>
          </DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
