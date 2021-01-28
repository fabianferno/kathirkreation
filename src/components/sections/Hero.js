import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import logo from "../../assets/images/logo.svg";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <section {...props} className={outerClasses} style={{ paddingTop: "0px" }}>
      <div className="container">
        <p style={{ fontSize: "0.8em", textAlign: "end" }}>
          Click & Drag ^
        </p>
        <div className={innerClasses}>
          <div className="hero-content">
            <div className="container">
              <p
                style={{ textAlign: "left" }}
                className="m-0 mb-32 reveal-from-bottom "
                data-reveal-delay="400"
              >
                Our company is the persona of influence which forges brands that
                are developing to accomplish their full potential and help them
                exceed their unimaginable boundaries. We develop what you
                create. With 8 years of experience we have learnt to cultivate
                the art of brand building by honing and implementing our skills
                across the globe. We focus on influencing the brand in strategy,
                design and externships.
              </p>

              <div
                style={{ marginTop: "50px" }}
                className="reveal-from-bottom"
                data-reveal-delay="600"
              >
                <ButtonGroup>
                  <Button tag="a" color="primary" wideMobile href="#">
                    Get started
                  </Button>
                  <Button tag="a" color="dark" wideMobile href="#">
                    Follow Us
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>

          <motion.div
            className="container"
            style={{
              scale,
            }}
          >
            <img alt="kathir-kreation-logo" src={logo} />

            <motion.div
              className="item"
              style={{
                scaleY: scrollYProgress,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
