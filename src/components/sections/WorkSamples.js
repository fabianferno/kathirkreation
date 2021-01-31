import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import blackdots from "../../assets/images/associate-clients/blackdots.jpg";
import bfe from "../../assets/images/associate-clients/bfe.jpg";
import geonxtresources from "../../assets/images/associate-clients/geonxtresources.jpg";
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

const WorkSamples = () => {
  return (
    <section className="pt-5">
      <h1 className="textgradient bigger text-center">Our Associate Clients</h1>
      <Marquee pauseOnHover speed={50} gradient gradientColor={[21, 23, 25]}>
        <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
          <motion.div variants={fade}>
            <section className="d-flex">
              <div className="card m-5" style={{ width: "18rem" }}>
                <div className="card-body  d-flex align-items-center">
                  <img className="card-img-top" src={bfe} alt="Card cap" />
                </div>
              </div>

              <div className="card m-5" style={{ width: "18rem" }}>
                <div className="card-body  d-flex align-items-center">
                  <img className="card-img-top" src={luxe} alt="Card cap" />
                </div>
              </div>

              <div className="card m-5" style={{ width: "18rem" }}>
                <div className="card-body d-flex align-items-center">
                  <img
                    className="card-img-top"
                    src={geonxtresources}
                    alt="Card cap"
                  />
                </div>
              </div>

              <div className="card m-5" style={{ width: "18rem" }}>
                <div className="card-body  d-flex align-items-center">
                  <img
                    className="card-img-top"
                    src={blackdots}
                    alt="Card cap"
                  />
                </div>
              </div>
            </section>
          </motion.div>
        </motion.div>
      </Marquee>
    </section>
  );
};

export default WorkSamples;
