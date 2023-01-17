import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Auth from '../components/Auth'

function Settings() {
  return (
    <Container>
      <Row className="center">
        <Col xs={12} md={6} >
    <h4>Settings</h4>
    <Auth />
    </Col>
    </Row>
    </Container>
  )
}

export default Settings