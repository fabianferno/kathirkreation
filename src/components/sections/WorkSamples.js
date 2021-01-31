import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import Marquee from "react-marquee-slider";
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

const WorkSamples = () => {
  return (
    <>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fade}>
          <section className="d-flex">
            <div className="card p-5" style={{ width: "18rem" }}>
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card p-5" style={{ width: "18rem" }}>
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card p-5" style={{ width: "18rem" }}>
              <img className="card-img-top" src="..." alt="Card cap" />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </section>
          {/* <Marquee velocity={25} scatterRandomly minScale={0.7}>
            
          </Marquee> */}
        </motion.div>
      </motion.div>
    </>
  );
};

export default WorkSamples;
