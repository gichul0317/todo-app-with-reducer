import React, { useEffect, useReducer, useState } from 'react';

function reducer(state, action) {
  if (action.type === 'add') {
    return [...state, newTodo(action.payload.name)];
  }
  if (action.type === 'toggle') {
    // something
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function Form(props) {
  const [todos, dispatchTodos] = useReducer(reducer, []);
  const [text, setText] = useState('');

  useEffect(() => {
    props.data(todos);
  }, [todos]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    dispatchTodos({ type: 'add', payload: { name: text } });
    setText('');
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your todos.."
      />
      <button type="submit">Add Todos</button>
    </form>
  );
}

export default Form;
