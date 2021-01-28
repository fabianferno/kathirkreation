import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
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
    <section {...props} className={outerClasses} style={{paddingTop:'0px'}}>
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            
            <div className="container-xs">
              <p
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

              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="#"
                  >
                    Get started
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="#"
                  >
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
              paddingTop: "200px",
              paddingBottom: "200px",
              height: "20vh",
            }}
          >
            <div
              style={{
                height: "1500px",
              }}
            >
              <svg
                fill="#222222"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 124.78 124.14"
              >
                <g data-name="Layer 2">
                  <path
                    d="M47.12 124.14V61.67L32.77 76.06 0 76.42l31-31a12.88 12.88 0 002.65.28 12.46 12.46 0 0012.46-12.46 12.88 12.88 0 00-.28-2.65L76.42 0v32.41L61.78 47.05l63 .05-23.45 23.73-30.33.04.15 30.25-24.07 23zM33.65 21.74a11.5 11.5 0 1011.49 11.5 11.5 11.5 0 00-11.49-11.5z"
                    fill-rule="evenodd"
                    data-name="Layer 1"
                  />
                </g>
              </svg>
            </div>
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
