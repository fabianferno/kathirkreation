import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import "bootstrap/dist/css/bootstrap.css";

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

  return (
    <section {...props} className={outerClasses} style={{ paddingTop: "0px" }}>
      <div className="container">
        <div className={innerClasses}>
          <div className="hero-content pb-5">
            <div className="container">
              <div
                style={{ marginTop: "50px" }}
                className="reveal-from-bottom"
                data-reveal-delay="600"
              >
                <ButtonGroup>
                  <a
                    className="btn bg-dark text-white mx-2"
                    wideMobile
                    href="https://kathirkreation.com"
                  >
                    Get started
                  </a>
                  <a
                    className="btn bg-warning text-dark font-weight-bold mx-2"
                    wideMobile
                    href="https://kathirkreation.com"
                  >
                    Follow Us
                  </a>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
