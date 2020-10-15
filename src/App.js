import React from 'react';
import logo from './logo.svg';
import { Container, Row, Col, Button } from 'react-bootstrap';import './App.css';

function App() {
  return (
      <Container fluid className="App">
        <Row>
          <Col>
            <h1>EVENTO</h1>
          </Col>
        </Row>
        <Row>
          <Col>a</Col>
          <Col>b</Col>
        </Row>
      </Container>
  );
}

export default App;
