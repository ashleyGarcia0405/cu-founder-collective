import React from "react";
import Spline from "@splinetool/react-spline";

const SplineAnimation = () => (
  <div
    className="spline-container"
    style={{
      position: "relative",
      overflow: "hidden",
      clipPath: "inset(0 0 60px 0)",
      width: "100%",
      height: "100vh",
    }}
  >
    <Spline scene="https://prod.spline.design/sgMk51ONrTMCt9eO/scene.splinecode" />
  </div>
);


export default SplineAnimation;
