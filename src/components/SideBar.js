import React from 'react'
import {
    Button,
    Nav,
    Col,
    Row
  } from "react-bootstrap";
import ImageUploader from './ImageUploader';
import {
    Upload,
  } from "react-bootstrap-icons";

const SideBar = () => {
  return (
    <Col sm={1} style={{backgroundColor: "#17193b "}}>
    <Row className="mt-0  p-1" style={{backgroundColor: "", borderRadius: "3px", border: "2px solid #222548"}}>
      <Nav.Link href="/viewer" className="p-0">
        <Button size="sm" variant="success"  style={{color: "#ffae00", fontSize: "1rem"}}>
          {" "}
          Upload Image &nbsp;<Upload color="#ffc107" size={20} />
        </Button>
      </Nav.Link>
    </Row>
    <Row
      className=""
      style={{
        backgroundColor: "",
        border: "",
        borderRadius: "5px",
        height: "33vh",
     
      }}
    >
      {/* <ImageUploader /> */}
    </Row>

    <Row
      style={{
        backgroundColor: "",
        border: "",
        borderRadius: "5px",
        height: "30vh",
        marginTop: "10px",
      }}
    >
      {/* <ImageUpload /> */}
    </Row>

    <Row
      style={{
        backgroundColor: "#222548",
        border: "",
        borderRadius: "5px",
        height: "20vh",
        marginTop: "10px",
      }}
    >
      {" "}
    </Row>
  </Col>
  )
}

export default SideBar