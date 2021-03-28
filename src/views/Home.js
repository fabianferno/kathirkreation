import React from "react";
import Associates from "../components/sections/Associates";
import Services from "../components/sections/Services";
import FluidAnimation from "react-fluid-animation";
import { motion } from "framer-motion";
// import logo from "../assets/images/logo.svg";
import animatedLogo from "../assets/kathirkreationanimated.mp4";

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

const fade1 = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
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
            style={{ height: "60vh", width: "100vw" }}
          />

          <motion.div
            style={{
              position: "absolute",
              top: "20vh",
              left: 0,
              right: 0,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="container p-3"
            variants={fade1}
          >
            <div className="d-block justify-content-center  align-items-center col-md-12">
              <video
                src={animatedLogo}
                style={{
                  // background: "#999999",
                  width: "90vw",
                  margin: "0 auto",
                  borderRadius: "20px",
                  boxShadow:
                    "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                }}
                autoPlay="true"
                className="p-2 justify-content-center"
              />
            </div>
          </motion.div>

          <div style={{ paddingTop: "300px" }} className="d-none d-md-block" />

          <section className="illustration-section-01 pt-5">
            <div className="container text-center">
              <motion.div className="p-1" variants={fade1}>
                <h1 className="">We care for your creativity!</h1>
              </motion.div>
              <div className="d-block pl-md-4 pl-0 align-items-center">
                <h1 className=" text-center" style={{ fontSize: "1.8rem" }}>
                  Hello there, We are Kathir Kreation.
                </h1>
                <p className=" text-center" style={{ fontSize: "0.8rem" }}>
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
          </section>

          <Services />
          <Associates />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Home;
