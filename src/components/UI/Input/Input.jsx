import React from 'react';
import styles from '../Form/Form.module.scss';
import input from './Input.module.scss';

const Input = React.forwardRef(({desc, className, size, children, ...props}, ref) => {
  let classes = input.input;

  if (className !== '') classes += ` ${input[className]}`;
  if (size === 'full') classes += ` ${input['input--full']}`;

  return (
    <div className={styles.form__group}>
      <label className={styles.form__label} htmlFor={props.id}>{desc}</label>
      <input ref={ref} className={classes} {...props}/>
      {children}
    </div>
);
});

export default Input;
