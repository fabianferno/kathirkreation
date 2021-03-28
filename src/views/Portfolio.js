import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FluidAnimation from "react-fluid-animation";

// import client images
import bfe from "../assets/images/clients/bfe.jpg";
import blackdots from "../assets/images/clients/blackdots.jpg";
import geonxtresources from "../assets/images/clients/geonxtresources.jpg";
import eventplanners from "../assets/images/clients/event-planners.jpg";
import intuition from "../assets/images/clients/intuition.png";
import madraschat from "../assets/images/clients/madras-chat.jpg";
import roche from "../assets/images/clients/roche.jpg";
import shabir from "../assets/images/clients/shabir.png";
import shoestudio from "../assets/images/clients/shoe-studio.jpg";
import vikashini from "../assets/images/clients/vikashini.jpg";

// import poster images
import blackdotsposter from "../assets/images/posters/black-dots-poster.jpg";
import blackdots2 from "../assets/images/posters/blackdots-2.png";
import blackdots3 from "../assets/images/posters/blackdots-3.jpg";
import retouch from "../assets/images/posters/retouch.jpg";
import rotoract from "../assets/images/posters/rotoract-poster.jpg";
import shoestudioposter from "../assets/images/posters/shoe-studio-poster.jpg";
import singainaadu from "../assets/images/posters/singai-naadu.jpg";
import sting from "../assets/images/posters/sting-poster.jpg";
import tapestry from "../assets/images/posters/tapestry.jpg";

// import work images
import emceebrit from "../assets/images/works/emcee-britt.jpg";
import hotelnamma from "../assets/images/works/hotel-namma-nachi.jpg";
import miraclemedia from "../assets/images/works/miracle-media.jpg";
import mummymasala from "../assets/images/works/mummy-masala.jpg";
import stoifist from "../assets/images/works/stoifist.jpg";

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

function ClientsCard(props) {
  return (
    <motion.div
      loading="lazy"
      whileHover={{ scale: 1.1, rotate: -5 }}
      className="card m-5 d-flex align-items-center"
      style={{
        width: "8em",
        height: "8em",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
      }}
    >
      <img className="card-body img-fluid" alt="Card cap" src={props.src} />
    </motion.div>
  );
}

function WorksCard(props) {
  return (
    <motion.div
      className="m-2"
      variants={fade}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
    >
      <img
        loading="lazy"
        className="card-img-top p-2"
        alt="Card cap"
        style={{
          borderRadius: "20px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
        src={props.src}
      />
    </motion.div>
  );
}

const Portfolio = () => {
  return (
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
        style={{ height: "30vh", width: "100vw" }}
      />
      <div
        style={{ position: "absolute", top: "20vh", left: "0", right: "0" }}
        className="container p-4"
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
            src="https://media1.giphy.com/media/mPRsPIrYnWNSEPs40i/giphy.gif?cid=ecf05e47oivi905iegbus70qstx2xaetmpktrw97xst9t7h1&rid=giphy.gif"
          />
          <h1 className="text-white pl-md-4 pl-0">Portfolio</h1>
        </motion.div>
      </div>
      <div className="d-block d-md-none " style={{ padding: "15vh" }} />
      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        className="pt-5 mt-5"
      >
        <ResponsiveMasonry columnsCount={3} className="mt-0 mt-md-5 container">
          <Masonry>
            <WorksCard src={blackdotsposter} />
            <WorksCard src={blackdots2} />
            <WorksCard src={blackdots3} />
            <WorksCard src={retouch} />
            <WorksCard src={rotoract} />
            <WorksCard src={shoestudioposter} />
            <WorksCard src={singainaadu} />
            <WorksCard src={emceebrit} />
            <WorksCard src={hotelnamma} />
            <WorksCard src={miraclemedia} />
            <WorksCard src={mummymasala} />
            <WorksCard src={sting} />
            <WorksCard src={stoifist} />
            <WorksCard src={tapestry} />
          </Masonry>
        </ResponsiveMasonry>

        <h3 className="textgradient pt-5  text-center">Clients</h3>
        <Marquee
          direction="left"
          speed={80}
          gradient
          gradientWidth={100}
          gradientColor={[238, 238, 237]}
        >
          <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
            <motion.div variants={fade} id="works" className="d-flex">
              <ClientsCard src={bfe} />
              <ClientsCard src={blackdots} />
              <ClientsCard src={geonxtresources} />
              <ClientsCard src={eventplanners} />
              <ClientsCard src={intuition} />
              <ClientsCard src={madraschat} />
              <ClientsCard src={roche} />
              <ClientsCard src={shabir} />
              <ClientsCard src={shoestudio} />
              <ClientsCard src={vikashini} />
            </motion.div>
          </motion.div>
        </Marquee>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
