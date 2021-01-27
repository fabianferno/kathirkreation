import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
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
        style={{ height: "500px", width: "100vw" }}
      />

      <Hero className="illustration-section-01" />

      <FeaturesTiles />
      {/* <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider /> */}
      <Cta split />
    </>
  );
};

export default Home;
