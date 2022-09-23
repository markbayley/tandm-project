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
import { Link } from "react-router-dom";
import { House, Envelope, Gear, BoxArrowInLeft } from "react-bootstrap-icons";
import avatar1 from "../assets/avatar-1.png";

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
        <Navbar.Brand style={{ color: "#007bff" }}>
          <Link to="/">
            <House size={24} className="mb-2" />
            Tandm
          </Link>
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
                <Link className="toplink" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="toplink" to="/viewer">
                  CAD Viewer
                </Link>
              </>
            ) : (
              ""
            )}

            {!user ? (
              <NavDropdown title="Products" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/error">CAD Design</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/error">Building Software</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/error">Get A Quote</Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              " "
            )}
            {!user ? (
              <NavDropdown title="People" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/error">About Us</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/error">Team</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/error">Company Profile</Link>
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
                <Navbar.Brand style={{ color: "#007bff" }}>
                  <Link to="/">
                    <House size={24} className="mb-2" />
                    Tandm.
                  </Link>
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
                  <Link to="/error">
                    {" "}
                    <Envelope size={20} className="mb-2" /> Messages{" "}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/error">
                    {" "}
                    <Gear size={20} className="mb-2" /> Settings{" "}
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  <Link to="/">
                    <BoxArrowInLeft size={20} className="mb-2" /> Sign Out
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Link className="toplink" to="/contact">
                  {" "}
                  Contact{" "}
                </Link>
                <Link className="toplink" to="/login">
                  {" "}
                  Login{" "}
                </Link>
              </>
            )}
            {user ? (
              <Link to="/" className="mt-0 pt-1">
                <Image
                  className="profile-image"
                  src={avatar1}
                  alt="Profile"
                  height="30px"
                  roundedCircle
                />
              </Link>
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
