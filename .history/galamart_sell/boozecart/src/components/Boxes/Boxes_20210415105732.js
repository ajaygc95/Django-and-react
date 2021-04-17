import React from "react";
import { Boxcontainer, BoxItems, BoxWrapper } from "./Boxes.element";

const Boxes = () => {
  return (
    <>
      <Boxcontainer>
        <BoxWrapper>
          <BoxItems1>1</BoxItems1>
          <BoxItem2>2</BoxItem2>
          <BoxItem3>3</BoxItem3>
        </BoxWrapper>
      </Boxcontainer>
    </>
  );
};

export default Boxes;
