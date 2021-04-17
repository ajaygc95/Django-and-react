import React from "react";
import { DynamicBoxContainer, DynamicWrapper } from "./DynamicBoxes.element";
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
