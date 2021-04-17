import React from "react";
import {
  DynamicBoxContainer,
  DynamicItem,
  DynamicWrapper,
} from "./DynamicBoxes.element";
const DynamicBoxes = () => {
  return (
    <>
      <DynamicBoxContainer lightBg="true">
        <DynamicWrapper>
          <DynamicItem>This is item 1</DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
