import React from 'react';
import {createPortal} from "react-dom";
import styles from './Modal.module.scss';

const ModalWindow = (props) => {
  const hideModal = (e) => {
    const target = e.target.className === styles.modal;
    if (target) props.onHideCart(false);
  };

  return (
    <div className={styles.modal} onClick={(e) => hideModal(e)}>
      <div className={styles.modal__inner}>
        {props.children}
      </div>
    </div>
  )
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<ModalWindow {...props}/>, document.body)}
    </React.Fragment>
  );
};

export default Modal;
