import React from 'react';
import Overlay from '../Overlay/Overlay';
import styles from './Modal.module.css';

function Modal(props) {
  return (
    <Overlay>
      <div className={styles.modal}>
        <h3>React hooks used are including:</h3>
        <p>
          useState, useRef, useReducer, useEffect, portals(rendering DOM) and
          CSS modules
        </p>
        <p>Developed by Gichul Jaun, 2022</p>
        <button>Close Modal</button>
      </div>
    </Overlay>
  );
}

export default Modal;
