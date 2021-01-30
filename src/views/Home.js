import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Testimonial from "../components/sections/Testimonial";
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

      <Hero className="illustration-section-01" />

      <FeaturesTiles />

      {/* <Testimonial topDivider /> */}
    </>
  );
};

export default Home;
