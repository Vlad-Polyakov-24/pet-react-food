import React from 'react';
import styles from './Form.module.scss';

const Form = (props) => {
  const classes = props.className ? `${styles.form} ${styles[props.className]}` : `${styles.form}`;

  return (
    <form className={classes}>
      {props.children}
    </form>
  );
};

export default Form;
