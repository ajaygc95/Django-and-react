import React from "react";
import { faHome, faCocktail } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Boxcontainer,
  BoxItems,
  BoxItems1,
  BoxItems2,
  BoxItems3,
  BoxWrapper,
  FontAwesomeStyle,
  Topline,
} from "./Boxes.element";

const Boxes = () => {
  return (
    <>
      <Boxcontainer>
        <BoxWrapper>
          <BoxItems1>
            <TopLine>This is Topline</TopLine>
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={faHome} />
            </FontAwesomeStyle>
            These are some text lool
          </BoxItems1>
          <BoxItems2>
            <TopLine>This is Topline</TopLine>
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={faCocktail} />
            </FontAwesomeStyle>
          </BoxItems2>
          <BoxItems3>3</BoxItems3>
        </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
