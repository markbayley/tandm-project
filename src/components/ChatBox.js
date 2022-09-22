import React from "react";
import Image from "react-bootstrap/Image";
import { Button, Row, Col, Form, Nav } from "react-bootstrap";
import avatar1 from "../assets/avatar-1.png"
import avatar2 from "../assets/avatar-2.png"

const ChatBox = () => {
  return (
    <Col
      sm={12}
      md={3}
      className="mt-2 "
      style={{
        backgroundColor: "#222548",
        borderRadius: "5px",
        height: "77vh",
      }}
    >
        <br></br>
      <h6 className="mb-3" style={{ color: "grey" }}>
        Tue 2nd Sep
      </h6>
      <Row>
        <Nav.Link>
          <Image
            className="profile-image"
            src={avatar1}
            alt="Profile"
            height="25px"
          />
          &nbsp;@sarah.smith
        </Nav.Link>
        <br />
        <em> "This part is amazing. It's very engaging.</em>
      </Row>
      <br />
      <Row>
        <Nav.Link>
          <Image
            className="profile-image"
            src={avatar2}
            alt="Profile"
            height="25px"
          />
          &nbsp;@bill.brown
        </Nav.Link>
        <br />
        <em>
          {" "}
          "This part is ok. Needs some work though. I think the main thing is to
          keep it under budget for the client".
        </em>
      </Row>
      <hr></hr>
      <h6 className="mb-3" style={{ color: "grey" }}>
        Mon 1st Sep
      </h6>
      <Row>
        <Nav.Link>
          <Image
            className="profile-image"
            src={avatar1}
            alt="Profile"
            height="25px"
          />
          &nbsp;@sarah.smith
        </Nav.Link>
        <br />
        <em>
          {" "}
          "What do you mean 'ok'? Can you suggest any improvements Bill."
        </em>
      </Row>
      <br />
      <Row>
        <Nav.Link>
          <Image
            className="profile-image"
            src={avatar2}
            alt="Profile"
            height="25px"
          />
          &nbsp;@bill.brown
        </Nav.Link>
        <br />
        <em> "No".</em>
      </Row>
      <br /> 
      <Row>
        <Form className="d-flex" style={{ height: "35px" }}>
          <Form.Control
            type="search"
            placeholder="Post a comment..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="warning" size="sm">
            Reply
          </Button>
        </Form>
      </Row>
    </Col>
  );
};

export default ChatBox;
