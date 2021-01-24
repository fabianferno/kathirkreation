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
          <Container id="hero" className="p-5 d-flex justify-content-center">
            <motion.div
              whileHover={{ scale: 2, rotate: -10 }}
              whileTap={{
                scale: 0.8,
                rotate: -10,
                borderRadius: "100%",
              }}
            >
              <div className="card bg-primary">
                <div className="card-body btn ">
                  <h1 className="p-3">Kathir Kreation</h1>
                </div>
              </div>
            </motion.div>
          </Container>

          <Container id="hero" className="p-5 d-flex justify-content-center">
            <motion.div
              whileHover={{ scale: 2, rotate: 10 }}
              whileTap={{
                scale: 0.8,
                rotate: 10,
                borderRadius: "100%",
              }}
            >
              <div className="card bg-primary">
                <div className="card-body btn ">
                  <img src={logo} alt="Kathir Kreation" srcset="" />
                </div>
              </div>
            </motion.div>
          </Container>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
