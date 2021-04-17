import React from "react";
import { Button } from "../../globalStyles";
import {
  DynamicBoxContainer,
  DynamicItem,
  DynamicWrapper,
  Subtitle,
  Topline,
  Heading,
} from "./DynamicBoxes.element";
const DynamicBoxes = ({ lightBg, topline }) => {
  return (
    <>
      <DynamicBoxContainer lightBg={lightBg}>
        <DynamicWrapper>
          <DynamicItem giveColor={true}>
            <Topline>BE A PARTNER</Topline>
            <Heading>Get a $100 reward card</Heading>
            <Subtitle>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Subtitle>
          </DynamicItem>
          <DynamicItem giveColor={false}>
            <Topline giveColor={true}>BE A DRIVER</Topline>
            <Heading giveColor={true}>
              Drive with with and earn upto $30 dollars an hour.
            </Heading>
            <Subtitle giveColor={true}>
              work in your own time when you are free and get some pocket money.
            </Subtitle>
            <Button></Button>
          </DynamicItem>
        </DynamicWrapper>
      </DynamicBoxContainer>
    </>
  );
};

export default DynamicBoxes;
