import React from 'react'
import { Form, Button, Col } from "react-bootstrap";
import {
  Search,
} from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";

export const SearchBar = () => {
  return (
    <Col sm={3}>
      <h6 style={{backgroundColor: "#333867", padding: "10px 0px", margin: "0px 20px", borderRadius: "30px", textAlign: "center", color: "lightgrey"}}>Filter, Sort or Search Data Table</h6>
      {/* <Form>
      <Form.Control
        type="search"
        placeholder="Search title, id..."
        className="me-2"
        aria-label="Search"
      />
      
      <Button variant="outline-light" size="sm">
        <Search color="white" size={20} className="pb-1" />
      </Button>
    </Form>  */}
  </Col>
  )
}
