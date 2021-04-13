import React from "react";
import alcohol from "../../videos/alcohol.jpg";
import { HeroBg, VideoBg } from "./HereElement";
import "./HeroPage.css";
import {Button} from 

function HeroPage() {
  return (
    <>
      <div className="image-container">
        <img src={alcohol} alt="" />
        <div className="head-text">
          <h1>Get wasted all from your home</h1>
          <Button>Click Here</Button>
        </div>
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
