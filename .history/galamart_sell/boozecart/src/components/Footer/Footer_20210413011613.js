import React from "react";
import { FooterContainer } from "./Footer.element";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterSubscription>
          <FooterSubHeading>
            Sit home and relax and let us know if you have any conerns.
          </FooterSubHeading>
          <FooterSubText>You can unsubscribe at anytime</FooterSubText>
        </FooterSubscription>
      </FooterContainer>
    </>
  );
};

export default Footer;
