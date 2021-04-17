import React from "react";
import { DynamicBoxContainer, DynamicItem, DynamicWrapper } from "./DynamicBoxes.element";
const DynamicBoxes = () => {
  return (
    <>
      <DynamicBoxContainer lightBg="true">
        <DynamicWrapper>
          <DynamicItem></DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
