import React from 'react';
import styles from './Button.module.css';

function Button(props) {
  return (
    <div className={styles.buttonbox}>
      <button className={styles.button} onClick={props.onShow}>
        🙈 Click Me 🙈
      </button>
    </div>
  );
}

export default Button;
