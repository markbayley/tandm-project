import React, { useState } from "react";
import {
  Form,
  Image,
  Col,
  Row,
  Button,
  Container,
  Nav,
  InputGroup,
  Alert,
} from "react-bootstrap";
import { Facebook, Instagram, Twitter, Linkedin } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const ContactForm = () => {
  function AlertSaved() {
    const [show, setShow] = useState(false);

    if (show) {
      return (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>&nbsp;&nbsp; Sent! &nbsp;&nbsp;</Alert.Heading>
          <p>Not really sent. This is a test message.</p>
        </Alert>
      );
    }
    return (
      <Button
        size="md"
        variant="outline-warning"
        className="px-4 py-2"
        onClick={() => setShow(true)}
      >
        Save
      </Button>
    );
  }

  return (
   
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Row
          className="p-5"
          style={{
            // backgroundColor: "#333867 ",
            // borderRadius: "5px",
            // border: "3px solid #474d84",
          }}
        >
          
          <h1>Contact Us  
            <div class="col item social">
                {" "}
               <Link to="/home"><Facebook color="white" size={20} /> </Link>
               <Link to="/home"><Twitter color="white" size={20} /> </Link>
               <Link to="/home"><Instagram color="white" size={20} /> </Link>
               <Link to="/home"><Linkedin color="white" size={20} /> </Link>
            </div></h1>
         
          <Col xs={12} md={6}>
            <p className="pt-4">Name</p>
            <InputGroup className="mb-2" style={{ borderRadius: "5px" }}>
              <Form.Control
                className="contact"
                placeholder="Enter your name..."
                aria-label="Recipient's name"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
            <p className="pt-4">Email</p>

            <InputGroup className="mb-4" style={{ borderRadius: "5px" }}>
              <Form.Control
                className="contact"
                placeholder="Enter your email..."
                aria-label="Recipient's email"
                aria-describedby="basic-addon2"
              />
            </InputGroup>
          </Col>
          <Col className="pt-4">
            <p> Your Message</p>

            <InputGroup
              className=""
              style={{ borderRadius: "5px", height: "148px", color: "#ffffff" }}
            >
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Enter your message"
              />
            </InputGroup>

            <div className=" py-3 d-flex justify-content-end">
              <AlertSaved />
            </div>
          </Col>
        </Row>
      </Container>

  );
};

export default ContactForm;
