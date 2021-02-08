import React from "react";
import Hero from "../components/sections/Hero";
import Associates from "../components/sections/Associates";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FluidAnimation from "react-fluid-animation";
import { motion } from "framer-motion";
import heroImg from "../assets/images/hero.jpg";

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
            style={{ height: "100vh", width: "100vw" }}
          />
          <p style={{ fontSize: "0.8em", textAlign: "end" }}>
            Drag & Explore ^
          </p>
          <div
            style={{
              position: "absolute",
              top: "20vh",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="container p-4"
          >
            <div
              drag
              dragConstraints={{
                top: -10,
                left: -0,
                right: 0,
                bottom: 10,
              }}
              className="d-md-flex d-block justify-content-around align-items-center col-md-12"
              style={{
                padding: "30px",
                background: "#222222",
              }}
            >
              <img
                className="col-md-4 img-fluid"
                alt="kathir-kreation-logo"
                src={heroImg}
              />
              <div className="d-block pl-md-4 pl-0 col-md-8">
                <h1 className="text-white">We care for your creativity</h1>
                <p className="text-white">
                  Our company is the persona of influence which forges brands
                  that are developing to accomplish their full potential and
                  help them exceed their unimaginable boundaries. We develop
                  what you create. With 8 years of experience we have learnt to
                  cultivate the art of brand building by honing and implementing
                  our skills across the globe. We focus on influencing the brand
                  in strategy, design and externships.
                </p>
              </div>
            </div>
          </div>
          <div style={{ paddingTop: "500px" }} className="d-md-none d-block" />
          <Hero className="illustration-section-01 pt-5" />
          <FeaturesTiles />
          <Associates />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
