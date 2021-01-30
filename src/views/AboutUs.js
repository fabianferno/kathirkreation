import React from "react";
// import sections
import FeaturesSplit from "../components/sections/FeaturesSplit";
import FluidAnimation from "react-fluid-animation";

const Home = () => {
  return (
    <>
      <FluidAnimation
        config={{
          textureDownsample: 1,
          densityDissipation: 0.995,
          velocityDissipation: 0.99,
          pressureDissipation: 0.9,
          pressureIterations: 25,
          curl: 30,
          splatRadius: 0.015,
        }}
        style={{ height: "700px", width: "100vw" }}
      />

      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
    </>
  );
};

export default Home;
