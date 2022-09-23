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
        className="mt-5 mx-0 mb-4"
        style={{
          backgroundColor: "#333867",
          borderRadius: "5px",
          color: "#ffffff",
          width: "100vw",
          textAlign: "center",
        }}
      >
        <Col className=" light p-5 med ">
          <Laptop className="my-2" color="#ffc107" size={50} />
          <br />
          CAD Design{" "}
        </Col>
        <Col className=" light p-5 med">
          <Building className="my-2" color="#ffc107" size={50} />
          <br />
          Building Layouts
        </Col>
        <Col className=" light p-5 med">
          <House className="my-2" color="#ffc107" size={50} />
          <br />
          Specialty Software
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
