import React from 'react';
import {createPortal} from "react-dom";
import styles from './Modal.module.scss';

const Modal = (props) => {

  const Modal = (props) => {
    return (
      <div className={styles.modal}>
        <div className={styles.modal__inner}>

        </div>
      </div>
    )
  };

  return (
    <React.Fragment>
      {createPortal(<Modal {...props}/>, document.body)}
    </React.Fragment>
  );
};

export default Modal;
