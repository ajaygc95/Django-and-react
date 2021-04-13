import React from "react";
import { video } from "./Hero";
import { HeroBg, VideoBg } from "./HereElement";
import "./HeroPage.css";

function HeroPage() {
  return (
    <>
      <div className="hero-container">
        <HeroBg>
          <VideoBg autoPlay loop muted src={video} type="video/mp4"></VideoBg>
        </HeroBg>
        <h1>This is HeroPage</h1>
        <button className="btn btn-success">Click Me</button>
      </div>
    </>
  );
}

export default HeroPage;
