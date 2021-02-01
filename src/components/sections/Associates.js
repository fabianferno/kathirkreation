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

const Associates = () => {
  return (
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
  );
};

export default Associates;
