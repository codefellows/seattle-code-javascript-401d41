import React from 'react'; // core react library

// Bootstrap specific Components
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

import './scss-test.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header>
        <Nav>
          <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
              <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>

      <main>
        <Form>
          <Card>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>

              <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Text>Enter Form Text</Form.Text>
              </Form.Group>

              <Form.Group>
                <Form.Label>Last:</Form.Label>
                <Form.Text>Enter Form Text</Form.Text>
              </Form.Group>
            </Card.Body>
          </Card>
        </Form>
      </main>
    </>
  );
}

export default App;
