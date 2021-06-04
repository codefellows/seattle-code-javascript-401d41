import React from 'react';

import useForm from '../../hooks/form.js';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TodoForm = props => {

  const { handleChange, handleSubmit } = useForm(props.handleSubmit);

  return (
    <>

      <Form onSubmit={handleSubmit}>

        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>Add To Do Item</Card.Title>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>To Do Item</Form.Label>
              <Form.Control onChange={handleChange} name="text" type="text" placeholder="Item Details" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Assigned To</Form.Label>
              <Form.Control onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Label>Difficulty</Form.Label>
              <Form.Control onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
            </Form.Group>

            <Button variant="primary" type="submit">Add Item</Button>
          </Card.Body>
        </Card>

      </Form>

    </>
  );
};

export default TodoForm;
