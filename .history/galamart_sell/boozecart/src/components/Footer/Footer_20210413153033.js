import React from "react";
import { Button } from "../../globalStyles";
import { FaBar } from "react-icons/fa";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
} from "./Footer.element";
import {
  SocialIcon,
  SocialIconLink,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "../NavBar/Navbar.element";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Sit home and relax and let us know if you have any conerns.
          </FooterSubHeading>
          <FooterSubText>You can unsubscribe at anytime</FooterSubText>
          <Form>
            <FormInput
              name="email"
              type="email"
              placeholder="Your emial address"
            ></FormInput>
            <Button primary>Subscribe</Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/sign-up">Testimonial</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Drive with us</FooterLink>
              <FooterLink to="/">Partner with us</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/sign-up">Testimonial</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Drive with us</FooterLink>
              <FooterLink to="/">Partner with us</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/sign-up">Testimonial</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Drive with us</FooterLink>
              <FooterLink to="/">Partner with us</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/sign-up">Testimonial</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Drive with us</FooterLink>
              <FooterLink to="/">Partner with us</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">
              <SocialIcon>ULTRA</SocialIcon>
              <WebsiteRights>ULTRA 2020</WebsiteRights>
              <SocialIcon>
                <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                  <FaBar>{FaBar}</FaBar>
                </SocialIconLink>
              </SocialIcon>
            </SocialLogo>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterContainer>
    </>
  );
};

export default Footer;
