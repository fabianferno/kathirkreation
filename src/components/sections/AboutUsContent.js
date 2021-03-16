import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const AboutUsContent = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container section ">
        <div className={innerClasses}>
          <div className="container pb-5">
            <p className="text-center">
              We know how to convey a sense of commercializing and branding as
              we envision brand strategies and our brand services are delivered
              straight to your table ! We give life to your business and voice
              your ideas to create results that last a lifetime! So flaunt your
              firm with Kathir Collections!
            </p>
          </div>
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  CEO
                </div>
                <h3 className="mt-0 mb-12">Kathiresan</h3>
                <p className="m-0">
                  Our Lead Kathiresan, is an ingenious professional with over 5
                  years of ample experience in Marketing Communications. He has
                  the potentiality to translate marketing ideas and design
                  concepts across all organizational levels. With extensive
                  expertise, he gained over the years in various fields of
                  branding; he has travelled around 8 different countries and
                  has executed more than 12 projects in the art of marketing.
                  This small vision he had grew into a big dream as this
                  pandemic drove him to transform his vision into reality.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                style={{ opacity: "80%" }}
                data-reveal-container=".split-item"
              >
                <img
                  src="https://media4.giphy.com/media/ibXW0RPKgrtHgxg8gV/giphy.gif?cid=ecf05e47pu2mqq4282jai6kc02yzrxhffxifk6qse0gxs56o&rid=giphy.gif"
                  alt="Black Marble"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  CFO
                </div>
                <h3 className="mt-0 mb-12">Vivekananda </h3>
                <p className="m-0">
                  Vivekananda is one of the finest operational marketers with a
                  wide range of experience in product selling, exhibition
                  management, sales and marketing. He is an established leader
                  with great managerial skills including the identification of
                  new sales and marketing outlets, financial oversight and
                  strategic planning.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                style={{ opacity: "80%" }}
              >
                <Image
                  src="https://media1.giphy.com/media/KfqcIKKMwp5K8s0R8h/giphy.gif"
                  alt="Features split 02"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  CREATIVE HEAD
                </div>
                <h3 className="mt-0 mb-12">Ramakrishna</h3>
                <p className="m-0">
                  Ramakrishna is a creative head with a passion for all aspects
                  of design and creativity with long standing experience in
                  production, photography, and served as an assistant
                  cinematographer. He always seeks to achieve high standards in
                  all the work which he does.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                style={{ opacity: "80%" }}
              >
                <Image
                  src="https://media3.giphy.com/media/Oj4dgTX3LhtkmgsBqc/giphy.gif"
                  alt="Features split 03"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Web Developer
                </div>
                <h3 className="mt-0 mb-12">Fabian Ferno</h3>
                <p className="m-0">
                  Fabian, an aspiring web designer who works with an unwavering
                  commitment and is open to new ideas and challenges in
                  developing websites, softwares. He is a versatile full stack
                  web developer with a demonstrated history of working as an IT
                  admin, web developer and graphic designer.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                style={{ opacity: "80%" }}
              >
                <Image
                  src="https://media3.giphy.com/media/l1J4Wpj0ugWAyKj2z4/giphy.gif"
                  alt="Features split 03"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Graphic Designer
                </div>
                <h3 className="mt-0 mb-12">Nandhini </h3>
                <p className="m-0">
                  Nandhini holds a C Tech with focus on Graphic Design
                  Communication with extensive experience in Graphic Designing
                  and branding strategies after having worked in several
                  corporates. She is a composed person and a versatile worker.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                style={{ opacity: "80%" }}
              >
                <img
                  src="https://media1.giphy.com/media/lp1ERA7r0WaUYVC5Vf/giphy.gif"
                  alt="Features split 02"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Digital Marketer
                </div>
                <h3 className="mt-0 mb-12">Pradheep </h3>
                <p className="m-0">
                  Pradheep is a digital marketer who helps increase their brand
                  recognition through strategic guidance on virtual presence. He
                  transforms the most elegant website into a complicated one and
                  fragments all the sections in a well aligned manner.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                style={{ opacity: "80%" }}
              >
                <Image
                  src="https://media4.giphy.com/media/mCy3MZ0WaZG2McvtST/giphy.gif?cid=ecf05e472fgk5r4501j0zqdvml96tibi6jvi1t39626d491a&rid=giphy.gif"
                  alt="Features split 01"
                  className="img-fluid"
                />
              </div>
            </div>

            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-right"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  CONTENT WRITER
                </div>
                <h3 className="mt-0 mb-12">Subhiksha </h3>
                <p className="m-0">
                  Subhiksha is a passionate writer and a lifelong learner with
                  an ongoing curiosity to learn new things. She helps us create
                  content that drives action.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
                style={{ opacity: "80%" }}
              >
                <Image
                  src="https://media1.giphy.com/media/SXUDBa1UtgAaAR8fVb/giphy.gif"
                  alt="Features split 02"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutUsContent.propTypes = propTypes;
AboutUsContent.defaultProps = defaultProps;

export default AboutUsContent;
