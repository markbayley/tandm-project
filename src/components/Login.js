import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert, Button, Container, Row, Col } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <Col
          style={{
            maxWidth: "300px",
            borderRadius: "5px",
            backgroundColor: "#333867",
            padding: "25px",
          }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h5 className="pb-3">Already have an account?</h5>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <h6 className="mb-3">Enter your Username</h6>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <h6 className="mb-3">Enter your Password</h6>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="outline-warning" type="Submit" onClick={handleClose}>
                Log In
              </Button>
            </div>
          </Form>
          <div className="p-3 box mt-0 text-center">
            No account?{" "}
            <Link to="/signup">
              <Button variant="outline-light" type="Submit" className="pt-0">
                Sign up.
              </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
