import React from "react";
import { Animated } from "react-animated-css";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Error = () => {
  const { user } = useUserAuth();

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "60vh",
      }}
      className=""
    >
      <Row>
        <Col>
          <Row style={{ fontSize: "110px", color: "#007bff", fontWeight: 600 }}>
            Tandm
          </Row>

          {!user ? (
            <>
              <Animated
                animationIn="fadeIn"
                animationInDuration={5000}
                isVisible={true}
              >
                <h1
                  className="light large"
                  style={{
                    lineHeight: "0",
                    marginBottom: "50px",
                    color: "lightgrey",
                  }}
                >
                  Under Construction
                  {/* <span class="sup">&trade;</span> */}
                </h1>
              </Animated>
              <Link to="/signup">
                <Button variant="outline-warning" size="lg" className="my-4 ">
                  SIGN IN
                </Button>
              </Link>
              <h5 className="mb-3 " style={{ color: "lightgrey" }}>
                Page under construction.{" "}
                <Link to="/login" style={{ color: "lightgrey" }}>
                  Log in
                </Link>
              </h5>
            </>
          ) : (
            <>
              <Animated
                animationIn="fadeIn"
                animationInDuration={5000}
                isVisible={true}
              >
                <h1
                  className="light"
                  style={{
                    lineHeight: "0",
                    marginBottom: "50px",
                    color: "lightgrey",
                  }}
                >
                  Under Construction
                  {/* <span class="sup">&trade;</span> */}
                </h1>
              </Animated>
              <h5 className="mt-5 mb-3">Page under construction.</h5>

              <Link to="/dashboard">
                <Button variant="outline-warning" size="lg" className="mb-5">
                  Dashboard
                </Button>
              </Link>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
