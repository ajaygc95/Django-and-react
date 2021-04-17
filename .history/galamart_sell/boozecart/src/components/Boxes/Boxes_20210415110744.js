import React from "react";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Boxcontainer,
  BoxItems,
  BoxItems1,
  BoxItems2,
  BoxItems3,
  BoxWrapper,
} from "./Boxes.element";

const Boxes = () => {
  return (
    <>
      <Boxcontainer>
        <BoxWrapper>
          <BoxItems1>
           <FontAwesomeIcon icon='faHome'These are some text lool
          </BoxItems1>
          <BoxItems2>2</BoxItems2>
          <BoxItems3>3</BoxItems3>
        </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
