import React from 'react'
import { Form, Button, Col } from "react-bootstrap";
import {
  Search,
} from "react-bootstrap-icons";

export const SearchBar = () => {
  return (
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
  )
}
