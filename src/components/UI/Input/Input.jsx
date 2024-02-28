import React from 'react';
import styles from '../Form/Form.module.scss';
import input from './Input.module.scss';

const Input = ({desc, ...props}) => {
  return (
    <div className={styles.form__group}>
      <label className={styles.form__label} htmlFor={props.id}>{desc}</label>
      <input className={input.input} {...props}/>
    </div>
);
};

export default Input;
