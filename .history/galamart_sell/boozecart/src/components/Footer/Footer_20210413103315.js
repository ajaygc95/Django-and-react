import React from "react";
import { Button } from "../../globalStyles";
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
} from "./Footer.element";

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
                <FooterLink to='/sign-up'>Testimonial</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>Testimonial</FooterLink>
                <FooterLink to='/'>Testimonial</FooterLink>
                <FooterLink to='/'>Testimonial</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
