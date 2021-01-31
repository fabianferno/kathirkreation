import React from "react";
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FluidAnimation from "react-fluid-animation";
import { motion } from "framer-motion";

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

const Home = () => {
  return (
    <>
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
            style={{ height: "700px", width: "100vw" }}
          />

          <Hero className="illustration-section-01" />

          <FeaturesTiles />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
