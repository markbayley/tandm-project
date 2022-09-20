import React from "react";
import { Container, Button, Row, Col, Nav, Form } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Square from "../components/Square";
import {
  ArrowRepeat,
  ArrowsMove,
  ZoomIn,
  Search,
  ArrowReturnLeft,
  ArrowCounterclockwise,
  ArrowClockwise,
  Brush,
  Pencil,
  PencilSquare,
  Bucket,
  Pen,
  Wrench,
  SaveFill
} from "react-bootstrap-icons";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const DocumentViewer = () => {
  return (
    <Container className="pt-3">
      <Row className="mb-2">
        <Col sm={3} className="mt-0">
          <h3 style={{ color: "grey", fontWeight: 200 }}>
            Document Viewer <Search size={20} className="" />
          </h3>
        </Col>
        <Col sm={8} className="mt-2 status">
          Scroll: <strong>Zoom </strong>&nbsp;<ZoomIn color="goldenrod"size={20} className="" /> &nbsp;
          Right Click: <strong>Move</strong> &nbsp; <ArrowsMove color="goldenrod" size={20} className=""/> &nbsp; 
          Left Click: <strong>Rotate</strong> &nbsp; <ArrowRepeat color="goldenrod" size={20} className="" />
        </Col>
        {/* <Col sm={3} className="mt-2">     </Col>
    <Col sm={3} className="mt-2">  </Col> */}

        <Col sm={1} className="mt-0  arrows">
          {" "}
          <Nav.Link href="/dashboard" className="p-1">
            <Button size="sm" variant="warning" disabled>
              {" "}
              <ArrowRepeat color="black" size={20} />
            </Button>
          </Nav.Link>
          
          <Nav.Link href="/dashboard" className="p-1">
            <Button size="sm">
              {" "}
              <ArrowReturnLeft color="white" size={20} />{" "}
            </Button>
          </Nav.Link>{" "}
       
        </Col>
      </Row>
      <Row className="mb-2">
        <Col
          sm={12} md={9}
          className="mt-2"
          style={{
            backgroundColor: "#17193b",
            borderRadius: "5px",
            height: "77vh",
            borderRadius: "5px",
          }}
        >
               <Col className="mt-2 " style={{display: "flex", flexDirection: "column", width: "40px", position: "absolute", zIndex: 1}}>
          {" "}
    
            <Button size="sm" variant="secondary">
              {" "}
              <Wrench color="white"  size={20} />
            </Button>
     
         
            <Button size="sm" variant="secondary">
              {" "}
              <Brush color="white"  size={20} />{" "}
            </Button>

            <Button size="sm" variant="secondary">
              {" "}
              <Pencil color="white"  size={20} />{" "}
            </Button>
            <Button size="sm" variant="secondary">
              {" "}
              <PencilSquare color="white"  size={20} />{" "}
            </Button>
            <Button size="sm" variant="secondary">
              {" "}
              <Bucket color="white"  size={20} />{" "}
            </Button>
            <Button size="sm" variant="secondary">
              {" "}
              <ArrowCounterclockwise color="white"  size={20} />{" "}
            </Button>
            <Button size="sm" variant="secondary">
              {" "}
              <ArrowClockwise color="white" size={20} />{" "}
            </Button>
            <Button size="sm" variant="secondary">
              {" "}
              <SaveFill color="white" size={20} />{" "}
            </Button>
     
       
        </Col>
            
          <Square />{" "}
        </Col>
        <Col
          sm={12} md={3}
          className="mt-2 "
          style={{
            backgroundColor: "#222548",
            borderRadius: "5px",
            height: "77vh",
          }}
        >
          <h6 className="mb-3" style={{color: "grey"}}>Tue 2nd Sep</h6>
          <Row className="my-4">
            <Nav.Link>@sarah.smith </Nav.Link> <br />
            <em>
              {" "}
              "This part is<strong> amazing</strong>. It's very engaging.
              right?"
            </em>
          </Row>
          <Row>
            <Nav.Link>@bill.brown </Nav.Link> <br />
            <em>
              {" "}
              "This part is ok. Needs some work though. I think the main thing
              is to keep it under budget for the client".
            </em>
          </Row>
          
          <hr></hr>
          <h6 className="mb-3" style={{color: "grey"}}>Mon 1st Sep</h6>
          <Row className="my-4">
            <Nav.Link>@sarah.smith </Nav.Link> <br />
            <em>
              {" "}
              "What do you mean 'ok'? Can you suggest any improvements Bill."
            </em>
          </Row>
          <Row>
            <Nav.Link>@bill.brown </Nav.Link> <br />
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
      </Row>
    </Container>
  );
};

export default DocumentViewer;
