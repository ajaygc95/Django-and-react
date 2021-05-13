import React from "react";
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
  return (
    <>
      <DetailViewContainer>
        <DetailViewImageContainer>
          <ImageContainer>
            <Image src={girlcart}></Image>
          </ImageContainer>
          <ImageWrapper>
            <StoreHeader>Galamart</StoreHeader>
            <ToplineWrapper>
              <StoreCard>Liquor Store</StoreCard>
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
