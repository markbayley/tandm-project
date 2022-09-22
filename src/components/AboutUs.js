import React from "react";
import {Animated} from "react-animated-css";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  House
  } from "react-bootstrap-icons";

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
        <Animated animationIn="fadeInUp" smooth animationInDuration="1500" isVisible={true}>
          <div style={{marginLeft: "30px"}}><House size={130} color="#333867" /></div>
        <Row className="mt-0 p-5" style={{backgroundColor: "#333867", borderRadius: "5px"}}>
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
