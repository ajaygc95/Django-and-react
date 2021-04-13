import React from "react";
import alcohol from "../../videos/alcohol2.jpg";
import { HeroBg, VideoBg } from "./HereElement";
import "./HeroPage.css";
import { FaBars, FaTimes } from "react-icons/fa";
function HeroPage() {
  return (
    <>
      <div className="image-container">
        <img src={alcohol} alt="" />
        <div className="head-text">
          <h1>Aba Raksi Ghar Ghar Ma</h1>
          <button className="search">
            Order Now <i class="fas fa-arrow-right"></i>
          </button>
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
