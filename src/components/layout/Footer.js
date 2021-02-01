import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          <div className="footer-top space-between text-xxs">
            <svg
              style={{ height: "50px" }}
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
            <FooterSocial />
          </div>
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <FooterNav />
            <div className="footer-copyright">
              Made by Fabian Ferno - Kathir Kreation. All right reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
