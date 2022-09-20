import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import jsonData from "./../api/data.json";

import {
  Funnel,
  SortDown,
  SortUp,
  Upload,
  SortAlphaDownAlt,
  SortAlphaUp,
  Search,
  ZoomIn,
  Save,
  ArrowCounterclockwise,
  ArrowReturnRight,
  ArrowReturnLeft,
  ArrowRepeat
} from "react-bootstrap-icons";
import ImageUploader from "./ImageUploader";
import ImageUpload from "./ImageUpload";

function DocumentList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <Container className="pt-3">
      <Row className="mb-2">
        <Col sm={4} className="mt-0">
          <h3 style={{ color: "grey", fontWeight: 200 }}>
            Document Manager <Funnel size={20} className="" />
          </h3>
        </Col>
        <Col sm={3} className="mt-2">
          {" "}
        </Col>

        <Col sm={3}>
          <Form className="d-flex" style={{ height: "35px" }}>
            <Form.Control
              type="search"
              placeholder="Search title, id..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light" size="sm">
              <Search color="white" size={20} className="pb-1" />
            </Button>
          </Form>
        </Col>
        <Col className="arrows" sm={2}  >
        <Nav.Link href="/" className="p-1">
            <Button size="sm"  >
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
        <Col sm={10}>
          <Table
            style={{
              backgroundColor: "#222548",
              color: "",
              borderColor: "#222548",
              borderRadius: "7px",
            }}
          >
            <thead style={{ color: "white" }}>
              <tr>
                <th>#Id</th>
                <th>Thumbnail</th>
                <th>
                  Title &nbsp;
                  <SortAlphaDownAlt
                    color="white"
                    size={24}
                    className="pb-1"
                  />{" "}
                  &nbsp;
                  <SortAlphaUp color="white" size={24} className="pb-1" />
                </th>
                <th>Uploaded By</th>

                <th>
                  Date&nbsp;
                  <SortDown color="white" size={24} className="pb-1" /> &nbsp;
                  <SortUp color="white" size={24} className="pb-1" />
                </th>
                <th>&nbsp;&nbsp;&nbsp;Comments</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {/* Small sample mapping of json data element */}
              {data.map((item, index) => (
                <tr
                  key={index}
                  style={{ backgroundColor: "", color: "#ffffff" }}
                  className="tab"
                >
                  <td>{item.id}</td>
                  <td>
                    {" "}
                    <Nav.Link href="/viewer">
                      <Image
                        className="thumbnail-image"
                        src={item.image}
                        alt="Profile"
                        height="90px"
                        width="125px"
                      />
                    </Nav.Link>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.uploader}</td>
                  <td>{item.date}</td>

                  <td>
                    {" "}
                    <Nav.Link>
                      <Image
                        className="profile-image"
                        src={item.avatar1}
                        alt="Profile"
                        height="25px"
                     
                      />
                      &nbsp;{item.commenter1}
                      <h6>
                        <em>"{item.comment1}"</em>
                      </h6>
                    </Nav.Link>
                    <Nav.Link>
                      <Image
                        className="profile-image"
                        src={item.avatar2 ? item.avatar2 : null}
                        alt="Profile"
                        height="25px"
                     
                      />
                      &nbsp;{item.commenter2}
                      <h6>
                        <em>
                          "{item.comment2 ? item.comment2 : "comment removed"}"
                        </em>
                      </h6>
                    </Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href={item.link} className="p-0">
                      <td className="pb-2 status" style={{ color: item.progress }}>
                        {item.status}
                      </td>
                      <Button size="sm" variant="warning">
                        {" "}
                        View&nbsp;
                        <ZoomIn color="" size={16} />
                      </Button>
                    </Nav.Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>



        <Col sm={2}>
          <Row className="mt-0  p-1" style={{backgroundColor: "#222548 ", borderRadius: "3px", border: "2px solid #222548"}}>
            <Nav.Link href="/viewer" className="p-0">
              <Button size="sm" variant="success"  style={{color: "goldenrod"}}>
                {" "}
                Upload Image &nbsp;<Upload color="goldenrod" size={20} />
              </Button>
            </Nav.Link>
          </Row>
          <Row
            className=""
            style={{
              backgroundColor: "#222548",
              border: "",
              borderRadius: "5px",
              height: "30vh",
           
            }}
          >
            <ImageUploader />
          </Row>

          <Row
            style={{
              backgroundColor: "#222548",
              border: "",
              borderRadius: "5px",
              height: "50vh",
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
              height: "50vh",
              marginTop: "10px",
            }}
          >
            {" "}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default DocumentList;
