import React from "react";
import {Animated} from "react-animated-css";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
  return (
    <Container
        style={{
          display: "flex",

          justifyContent: "flex-end",
          alignItems: "center",
          height: "80vh",
        }}
        className="header"
      >
        <Animated animationIn="fadeInRight"  isVisible={true}>
        <Row className="mt-5 p-5" style={{backgroundColor: "#333867", borderRadius: "5px"}}>
          <Col >
          
        

       
              <div >
                <div className="mb-5" style={{ color: "#8a8fba" }}>
              <span className="light large">Software for </span> <span className="heavy"> Architects, <br/>
              Builders, <span className="light">and </span>Engineers.</span>
                </div>
          
                <h5 className="mb-3 " style={{ color: "lightgrey" }}>
                  Need more information?{" "}
                  <Link style={{ color: "lightgrey" }} to="/contact">
                    Contact us
                  </Link>
                  .
                </h5>
              </div >
      
    
         
          </Col>
        </Row>
        </Animated>
      </Container>
  );
}
