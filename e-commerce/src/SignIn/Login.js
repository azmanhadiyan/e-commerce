import React from "react";
import { Form, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"
export default function Login() {
  return (
    <div>
      <Form className="text-info border border-info rounded-lg w-25 p-3 mx-auto mt-5 shadow-lg p-5 mb-5 bg-white rounded">
        <Navbar.Brand className="font-weight-bold" size="lg">Sign In</Navbar.Brand>
        <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3 text-left" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Button variant="outline-info" type="submit" className="rounded-lg">
            Login
          </Button>
          <Form.Text className="text-muted">
            <Link to="/register"> Register</Link>
          </Form.Text>
        </Form.Group>
      </Form>
    </div>
  );
}
