import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import textLogo from "../../assets/images/text-face-logo.svg";

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
    <header {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-header-inner",
            bottomDivider && "has-bottom-divider"
          )}
        >
          <svg
            style={{ height: "50px" }}
            fill="#ffffff"
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
                      <Link to="#0" onClick={closeMenu}>
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
      <div style={{paddingTop:'150px'}} className='container'>
        <img
          style={{}}
          className="selectDisable reveal-from-bottom"
          data-reveal-delay="200"
          src={textLogo}
        />
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
