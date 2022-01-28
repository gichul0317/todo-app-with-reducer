import React, { useEffect, useReducer, useRef, useState } from 'react';
import styles from './Form.module.css';
import Lists from '../Lists/Lists';

function reducer(state, action) {
  if (action.type === 'add') {
    return [...state, newTodo(action.payload.name)];
  }
  if (action.type === 'toggle') {
    return state.map((item) => {
      if (item.id === action.payload.id) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
  }
  if (action.type === 'delete') {
    return state.filter((item) => item.id !== action.payload.id);
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function Form(props) {
  const [todos, dispatchTodos] = useReducer(reducer, []);
  const [text, setText] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    dispatchTodos({ type: 'add', payload: { name: text } });
    setText('');
  };

  return (
    <div className={styles.container}>
      <h1>What's your todos?</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your todos.."
          ref={inputRef}
        />
        <button type="submit">Add Todos</button>
      </form>
      <ul>
        {todos.length !== 0 ? (
          todos.map((item) => {
            return <Lists key={item.id} todo={item} dispatch={dispatchTodos} />;
          })
        ) : (
          <p>No Todos...😢 Please Add!😎</p>
        )}
      </ul>
    </div>
  );
}

export default Form;
