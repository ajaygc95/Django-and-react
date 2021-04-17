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
} from "./Boxes.element";

const Boxes = () => {
  return (
    <>
      <Boxcontainer>
        <BoxWrapper>
          <Boxitem>
            <BoxItems1>
              <FontAwesomeIcon icon={faHome} />
              These are some text lool
            </BoxItems1>
            <BoxItems2>
              <FontAwesomeIcon icon={faCocktail} />
            </BoxItems2>
            <BoxItems3>3</BoxItems3>
          </Boxitem>
        </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
