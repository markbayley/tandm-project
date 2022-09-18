import React from "react";
import { Container, Button, Row, Col, ModalTitle } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  return (
    <>
      <Container style={{display: "flex", alignItems: "center", justifyContent: "flex-end", height: "100vh"}} className="header">
        <Row >
          <Col >
      <div style={{fontSize: "45px"}}>Building Design Software.</div>
         <Button variant="outline-light" size="lg" className="mt-4 " style={{borderColor: "goldenrod"}}><Nav.Link href="/dashboard"> Get Started</Nav.Link></Button>
                </Col>
           
                </Row>
           
  
 
      </Container>
    </>
  );
};

export default Home;
