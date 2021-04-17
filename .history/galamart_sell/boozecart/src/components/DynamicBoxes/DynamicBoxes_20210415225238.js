import React from "react";
import {
  DynamicBoxContainer,
  DynamicItem,
  DynamicWrapper,
} from "./DynamicBoxes.element";
const DynamicBoxes = ({ giveColor, lightBg }) => {
  return (
    <>
      <DynamicBoxContainer lightBg={lightBg}>
        <DynamicWrapper>
          <DynamicItem giveColor={giveColor}>}</DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
