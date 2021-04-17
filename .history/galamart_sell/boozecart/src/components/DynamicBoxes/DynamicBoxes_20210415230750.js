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
      <DynamicBoxContainer lightBg={lightBg}>
        <DynamicWrapper>
          <DynamicItem giveColor={true}>
            <Topline>Be </Topline>
          </DynamicItem>
          <DynamicItem giveColor={false}>
            <Topline>Be A Driver</Topline>
          </DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
