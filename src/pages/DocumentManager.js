import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import {
  Funnel,
  ArrowReturnRight,
  ArrowReturnLeft,
} from "react-bootstrap-icons";
import TableComponent from "../components/TableComponent";
import SideBar from "../components/SideBar";
import { SearchBar } from "../components/SearchBar";

function DocumentManager() {
  return (
    <Container className="pt-3">
      {/* SubNav */}
      <Row className="mb-3">
        <Col sm={4} className="mt-0">
          <h3 style={{ color: "grey", fontWeight: 200 }}>
            Document Manager <Funnel size={20} className="" />
          </h3>
        </Col>
        <Col sm={3} className="mt-2">
          {" "}
        </Col>
        {/* Search */}

        <SearchBar />

        {/* Links */}
        <Col className="arrows" sm={2}>
          <Nav.Link href="/" className="p-1">
            <Button size="sm">
              {" "}
              <ArrowReturnLeft color="white" size={20} />
            </Button>
          </Nav.Link>
          <Nav.Link href="/viewer" className="p-1 ">
            <Button size="sm">
              {" "}
              <ArrowReturnRight color="white" size={20} />{" "}
            </Button>
          </Nav.Link>{" "}
        </Col>
      </Row>

      <Row>
        {/* Table */}

        <TableComponent />

        {/* SideBar */}
        <SideBar />
      </Row>
    </Container>
  );
}

export default DocumentManager;
