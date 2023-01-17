import React from "react";
import { Animated } from "react-animated-css";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Hero = () => {
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
          <Row style={{ fontSize: "95px", color: "#ffffff", fontWeight: 700 }}>
         
            TANDM
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
              <span id="subheader">Building Together</span>
                  {/* <span class="sup">&trade;</span> */}
                </h1>
              </Animated>
              <Link to="/login">
                <Button variant="outline-warning" size="lg" className="my-4 ">
                  LOG IN
                </Button>
              </Link>
              <h5 className="mb-3 ">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span  style={{ color: "goldenrod" }}>Sign up</span>
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
                  className="light large"
                  style={{
                    lineHeight: "0",
                    marginBottom: "50px",
                    color: "lightgrey",
                  }}
                >
                   <span id="subheader">Building Together</span>
                  {/* <span class="sup">&trade;</span> */}
                </h1>
              </Animated>

              <Link to="/dashboard">
                <Button variant="outline-warning" size="lg" className="my-4">
                  Dashboard
                </Button>
              </Link>
              <h5 className="mb-3">Welcome back. You are signed in.</h5>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;
