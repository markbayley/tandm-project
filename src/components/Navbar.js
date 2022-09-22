import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import {
  House,
  Envelope,
  Gear,
  BoxArrowInLeft,
} from "react-bootstrap-icons";
import avatar1 from "../assets/avatar-1.png"

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
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Navbar
      style={{ borderBottom: "" }}
      expand="lg"
      fixed="top"
      className={colorChange ? "navbar colorChange" : "navbar"}
    >
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: "#007bff" }}>
          <House size={24} className="mb-2" />
          Tandm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {user ? (
              <>
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/viewer">CAD Viewer</Nav.Link>
              </>
            ) : (
              ""
            )}

            {!user ? (
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/error">CAD Design</NavDropdown.Item>
                <NavDropdown.Item href="/error">
                  Building Software
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/error">Get A Quote</NavDropdown.Item>
              </NavDropdown>
            ) : (
              " "
            )}
            {!user ? (
              <NavDropdown title="People" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/error">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/error">Team</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/error">
                  Company Profile
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              " "
            )}
          </Nav>

          <Modal
            show={show}
            onHide={handleClose}
            size="sm"
            style={{ borderRadius: "5px" }}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                {" "}
                <Navbar.Brand href="/" style={{ color: "#007bff" }}>
                  <House size={24} className="mb-2" />
                  Tandm.
                </Navbar.Brand>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
              <Login handleClose={handleClose} />
            </Modal.Body>
          </Modal>
          <Nav>
            {user ? (
              <NavDropdown
                title="Profile"
                id="navbarScrollingDropdown"
                align="end"
              >
                <NavDropdown.Item>
                  <Envelope size={20} className="mb-2" /> Messages
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  <Gear size={20} className="mb-2" /> Settings{" "}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  <BoxArrowInLeft size={20} className="mb-2" /> Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            )}
            {user ? (
              <Nav.Link className="mt-0 pt-1">
                <Image
                  className="profile-image"
                  src={avatar1}
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
