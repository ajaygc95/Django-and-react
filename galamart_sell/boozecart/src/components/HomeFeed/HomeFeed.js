import React, { useState, useEffect } from "react";
import girlcart from "../../images/alcohol.jpg";
import {
  BoxWrapper,
  HomeFeedBox,
  HomeFeedBox1,
  HomeFeedContainer,
  HomeFeedWrapper,
  HeaderTitle,
  HomeImage,
  ImageWrapper,
  ItemDetails,
  ContainerWrapper,
  Circle,
  CircleWrapper,
  FinalLink,
} from "./HomeFeed.element";

function HomeFeed() {
  const [dataItems, setDataItems] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${Token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDataItems(data);
        console.log("This is console" + data.token);
      })
      .catch(function (error) {});
  }, []);

  // const dataItems = [
  //   {
  //     id: 1,
  //     title: "Galamart ",
  //     description: "Convinient Liqour Store",
  //     completed: true,
  //     alt: "Image",
  //     img: require("../../images/alcohol.jpg"),
  //   },
  //   {
  //     id: 2,
  //     title: "Madras Cafe",
  //     description: "Indian Store",
  //     completed: false,
  //     alt: "Image",
  //     img: require("../../images/food1.jpg"),
  //   },
  //   {
  //     id: 3,
  //     title: "McDonalds",
  //     description: "Burger Place",
  //     completed: false,
  //     alt: "Image",
  //     img: require("../../images/food2.jpg"),
  //   },
  //   {
  //     id: 3,
  //     title: "Taqueria",
  //     description: "Burrito",
  //     completed: false,
  //     alt: "Image",
  //     img: require("../../images/food3.jpg"),
  //   },
  //   {
  //     id: 3,
  //     title: "Everest Momo",
  //     description: "Nepali Cuisine",
  //     completed: false,
  //     alt: "Image",
  //     img: require("../../images/food4.jpg"),
  //   },
  // ];
  return (
    <>
      <HomeFeedContainer>
        <ContainerWrapper>
          <HeaderTitle>
            <h2>Best Rated places near you</h2>
          </HeaderTitle>
          <HomeFeedWrapper>
            {dataItems.map((dataitem) => (
              <BoxWrapper>
                <ImageWrapper>
                  <HomeImage
                    // src={dataitem.img.default}
                    alt={dataitem.alt}
                  ></HomeImage>
                </ImageWrapper>
                <ItemDetails>
                  <HomeFeedBox1>
                    <li>
                      <h3>{dataitem.title}</h3>
                    </li>
                    <CircleWrapper>
                      <Circle>4.5</Circle>
                    </CircleWrapper>
                  </HomeFeedBox1>

                  {/* <HomeFeedBox>
                    <li>{dataitem.description}</li>
                  </HomeFeedBox>
                  <HomeFeedBox>
                    {dataitem.completed ? (
                      <li>Home Delivary</li>
                    ) : (
                      <li> Only Pickup</li>
                    )}
                  </HomeFeedBox> */}
                </ItemDetails>
              </BoxWrapper>
            ))}
            <FinalLink>
              <li>See all</li>
            </FinalLink>
          </HomeFeedWrapper>
        </ContainerWrapper>
      </HomeFeedContainer>
    </>
  );
}

export default HomeFeed;
