import React from "react";
import {
  DynamicBoxContainer,
  DynamicItem,
  DynamicWrapper,
  Topline,
} from "./DynamicBoxes.element";
const DynamicBoxes = ({ lightBg, topline }) => {
  return (
    <>
      <DynamicBoxContainer lightBg=}>
        <DynamicWrapper>
          <DynamicItem giveColor="false">
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
