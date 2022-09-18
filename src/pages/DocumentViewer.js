import React from "react";
import { Container, Button, Row, Col, Nav } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Square from "../components/Square";
import {
  ArrowRepeat,
  ArrowsMove,
  ZoomIn,
  Search,
  ArrowReturnLeft,
} from "react-bootstrap-icons";

const DocumentViewer = () => {
  return (
    <Container className="pt-3">
      <Row className="mb-2">
        <Col sm={3} className="mt-0">
          <h3 style={{ color: "grey", fontWeight: 200 }}>
            Document Viewer <Search size={20} className="" />
          </h3>
        </Col>
        <Col sm={8} className="mt-2">
          Scroll to <strong>Zoom</strong> &nbsp;
          <ZoomIn color="white" size={20} className="me-5" />
          Right Click to <strong>Move</strong>&nbsp;<ArrowsMove color="white" size={20} className="me-5"/> 
          Left Click to <strong>Rotate</strong>
          &nbsp;
          <ArrowRepeat color="white" size={20} className="" />
        </Col>
        {/* <Col sm={3} className="mt-2">     </Col>
    <Col sm={3} className="mt-2">  </Col> */}

        <Col sm={1} className="mt-0 d-flex ">
          {" "}
          <Nav.Link href="/dashboard" className="p-1">
            <Button size="sm" variant="danger">
              {" "}
              <ArrowRepeat color="white" size={20} />
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
          sm={9}
          className="mt-2 "
          style={{
            border: "1px solid white",
            height: "80vh",
            borderRadius: "5px",
          }}
        >
          <Square />{" "}
        </Col>
        <Col
          sm={3}
          className="mt-2"
          style={{
            border: "1px solid white",
            height: "80vh",
            borderRadius: "5px",
          }}
        >
          Tue 2nd Sep
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
          Mon 1st Sep
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
        </Col>
      </Row>
    </Container>
  );
};

export default DocumentViewer;
