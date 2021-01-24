import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "bootstrap/dist/css/bootstrap.min.css";

// Import React Bootstrap
import {
  Button,
  Container,
  Form,
  Navbar,
  NavDropdown,
  Nav,
} from "react-bootstrap";

export default class Index extends React.Component {
  render() {
    return (
      <HelmetProvider>
        <React.Fragment>
          <Helmet>
            <title>Kathir Kreation</title>
          </Helmet>
          <Navbar
            className="py-5"
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
          >
            <Navbar.Brand href="#home" className="font-weight-bold">
              Kathir Kreation
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
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
              <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Dank memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Container className="p-5 d-flex justify-content-center">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </React.Fragment>
      </HelmetProvider>
    );
  }
}
