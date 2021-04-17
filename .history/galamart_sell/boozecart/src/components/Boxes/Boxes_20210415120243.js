import React from "react";
import {
  faHome,
  faCocktail,
  faShoppingBasket,
  faWineGlass,
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
              <h4>Santa Clara</h4>
            </TopLine>
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={faWineGlass} />
            </FontAwesomeStyle>
            <Heading>Galamart</Heading>
            <Address> 123 El Camino Real, Santa Clara</Address>
          </BoxItems1>
          <BoxItems2>
          <TopLine>
              <h4>Santa Clara</h4>
            </TopLine>
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={faWineGlass} />
            </FontAwesomeStyle>
            <Heading>Galamart</Heading>
            <Address> 123 El Camino Real, Santa Clara</Address>
          </BoxItems2>
          <BoxItems3>
            <TopLine>
              <h4>Mountain View</h4>
            </TopLine>
            <FontAwesomeStyle>
              <FontAwesomeIcon icon={faShoppingBasket} />
            </FontAwesomeStyle>
          </BoxItems3>
        </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
