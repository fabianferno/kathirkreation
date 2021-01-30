import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import FluidAnimation from "react-fluid-animation";

const AboutUs = () => {
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
        style={{ height: "450px", width: "80vw" }}
      />

      <section className="container">
        <h1>Reach Us</h1>
        <p>
          Make a choice, take a stand for your brand and make the first move!
          We'd be glad to hear your story!
        </p>
      </section>
    </>
  );
};

export default AboutUs;
