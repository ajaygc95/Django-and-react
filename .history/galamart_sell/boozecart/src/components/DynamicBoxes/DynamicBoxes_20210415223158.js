import React from "react";
import { DynamicBoxContainer, DynamicWrapper } from "./DynamicBoxes.element";
const DynamicBoxes = () => {
  return (
    <>
      <DynamicBoxContainer lightbg="true">
        <DynamicWrapper>
          <h1> This is dynamic box creater</h1>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
