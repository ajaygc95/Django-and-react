import React from "react";
import {
  DynamicBoxContainer,
  DynamicItem,
  DynamicWrapper,
} from "./DynamicBoxes.element";
const DynamicBoxes = ({ giveColor, lightBg }) => {
  return (
    <>
      <DynamicBoxContainer lightBg="true">
        <DynamicWrapper>
          <DynamicItem giveColor={giveColor}>This is item 1</DynamicItem>
          <DynamicItem>This is item 2</DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
