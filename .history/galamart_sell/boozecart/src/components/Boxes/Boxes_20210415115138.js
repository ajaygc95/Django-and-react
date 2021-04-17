import React from "react";
import {
  faHome,
  faCocktail,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Boxcontainer,
  BoxItems,
  BoxItems1,
  BoxItems2,
  BoxItems3,
  BoxWrapper,
  FontAwesomeStyle,
  TopLine,
  Address,
  ItemName,
  Heading,
} from "./Boxes.element";

const Boxes = () => {
  return (
    <>
      <Boxcontainer>
        <BoxWrapper>
          <BoxItems1>
            <TopLine>
              <h4> OPEN RIGHT NOW</h4>
            </TopLine>
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={faHome} />
            </FontAwesomeStyle>
            <Heading>This is heading MFs</Heading>
          </BoxItems1>
          <BoxItems2>
            <TopLine>
              <h4> OPEN RIGHT NOW</h4>
            </TopLine>
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={faCocktail} />
            </FontAwesomeStyle>
          </BoxItems2>
          <BoxItems3>
            <TopLine>
              <h4> OPEN RIGHT NOW</h4>
            </TopLine>
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={fa} />
            </FontAwesomeStyle>
          </BoxItems3>
        </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
