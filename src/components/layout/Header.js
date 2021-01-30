import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";
import logo from "../../assets/images/logo.svg";
import textlogo from "../../assets/images/text-face-logo.svg";
import "bootstrap/dist/css/bootstrap.css";

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

const defaultProps = {
  navPosition: "",
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener("keydown", keyPress);
    document.addEventListener("click", clickOutside);
    return () => {
      document.removeEventListener("keydown", keyPress);
      document.removeEventListener("click", clickOutside);
      closeMenu();
    };
  });

  const openMenu = () => {
    document.body.classList.add("off-nav-is-active");
    nav.current.style.maxHeight = nav.current.scrollHeight + "px";
    setIsactive(true);
  };

  const closeMenu = () => {
    document.body.classList.remove("off-nav-is-active");
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  };

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  };

  const clickOutside = (e) => {
    if (!nav.current) return;
    if (
      !isActive ||
      nav.current.contains(e.target) ||
      e.target === hamburger.current
    )
      return;
    closeMenu();
  };

  const classes = classNames(
    "site-header",
    bottomOuterDivider && "has-bottom-divider",
    className
  );

  return (
    <header style={{ marginTop: "20px" }} {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <Link to="/" className="col-md-5 col-10">
            <img
              src={textlogo}
              alt="kathirkreationlogo"
              srcset=""
              className="img-fluid"
            />
          </Link>
          {!hideNav && (
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={classNames("header-nav", isActive && "is-active")}
              >
                <div className="header-nav-inner">
                  <ul
                    className={classNames(
                      "list-reset text-xs",
                      navPosition && `header-nav-${navPosition}`
                    )}
                  >
                    <li>
                      <Link to="/about-us" onClick={closeMenu}>
                        About Us
                      </Link>
                    </li>
                  </ul>
                  {!hideSignin && (
                    <ul className="list-reset header-nav-right">
                      <li>
                        <Link
                          to="#0"
                          className="button button-dark button-wide-mobile button-sm"
                          onClick={closeMenu}
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
      <div style={{ marginTop: "60px" }} className="container p-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: -360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        >
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -0,
              right: 0,
              bottom: 50,
            }}
            className="d-md-flex d-block justify-content-around align-items-center"
            style={{
              padding: "40px",
              background: "rgba(24, 24, 24, 0.6)",
            }}
          >
            <img
              style={{ height: "150px" }}
              alt="kathir-kreation-logo"
              src={logo}
            />
            <h1>We care for your creativity</h1>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
