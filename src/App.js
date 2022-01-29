import React from 'react';
import Form from './Components/Form/Form';
import Modal from './Components/Modal/Modal';
import { Backdrop, ModalOverlay } from './Components/Overlay/Overlay';
import Button from './Components/Button/Button';
import './App.css';
import { useState } from 'react/cjs/react.development';

function App(props) {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <React.Fragment>
      {showModal && <Modal onClose={hideModalHandler} />}
      <Form />
      <Button onShow={showModalHandler} />
    </React.Fragment>
  );
}

export default App;
