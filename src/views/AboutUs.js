import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FeaturesSplit from "../components/sections/FeaturesSplit";
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
          style={{ height: "30vh", width: "90vw" }}
        />
        <div
          style={{ position: "absolute", top: "20vh", left: "0", right: "0" }}
          className="container p-4"
        >
          <motion.div
            initial={{ scale: -0.5 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <motion.div
              drag
              dragConstraints={{
                top: -10,
                left: -0,
                right: 0,
                bottom: 10,
              }}
              className="d-md-flex d-block justify-content-around align-items-center"
              style={{
                padding: "40px",
                background: "#222222",
              }}
            >
              <img
                style={{ height: "150px" }}
                alt="kathir-kreation-logo"
                src={logo}
              />
              <h1 className="text-white">Kathir Kreation</h1>
            </motion.div>
          </motion.div>
        </div>
        <FeaturesSplit invertMobile topDivider imageFill className="" />
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
