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
 
      <h6 className="mb-4" style={{ color: "grey" }}>
        Tue 2nd Sep
      </h6>
      
    
          <Image
            className="profile-image"
            src={avatar1}
            alt="Profile"
            height="25px"
          />
          @sarah.smith
 
        <br />
        <em style={{ color: "lightgrey" }}>"This part is amazing. It's very engaging.</em>
      
      <br />
      <br />
   
          <Image
            className="profile-image"
            src={avatar2}
            alt="Profile"
            height="25px"
          />
            <a>@bill.brown</a>
     
        <br />
        <em style={{ color: "lightgrey" }}>
          {" "}
          "This part is ok. Needs some work though. I think the main thing is to
          keep it under budget for the client".
        </em>
  
      <hr></hr>
      <h6 className="mb-4" style={{ color: "grey" }}>
        Mon 1st Sep
      </h6>
   
     
          <Image
            className="profile-image"
            src={avatar1}
            alt="Profile"
            height="25px"
          />
         <a>@sarah.smith</a>
   
        <br />
        <em style={{ color: "lightgrey" }}>
          {" "}
          "What do you mean 'ok'? Can you suggest any improvements Bill."
        </em>
    
      <br />
    
      <br />
          <Image
            className="profile-image"
            src={avatar2}
            alt="Profile"
            height="25px"
          />
           <a>@bill.brown</a>
      
        <br />
        <em style={{ color: "lightgrey" }}> "No".</em>
        <br />
      <br />
   
          <Image
            className="profile-image"
            src={avatar2}
            alt="Profile"
            height="25px"
          />
           <a>@bill.brown</a>
     
        <br />
        <em style={{ color: "lightgrey" }}>
          {" "}
          "This part is ok. Needs some work though...".
        </em>
      
 
      <br /> 
      <br /> 
        <Form className="d-flex" style={{ height: "35px" }}>
          <Form.Control
            type="search"
            placeholder="Post a comment..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-warning" size="sm">
            Reply
          </Button>
        </Form>
    
    </Col>
  );
};

export default ChatBox;
