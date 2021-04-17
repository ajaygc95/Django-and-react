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
          <DynamicItem giveColor={giveColor}>This is item 1</DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
