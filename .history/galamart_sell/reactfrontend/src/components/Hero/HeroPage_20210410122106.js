import React from "react";
import alcohol from "../../videos/alcohol.jpg";
import { HeroBg, VideoBg } from "./HereElement";
import "./HeroPage.css";

function HeroPage() {
  return (
    <>
      <div className="hero-container">
        <h1>This is HeroPage</h1>
        <img src={alcohol} type="image"></img>
      </div>
    </>
    //{" "}
    // <div className="hero-container">
    //   // <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
    //   //{" "}
    //   {/* <video src={Video} autoPlay="true" loop="true" type="video/mp4"></video> */}
    //   // <h1>This is HeroPage</h1>
    //   // <button className="btn btn-success">Click Me</button>
    //   //{" "}
    // </div>
  );
}

export default HeroPage;
