import React from "react";
import Video from "../../videos/Video.mp4";
import { HeroBg, VideoBg } from "./HereElement";
import "./HeroPage.css";

function HeroPage() {
  return (
    <>
      <div className="hero-container">
        <HeroBg>
          {/* <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg> */}
        </HeroBg>
        <h1>This is HeroPage</h1>
        <button className="btn btn-success">Click Me</button>
      </div>
    </>
  );
}

export default HeroPage;
