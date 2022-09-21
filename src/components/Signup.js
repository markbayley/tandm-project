import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Row style={{display: "flex", justifyContent: "center"}}>
        <Col style={{maxWidth: "300px"}}>
        <h5 className="mb-4">Sign up for an account.</h5>
        <h6 className="mb-3">Enter a Username</h6>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <h6 className="mb-3">Choose a Password</h6>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <h6 className="mb-3">Security token</h6>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter your key"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Sign up
            </Button>
          </div>
        </Form>
        </Col>
      </Row>
    
      <div className="p-3 box mt-0 text-center">
      Already have an account? <Link to="/login" ><Button variant="outline-light" type="Submit"  className="pt-0">
              Login
            </Button></Link>
            </div>
    </Container>
  );
};

export default Signup;