import React from "react";
import { Container, Button, Row, Col, ModalTitle } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useUserAuth();
  return (
    <>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "100vh",
        }}
        className="header"
      >
        <Row>
          <Col className="subtitle">
            <div
              style={{ fontSize: "50px", color: "goldenrod"}}
              className="mb-2 title"
            >
              Building Design Software
            </div>
            {user ? (
              <div className="subtitle">
                <h5 className="mb-3 ">
                  You are signed in. Access the dashboard below.
                </h5>
            
                  <Button variant="outline-light" size="lg" className="my-4">
                  <Link to="/dashboard">
                    Dashboard
                    </Link>
                  </Button>
                
                <h6 className="mb-3 " style={{ color: "lightgrey" }}>
                  Need more information?{" "}
                  <Link style={{ color: "lightgrey" }} to="/contact">
                    Contact us
                  </Link>
                  .
                </h6>
              </div>
            ) : (
              // <Button variant="outline-light" size="lg" className="mt-4 " ><Nav.Link href="/dashboard"> Get Started</Nav.Link></Button> :
              <div className="subtitle">
                <h5 className="mb-3 ">
                  A <strong className="bold">security key</strong> is required
                  to sign in to the dashboard.
                </h5>
                <Link to="/signup">
                  <Button variant="outline-warning" size="lg" className="my-4">
                    Sign In
                  </Button>
                </Link>
                <h6 className="mb-3 " style={{ color: "lightgrey" }}>
                  Don't have a key?{" "}
                  <Link style={{ color: "lightgrey" }} to="/contact">
                    Contact us
                  </Link>
                  .
                </h6>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
