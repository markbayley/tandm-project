import React from "react";
import { Container, Button, Row, Col, Nav } from "react-bootstrap";
import {
  ArrowRepeat,
  ArrowsMove,
  ZoomIn,
  Search,
  ArrowReturnLeft,
} from "react-bootstrap-icons";
import ViewerBox from "../components/ViewerBox";
import ChatBox from "../components/ChatBox";

const DocumentViewer = () => {
  return (
    <Container className="pt-3">
      {/* SubNav */}
      <Row className="mb-2">
        <Col sm={3} className="mt-0">
          <h3 style={{ color: "grey", fontWeight: 200 }}>
            Document Viewer <Search size={20} className="" />
          </h3>
        </Col>
        <Col sm={8} className="mt-2 status">
          Scroll: <strong>Zoom </strong> &nbsp;
          <ZoomIn color="#ffae00" size={20} className="" /> &nbsp;&nbsp; Right
          Click: <strong>Move</strong> &nbsp;
          <ArrowsMove color="#ffae00" size={20} className="" /> &nbsp;&nbsp;
          Left Click: <strong>Rotate</strong> &nbsp;
          <ArrowRepeat color="#ffae00" size={20} className="" />
        </Col>
        {/* Links */}
        <Col sm={1} className="mt-0  arrows">
          {" "}
          <Nav.Link href="/dashboard" className="p-1">
            <Button size="sm" variant="secondary" disabled>
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

      {/* Viewer */}
      <Row className="mb-2">
        <ViewerBox />

        {/* Chat */}
        <ChatBox />
      </Row>
    </Container>
  );
};

export default DocumentViewer;
