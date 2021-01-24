import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "font-awesome/css/font-awesome.min.css";
import logo from "../images/logo.svg";

import "../App.scss";
import { motion } from "framer-motion";

// Import React Bootstrap
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export default class Index extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Kathir Kreation</title>
          </Helmet>
          <Navbar
            className="p-5"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="primary"
          >
            <Navbar.Brand href="#home" className="font-weight-bold">
              Kathir Kreation
            </Navbar.Brand>
            <Navbar.Toggle className="" aria-controls="responsive-navbar-nav">
              <i
                style={{ fontSize: "2rem" }}
                className="fa text-primary fa-arrow-circle-down "
              />
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#">About Us</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <section
            id="hero"
            className="d-block d-md-flex bg-secondary justify-content-center align-items-center"
          >
            <Container className=" col-md-4 col-12 justify-content-center align-items-center">
              <motion.div
              animate={{ x: -20, y:-40 }}
              transition={{ ease: "easeOut", duration: 3 }}
                drag
                dragConstraints={{
                  left: -200,
                  right: 200,
                  top: -100,
                  bottom: 200,
                }}
                className=" card bg-primary"
                
              >
                <div className="card-body btn ">
                  <h1 className="p-3 font-weight-bold text-right">
                    Kathir Kreation
                  </h1>
                </div>
              </motion.div>
            </Container>

            <Container className=" col-md-4 col-12 justify-content-center align-items-center">
              <motion.div
              animate={{ x: 50, y:20 }}
              transition={{ ease: "easeOut", duration: 2 }}
                 drag
                 dragConstraints={{
                   left: -200,
                   right: 200,
                   top: -100,
                   bottom: 200,
                 }}
                className="card bg-dark"
              >
                <div className="card-body btn ">
                  <h2 className="p-3text-right text-primary">
                    We care for your creativity.
                  </h2>
                </div>
              </motion.div>
            </Container>

            <Container className=" col-md-4 col-12 justify-content-center align-items-center">
              <motion.div
              
                className=" card bg-primary"
                whileHover={{ scale: 1.2, rotate: -7 }}
                whileTap={{
                  scale: 0.8,
                  rotate: -10,
                }}
              >
                <div className="card-body btn ">
                  <h1 className="p-3 font-weight-bold text-right">
                    <img src={logo} height="240px" alt="Kathir Kreation" />
                  </h1>
                </div>
              </motion.div>
            </Container>
          </section>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
