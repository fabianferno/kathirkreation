import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import masterchannel from "../../assets/images/associate-clients/masterchannel.png";
import midasstouch from "../../assets/images/associate-clients/midasstouch.png";
import luxe from "../../assets/images/associate-clients/luxe-cinemas.jpg";

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

const Portfolio = () => {
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
        style={{ height: "30vh", width: "100vw" }}
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
            <h1 className="text-white">What sets us apart?</h1>
          </motion.div>
        </motion.div>
      </div>
      <section className="pt-5">
        <h1 className="textgradient bigger text-center">Associate Partners</h1>
        <Marquee speed={60} gradient gradientColor={[238, 238, 237]}>
          <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.div variants={fade}>
              <section className="d-flex">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="card m-5"
                  style={{ width: "10rem" }}
                >
                  <div className="card-body  d-flex align-items-center">
                    <img
                      className="card-img-top"
                      src={masterchannel}
                      alt="Card cap"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="card m-5"
                  style={{ width: "10rem" }}
                >
                  <div className="card-body  d-flex align-items-center">
                    <img className="card-img-top" src={luxe} alt="Card cap" />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="card m-5"
                  style={{ width: "10rem" }}
                >
                  <div className="card-body d-flex align-items-center">
                    <img
                      className="card-img-top"
                      src={midasstouch}
                      alt="Card cap"
                    />
                  </div>
                </motion.div>
              </section>
            </motion.div>
          </motion.div>
        </Marquee>
      </section>
    </>
  );
};

export default Portfolio;
