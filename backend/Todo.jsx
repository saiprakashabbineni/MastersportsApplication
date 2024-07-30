import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Todo = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [currentTodo, setCurrentTodo] = useState('');
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = (todo, index) => {
    setCurrentTodo(todo);
    setCurrentIndex(index);
    setShow(true);
  };

  const addition = () => {
    if (text.trim() !== '') {
      setTodos([...todos, text]);
      setText('');
    }
  };

  const deletion = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  const updateTodo = () => {
    const updatedTodos = todos.map((todo, index) =>
      index === currentIndex ? currentTodo : todo
    );
    setTodos(updatedTodos);
    setShow(false);
    setCurrentTodo('');
  };

  return (
    <div>
      <h4>Hello</h4>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addition}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p>{todo}</p>
            <button onClick={() => deletion(index)}>Delete</button>
            <Button variant="primary" onClick={() => handleShow(todo, index)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={currentTodo}
            onChange={(e) => setCurrentTodo(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateTodo}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Todo;
