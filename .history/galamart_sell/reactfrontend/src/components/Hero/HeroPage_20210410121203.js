import React from "react";
import Video from "../../videos/Video.mp4";
import { HeroBg, VideoBg } from "./HereElement";
import "./HeroPage.css";

function HeroPage() {
  return (
    <>
      <h1>This is HeroPage</h1>
      <VideoBg>This is video BG</VideoBg>

      </>
      //{" "}
      <div className="hero-container">
        // <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
        //{" "}
        {/* <video src={Video} autoPlay="true" loop="true" type="video/mp4"></video> */}
        // <h1>This is HeroPage</h1>
        // <button className="btn btn-success">Click Me</button>
        //{" "}
      </div>

  );
}

export default HeroPage;
