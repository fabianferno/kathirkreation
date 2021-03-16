import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
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

function AssociateCard(props) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.4, 1.4, 1, 1],
        borderRadius: ["15%", "15%", "30%", "30%", "15%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        loop: Infinity,
        repeatDelay: 1,
      }}
      className="card m-5"
      style={{
        width: "10rem",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
    >
      <div className="card-body  d-flex align-items-center">
        <img className="card-img-top p-2 " src={props.src} alt="Card cap" />
      </div>
    </motion.div>
  );
}

const Associates = () => {
  return (
    <section className="pt-5">
      <h1 className="textgradient bigger text-center">Associate Partners</h1>
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="d-flex justify-content-center"
      >
        <motion.div variants={fade}>
          <section className="d-block d-md-flex">
            <AssociateCard className="col-12 col-md-4" src={masterchannel} />
            <AssociateCard className="col-12 col-md-4" src={luxe} />
            <AssociateCard className="col-12 col-md-4" src={midasstouch} />
          </section>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Associates;
