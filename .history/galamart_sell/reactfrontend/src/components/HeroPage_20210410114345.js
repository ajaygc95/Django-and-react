import React from "react";
import "./HeroPage.css";

function HeroPage() {
  return (
    <>
      <div className="hero-container">
        <HeroBg>
          <VideoBg autoPlay loop >

          </VideoBg>

        </HeroBg>
        <h1>This is HeroPage</h1>
        <button className="btn btn-success">Click Me</button>
      </div>
    </>
  );
}

export default HeroPage;
