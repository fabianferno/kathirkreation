import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
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
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "What sets us apart?",
    paragraph:
      "We know how to convey a sense of commercializing and branding as we envision brand strategies and our brand services are delivered straight to your table ! We give life to your business and voice your ideas to create results that last a lifetime! So flaunt your firm with Kathir Collections!",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  CEO
                </div>
                <h3 className="mt-0 mb-12">Gowtham Kathiresan</h3>
                <p className="m-0">
                  Our boss Kathiresan, is an ingenious professional with over 5
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
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://media1.giphy.com/media/lp1ERA7r0WaUYVC5Vf/giphy.gif"
                  alt="Features split 01"
                  width={528}
                  height={396}
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
              >
                <Image
                  src="https://media1.giphy.com/media/hombQ1IA8KPXRqrYHn/giphy.gif"
                  alt="Features split 02"
                  width={528}
                  height={396}
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
              >
                <Image
                  src="https://media3.giphy.com/media/Oj4dgTX3LhtkmgsBqc/giphy.gif"
                  alt="Features split 03"
                  width={528}
                  height={396}
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
              >
                <Image
                  src="https://media2.giphy.com/media/VbyRe0O0tUTRfg8jYr/giphy.gif"
                  alt="Features split 01"
                  width={528}
                  height={396}
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
              >
                <Image
                  src="https://media1.giphy.com/media/KfqcIKKMwp5K8s0R8h/giphy.gif"
                  alt="Features split 02"
                  width={528}
                  height={396}
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
              >
                <Image
                  src="https://media3.giphy.com/media/l1J4Wpj0ugWAyKj2z4/giphy.gif"
                  alt="Features split 03"
                  width={528}
                  height={396}
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
                  Subhiksha is a passionate freelance writer and a lifelong
                  learner with an ongoing curiosity to learn new things. She
                  helps us create content that drives action.
                </p>
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <Image
                  src="https://media1.giphy.com/media/SXUDBa1UtgAaAR8fVb/giphy.gif"
                  alt="Features split 02"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
