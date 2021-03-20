import React from "react";
import Associates from "../components/sections/Associates";
import Services from "../components/sections/Services";
import FluidAnimation from "react-fluid-animation";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.svg";

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
            style={{ height: "100vh", width: "100vw" }}
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
            <div
              className="d-md-flex d-block justify-content-around align-items-center col-md-12"
              style={{
                padding: "50px",
                background: "#222222",
              }}
            >
              <motion.div
                className="m-2 p-3 col-md-4 "
                variants={fade}
                animate={{
                  scale: [1.15, 1, 1.15, 1, 1.15],
                  rotate: [-90, 0],
                }}
                transition={{
                  duration: 4,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  //loop: Infinity,
                }}
                drag
                dragConstraints={{
                  top: -10,
                  left: -10,
                  right: 10,
                  bottom: 10,
                }}
              >
                <img
                  className="img-fluid"
                  alt="kathir-kreation-logo"
                  src={logo}
                  style={{ pointerEvents: "none" }}
                />
              </motion.div>

              <div className="d-block pl-md-4 pl-0 col-md-8">
                <h1 className="text-white" style={{ fontSize: "2rem" }}>
                  We care for your creativity
                </h1>
                <p
                  className="text-white text-justify"
                  style={{ fontSize: "0.8rem" }}
                >
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
          </motion.div>

          <div style={{ paddingTop: "500px" }} className="d-md-none d-block" />

          <section className="illustration-section-01 pt-5">
            <div className="container text-center">
              <h1> Hello there, We are Kathir Kreation. </h1>
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
