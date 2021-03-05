import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.svg";

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
          style={{ height: "50vh", width: "100vw" }}
          className=" mb-md-0 mb-5 pb-md-0 pb-5"
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
              className="d-md-flex d-block justify-content-center align-items-center"
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
              <h1 className="text-white pl-md-4 pl-0">Reach Us</h1>
            </motion.div>
          </motion.div>
        </div>
        <section className="container mt-md-0 mt-5">
          <br />
          <div className="row d-flex mt-5 mt-md-0 pt-md-0 pt-5 align-items-center">
            <div className="col-12 col-md-6">
              <div className="mapouter p-1 d-flex justify-content-center">
                <div className="gmap_canvas ">
                  <iframe
                    title="Maps"
                    width="100%"
                    height={500}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Kumaran%20Colony&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />

                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:500px;width:100%;}",
                    }}
                  />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:100%;}",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-3">
              <p className="h4">
                Make a choice, take a stand for your brand and make the first
                move! We'd be glad to hear your story!
              </p>
              <br />

              <p className="text-secondary">
                No.10, 2nd floor, Mookambikai nagar, 4th Street Ramapuram,
                Chennai - 600089
              </p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://goo.gl/maps/UNezraM7fbg9XY959"
                className="btn text-white btn-dark btn-block text-left  mr-md-2 mr-0"
              >
                Visit Us
              </a>

              <a
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=919940070908"
                className="btn text-white  btn-secondary btn-block text-left mt-md-2"
              >
                Whatsapp
              </a>
              <a
                rel="noopener noreferrer"
                href="tel:919940070908"
                className="btn text-dark font-weight-bold bg-warning btn-block text-left mt-md-2"
              >
                Call
              </a>
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
