import React from 'react';
import reactDom from 'react-dom';
import styles from './Overlay.module.css';

export function Backdrop(props) {
  return <div className={styles.backdrop}></div>;
}

export function ModalOverlay(props) {
  return <div className={styles.overlay}>{props.children}</div>;
}

function Overlay(props) {
  return (
    <React.Fragment>
      {reactDom.createPortal(<Backdrop />, document.getElementById('overlay'))}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlay')
      )}
    </React.Fragment>
  );
}

export default Overlay;
