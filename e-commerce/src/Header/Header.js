import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="info" expand="lg">
        <Container>
          <Navbar.Brand href="/">AZZ</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link className="text-decoration-none text-dark" to="/">
                  Product
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="text-decoration-none text-dark" to="/cart">
                  Cart
                </Link>
              </Nav.Link>
              <NavDropdown title="Sign In" id="basic-nav-dropdown" varian="info" >
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
