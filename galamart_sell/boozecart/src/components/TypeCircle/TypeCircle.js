import React from "react";
import { Link } from "react-router-dom";
import {
  TypeCircleContainer,
  CircleBoxWrapper,
  FontAwesomeWrapper,
  LinkWrapper,
  Image,
  MainContainer,
  Linker,
} from "./TypeCircle.element";

const TypeCircle = () => {
  const dataItems = [
    {
      id: 1,
      type: "Deals",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/deals.png"),
    },
    {
      id: 1,
      type: "Indian",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/indian.png"),
    },
    {
      id: 1,
      type: "Chinese",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/chinese.png"),
    },
    {
      id: 1,
      type: "Italian",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/italian.png"),
    },
    {
      id: 1,
      type: "American",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/american.png"),
    },
    {
      id: 1,
      type: "Nepalese",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/indian.png"),
    },
    {
      id: 1,
      type: "Bubble Tea",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/bubbletea.png"),
    },
    {
      id: 1,
      type: "Mexican",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/mexican.png"),
    },
    {
      id: 1,
      type: "Healthy",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/healthy.png"),
    },
    {
      id: 1,
      type: "Arabic",
      fonticon: "faHome",
      alt: "Image",
      img: require("../../images/italian.png"),
    },
  ];
  return (
    <>
      <MainContainer>
        <TypeCircleContainer>
          {dataItems.map((dataitem) => (
            <CircleBoxWrapper>
              <FontAwesomeWrapper>
                <Image src={dataitem.img.default}></Image>
              </FontAwesomeWrapper>
              <LinkWrapper>
                <Linker to="home-feed">{dataitem.type}</Linker>
              </LinkWrapper>
            </CircleBoxWrapper>
          ))}
        </TypeCircleContainer>
        <hr></hr>
      </MainContainer>
    </>
  );
};

export default TypeCircle;
