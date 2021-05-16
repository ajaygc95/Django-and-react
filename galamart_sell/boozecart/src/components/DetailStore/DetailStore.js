import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  DetailViewContainer,
  DetailViewImageContainer,
  Image,
  ImageContainer,
  ImageWrapper,
  StoreHeader,
  StoreCard,
  ToplineWrapper,
  FaItems,
  PriceDetails,
  PriceDetailInnerWrapper,
  PriceDetail,
  PriceDetail1,
  PriceDetail2,
  ListNavContainer,
  ListItems,
} from "./DetailStore.element";
import girlcart from "../../images/detailsview.jpg";
import { FaRegStar } from "react-icons/fa";

const DetailStore = () => {
  const { id } = useParams();
  const [detailItems, setDetailsItems] = useState([]);
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/todo/todos/${id}`)
      .then((res) => {
        console.log(res);
        setDetailsItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <DetailViewContainer>
        <DetailViewImageContainer>
          <ImageContainer>
            <Image src={detailItems.cover}></Image>
          </ImageContainer>
          <ImageWrapper>
            <StoreHeader>{detailItems.title}</StoreHeader>
            <ToplineWrapper>
              <StoreCard>{detailItems.description}</StoreCard>
              <StoreCard>
                4.7
                <FaItems>
                  <FaRegStar></FaRegStar>
                </FaItems>
              </StoreCard>
              <StoreCard>(2700+ ratings)</StoreCard>
              <StoreCard>1.5mi. </StoreCard>
              <StoreCard>$ </StoreCard>
            </ToplineWrapper>

            <PriceDetails>
              <PriceDetailInnerWrapper>
                <PriceDetail1>$3.99</PriceDetail1>
                <PriceDetail2>Delivary fee</PriceDetail2>
              </PriceDetailInnerWrapper>
              <PriceDetailInnerWrapper>
                <PriceDetail1>12-23</PriceDetail1>
                <PriceDetail2>minutes</PriceDetail2>
              </PriceDetailInnerWrapper>
            </PriceDetails>
          </ImageWrapper>
        </DetailViewImageContainer>
      </DetailViewContainer>
    </>
  );
};

export default DetailStore;
