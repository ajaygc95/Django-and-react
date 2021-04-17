import React from "react";
import {
  DynamicBoxContainer,
  DynamicItem,
  DynamicWrapper,
  Topline,
} from "./DynamicBoxes.element";
const DynamicBoxes = ({ giveColor, lightBg, topline }) => {
  return (
    <>
      <DynamicBoxContainer lightBg={lightBg}>
        <DynamicWrapper>
          <DynamicItem giveColor={giveColor}>
            <Topline>{topline.toUpperCase()}</Topline>
          </DynamicItem>
          <DynamicItem giveColor="true">
            <Topline>{topline.toUpperCase()}</Topline>
          </DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
