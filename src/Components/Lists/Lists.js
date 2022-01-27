import React from 'react';
import styles from './Lists.module.css';

function Lists(props) {
  return (
    <li className={styles.lists}>
      <span
        className={
          props.todo.complete ? `${styles.check}` : `${styles.uncheck}`
        }
      >
        {props.todo.name}
      </span>
      <button
        onClick={() =>
          props.dispatch({ type: 'toggle', payload: { id: props.todo.id } })
        }
      >
        Check
      </button>
      <button
        onClick={() =>
          props.dispatch({ type: 'delete', payload: { id: props.todo.id } })
        }
      >
        Remove
      </button>
    </li>
  );
}

export default Lists;
