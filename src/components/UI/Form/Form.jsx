import React from 'react';
import styles from './Form.module.scss';

const Form = ({children, className, ...props}) => {
  const classes = className ? `${styles.form} ${styles[className]}` : `${styles.form}`;

  return (
    <form className={classes} {...props}>
      {children}
    </form>
  );
};

export default Form;
