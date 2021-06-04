import React, { useEffect, useState, useCallback } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TodoForm from './form.js';
import TodoList from './list.js';

import useAjax from '../../hooks/ajax.js';

const API = process.env.REACT_APP_API;

const ToDo = () => {

  const {request, response} = useAjax();

  const [list, setList] = useState([]);

  const addItem = async (item) => {
    const options = {
      method: 'post',
      url: `${API}/api/v1/todo`,
      data: item,
    };
    request(options);
  };

  const deleteItem = async (id) => {
    const options = {
      method: 'delete',
      url: `${API}/api/v1/todo/${id}`,
    };
    request(options);
  };

  const toggleComplete = async (id) => {

    const item = list.filter(i => i._id === id)[0] || {};

    if (item._id) {
      const options = {
        method: 'put',
        url: `${API}/api/v1/todo/${id}`,
        data: { complete: !item.complete },
      };
      request(options);
    }

  };

  const getToDoList = useCallback( async () => {
    const options = {
      method: 'get',
      url: `${API}/api/v1/todo`,
    };
    request(options);
  }, [request]);


  // Any time the "response" changes (the hook finds data) this effect runs
  // If response has a new list, it redraws it.
  // If not (assume it's a post/put/delete) and re-fetch the whole list
  useEffect( () => {
    if ( response.results ) {
      response.results && setList(response.results);
    }
    else {
      getToDoList();
    }
  }, [response, getToDoList, setList]);

  useEffect(() => {
    let incomplete = list.filter(item => !item.complete).length;
    document.title = `To Do List: ${incomplete}`;
  });

  // Runs on app load
  useEffect( () => {
    getToDoList();
  }, [getToDoList]);

  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

      <Container>
        <Row style={{margin:'1rem 0'}}>
          <Col>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">To Do List Manager ({list.filter(item => !item.complete).length})</Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col md="auto" style={{margin: '1rem'}}>
            <TodoForm handleSubmit={addItem} />
          </Col>
          <Col style={{margin: '1rem'}}>
            <TodoList
              list={list}
              handleComplete={toggleComplete}
              handleDelete={deleteItem}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDo;
