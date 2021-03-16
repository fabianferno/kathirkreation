import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import services from "../../assets/images/services-undraw.svg";
import brandLaunching from "../../assets/images/services/brand_launching.svg";
import branding from "../../assets/images/services/branding.svg";
import visualIdentityDesign from "../../assets/images/services/visual_identity_design.svg";
import digitalMarketing from "../../assets/images/services/digital_marketing.svg";
import webDesign from "../../assets/images/services/web_design.svg";
import socialDesign from "../../assets/images/services/social_design.svg";
import graphicDesign from "../../assets/images/services/graphic_design.svg";
import photography from "../../assets/images/services/photography.svg";

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

function ServicesCard(props) {
  return (
    <div className="tiles-item reveal-from-bottom">
      <div className="tiles-item-inner">
        <div className="features-tiles-item-header">
          <div className=" mb-16">
            <motion.div
              className="m-2 p-3"
              variants={fade}
              animate={{
                scale: [1.05, 1, 1.05, 1, 1.05],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                loop: Infinity,
              }}
              drag
              dragConstraints={{
                top: -10,
                left: -10,
                right: 10,
                bottom: 10,
              }}
              style={{
                background: "#ffffff",
                borderRadius: "20px",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              }}
            >
              <img
                className="card-img-top p-2"
                alt="Card cap"
                aria-label="hidden"
                style={{
                  height: "250px",
                  pointerEvents: "none",
                }}
                src={props.image}
              />
              <div className="features-tiles-item-content">
                <h4 className="mt-0 mb-8 pt-3">{props.title}</h4>
                <p className="m-0 text-sm">{props.description}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const Services = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <img
          style={{
            height: "30vh",
            width: "100vw",
            marginTop: "10vh",
            marginBottom: "20vh",
          }}
          src={services}
          alt="undraw"
          srcset=""
        />
        <div className={innerClasses}>
          <div className="container pb-5">
            <h1 className="center-content textgradient bigger">
              Our Lineup of Services
            </h1>
            <p className="text-center">
              We provide all kinds of services to take your ideas to new
              stunning heights. Be it from designing small logos to post
              production, we provide guaranteed services without compromise.
            </p>
          </div>
          <div className={tilesClasses}>
            <ServicesCard
              image={brandLaunching}
              title="Brand Launching"
              description="With enough foresight and planning, however, even the most complex brand launch can go off without a hitch."
            />

            <ServicesCard
              image={branding}
              title="Branding"
              description="Branding is absolutely critical to a business because of the overall impact it makes on your company. "
            />

            <ServicesCard
              image={visualIdentityDesign}
              title="Visual Identity Design"
              description="In branding, “what you see” is a brand’s visual identity. We make sure your your audience find what matters most."
            />

            <ServicesCard
              image={digitalMarketing}
              title="Digital Marketing"
              description="Digital marketing encompasses all marketing efforts that use an electronic device or the internet.  "
            />

            <ServicesCard
              image={webDesign}
              title="Web Design"
              description="It's about how an audience connects with your company on multiple levels, and through different brand touch points. "
            />

            <ServicesCard
              image={socialDesign}
              title="Social Design"
              description="Keep in mind, 'Consistency is the Key'. And we take care of that for you with no hassle."
            />

            <ServicesCard
              image={graphicDesign}
              title="Graphic Design"
              description="Graphic design and branding are two separate parts of a successful marketing strategy.  "
            />

            <ServicesCard
              image={photography}
              title="Photography"
              description="Our in-house photography services team made up of professional photographers can add value to your needs. "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Services.propTypes = propTypes;
Services.defaultProps = defaultProps;

export default Services;
