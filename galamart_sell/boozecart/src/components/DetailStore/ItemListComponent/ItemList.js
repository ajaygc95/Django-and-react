import React from "react";
import bluelabel from "../../../images/bluelabel.png";
import modelo from "../../../images/Modelo.jpg";
import {
  ListNavContainer,
  ListItems,
  ListItemContainer,
  ListItemWrapper,
  ListItemWrapContainer,
  TopHeader,
  ItemCard,
  InnerCard,
  InnerHeader,
  InnerDescript,
  InnerItemImage,
  InnerPrice,
  InnerCardWrapper,
} from "./ItemList.element";

const ItemList = () => {
  return (
    <>
      <ListItemContainer>
        <ListItemWrapper>
          <ListNavContainer>
            <ListItems>Picked for you</ListItems>
            <ListItems>Featured Items</ListItems>
            <ListItems>Soft Drinks</ListItems>
            <ListItems>Hard Drinks</ListItems>
            <ListItems>Food</ListItems>
            <ListItems>Mixed Alcohol</ListItems>
          </ListNavContainer>
          <hr />
          <ListItemWrapContainer>
            <TopHeader>Most Popular</TopHeader>
            <ItemCard>
              <InnerCard>
                <InnerCardWrapper>
                  <InnerHeader>Modelo </InnerHeader>
                  <InnerDescript>( 750ml -- 5% alc )</InnerDescript>
                  <InnerPrice> $9.99</InnerPrice>
                </InnerCardWrapper>
                <InnerItemImage src={modelo}></InnerItemImage>
              </InnerCard>
              <InnerCard>
                <InnerCardWrapper>
                  <InnerHeader>Modelo </InnerHeader>
                  <InnerDescript>( 2500ml -- 5% alc )</InnerDescript>
                  <InnerPrice> $9.99</InnerPrice>
                </InnerCardWrapper>
                <InnerItemImage src={modelo}></InnerItemImage>
              </InnerCard>
              <InnerCard>
                <InnerCardWrapper>
                  <InnerHeader>Modelo </InnerHeader>
                  <InnerDescript>( 250ml -- 5% alc )</InnerDescript>
                  <InnerPrice> $9.99</InnerPrice>
                </InnerCardWrapper>
                <InnerItemImage src={modelo}></InnerItemImage>
              </InnerCard>
              <InnerCard>
                <InnerCardWrapper>
                  <InnerHeader>Modelo </InnerHeader>
                  <InnerDescript>( 250ml -- 5% alc )</InnerDescript>
                  <InnerPrice> $9.99</InnerPrice>
                </InnerCardWrapper>
                <InnerItemImage src={modelo}></InnerItemImage>
              </InnerCard>
            </ItemCard>
          </ListItemWrapContainer>
          <ListItemWrapContainer>
            <TopHeader>Feature Items</TopHeader>
            <ItemCard>
              <InnerCard>
                <InnerCardWrapper>
                  <InnerHeader>Jonnie Walker Blue Label</InnerHeader>
                  <InnerDescript>( 250ml -- 45% alc )</InnerDescript>
                  <InnerPrice> $9.99</InnerPrice>
                </InnerCardWrapper>
                <InnerItemImage src={bluelabel}></InnerItemImage>
              </InnerCard>
              <InnerCard>
                <InnerCardWrapper>
                  <InnerHeader>Jonnie Walker Blue Label</InnerHeader>
                  <InnerDescript>( 750ml -- 45% alc )</InnerDescript>
                  <InnerPrice> $199.99</InnerPrice>
                </InnerCardWrapper>
                <InnerItemImage src={bluelabel}></InnerItemImage>
              </InnerCard>
              <InnerCard>
                <InnerCardWrapper>
                  <InnerHeader>Jonnie Walker Blue Label</InnerHeader>
                  <InnerDescript>( 750ml -- 45% alc )</InnerDescript>
                  <InnerPrice> $199.99</InnerPrice>
                </InnerCardWrapper>
                <InnerItemImage src={bluelabel}></InnerItemImage>
              </InnerCard>
              <InnerCard>
                <InnerCardWrapper>
                  <InnerHeader>Jonnie Walker Blue Label</InnerHeader>
                  <InnerDescript>( 750ml -- 45% alc )</InnerDescript>
                  <InnerPrice> $199.99</InnerPrice>
                </InnerCardWrapper>
                <InnerItemImage src={bluelabel}></InnerItemImage>
              </InnerCard>
            </ItemCard>
          </ListItemWrapContainer>
        </ListItemWrapper>
      </ListItemContainer>
    </>
  );
};

export default ItemList;
