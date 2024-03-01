import React from 'react';
import styles from '../Form/Form.module.scss';
import input from './Input.module.scss';

const Input = React.forwardRef(({desc, valid, ...props}, ref) => {
  let classes = input.input;

  if (!valid) classes += ` ${input.invalid}`;

  return (
    <div className={styles.form__group}>
      <label className={styles.form__label} htmlFor={props.id}>{desc}</label>
      <input ref={ref} className={classes} {...props}/>
    </div>
);
});

export default Input;
