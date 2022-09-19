import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import { HouseFill } from 'react-bootstrap-icons';

function NavScrollExample() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Navbar style={{borderBottom: ""}}expand="lg"  fixed="top"  className={colorChange ? 'navbar colorChange' : 'navbar'}>
      <Container fluid >
        <Navbar.Brand href="/" style={{color: "#007bff"}}><HouseFill  size={24} className="mb-2"/>Tandm.</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px"}}
            navbarScroll
          >
            {/* <Nav.Link href="/" ><HouseFill color="black" size={24} className="pb-1"/></Nav.Link> */}

            {user ? <Nav.Link href="/dashboard" >Dashboard</Nav.Link> : ""}
          
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">CAD Design</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Building Software
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Get A Quote
                </NavDropdown.Item>
              </NavDropdown>
         
          </Nav>

          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}

          <Modal show={show} onHide={handleClose} size="sm">
            <Modal.Header closeButton>
              <Modal.Title> <Navbar.Brand href="/" style={{color: "#007bff"}}><HouseFill  size={24} className="mb-2"/>Tandm.</Navbar.Brand></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Already have an account?
              <Login handleClose={handleClose} />
            </Modal.Body>
            {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
          </Modal>
          <Nav>
          <Nav.Link href="/contact" >Contact</Nav.Link> 
            {user ? (
              <NavDropdown
                title="Profile"
                id="navbarScrollingDropdown"
                align="end"
              >
                <NavDropdown.Item >
                Messages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Sign Out</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link onClick={handleShow}>Login</Nav.Link>
            )}
            {user ? (
              <Nav.Link className="mt-0 pt-1">
                <Image
                  className="thumbnail-image"
                  src="/avatar.png"
                  alt="Profile"
                  height="30px"
                  roundedCircle
                />
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
