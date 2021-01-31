import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";

import FluidAnimation from "react-fluid-animation";

const easing = [0.6, -0.05, 0.01, 0.99];
const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};

const AboutUs = () => {
  return (
    <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
      <motion.div variants={fade}>
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
          style={{ height: "450px", width: "85vw" }}
          className=" mb-md-0 mb-5 pb-md-0 pb-5"
        />

        <section className="container section center-content pt-md-0 pt-5">
          <h1 className="textgradient bigger">Reach Us</h1>
          <p>
            Make a choice, take a stand for your brand and make the first move!
            We'd be glad to hear your story!
          </p>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
