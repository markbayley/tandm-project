import React from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const { user } = useUserAuth();
  return (
    <>
      <Container
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
        className=""
      >
        <Row>
          <Col>
            <Row
              style={{ fontSize: "110px", color: "#007bff", fontWeight: 600 }}
            >
              Tandm
            </Row>

            {user ? (
              <>
                <h1 style={{ lineHeight: "0", marginBottom: "50px" }}>
                  Building Together
                </h1>
                <h5 className="mt-5 mb-3">You are signed in.</h5>
                <Link to="/dashboard">
                  <Button variant="warning" size="lg" className="mb-5">
                    Dashboard
                  </Button>
                </Link>
                <h5 className="mb-3 " style={{ color: "lightgrey" }}>
                  Need more information?{" "}
                  <Link style={{ color: "lightgrey" }} to="/contact">
                    Contact us
                  </Link>
                  .
                </h5>
              </>
            ) : (
              <>
                <h1 style={{ lineHeight: "0", marginBottom: "50px" }}>
                  Building Together
                </h1>
                <Link to="/signup">
                  <Button variant="outline-warning" size="lg" className="my-4 ">
                    SIGN IN
                  </Button>
                </Link>
                <h5 className="mb-3 " style={{ color: "lightgrey" }}>
                  Don't have a key?{" "}
                  <Link style={{ color: "lightgrey" }} to="/contact">
                    Contact us
                  </Link>
                  .
                </h5>
              </>
            )}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Home;
