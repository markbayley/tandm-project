import React from "react";
import { Col, Row, Container, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Laptop, Building, House } from "react-bootstrap-icons";

export default function Divider() {
  return (
    <>
      <Row
        style={{
          // backgroundColor: "#333867",
          borderRadius: "5px",
          color: "#ffffff",
          height: "5vw",
          textAlign: "center",
        }}
      ></Row>
      <Row
        className="mt-5 mx-0 mb-0 pt-5"
        style={{
         
          borderRadius: "5px",
          color: "white",
          width: "100vw",
          textAlign: "center",
        }}
      >
       <h2 id="subheader" style={{fontSize: "32px"}}> "A name you can trust in building software - Peter Hughs"</h2>
        <Col className=" light px-5 med ">
          <div className="icon-box">
          <Laptop className="my-2 p-2" color="#ffc107" size={100} style={{border: "5px solid white", borderRadius: "50%"}} />
          <br />
          CAD Design{" "}
          </div>
        </Col>
        <Col className=" light px-5 med">
        <div className="icon-box">
          <Building className="my-2 p-2 " color="#ffc107" size={100} style={{border: "5px solid white", borderRadius: "50%"}}/>
          <br />
          Consulting
          </div>
        </Col>
        <Col className=" light px-5 med">
        <div className="icon-box">
          <Building className="my-2 p-2 " color="#ffc107" size={100} style={{border: "5px solid white", borderRadius: "50%"}}/>
          <br />
          Building Layouts
    
          </div>
        </Col>
    
        <Col className=" light px-5 med">
        <div className="icon-box">
          <House className="my-2 p-2" color="#ffc107" size={100} style={{border: "5px solid white", borderRadius: "50%"}} />
          <br />
          More
         
          </div>
      
        </Col>

        {/* <Col  >
        <Row
          style={{ fontSize: "110px", color: "#007bff", fontWeight: 600 }}
        ></Row>

        <div>
          <h1
            style={{ marginBottom: "", color: "goldenrod", lineHeight: "1.6" }}
          >
            We Design Software for Architects, Builders, & Engineers.
          </h1>
      
          <Link to="/dashboard">
            <Button variant="outline-warning" size="lg" className="mb-5">
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
        </div>
      </Col> */}
      </Row>
    </>
  );
}
