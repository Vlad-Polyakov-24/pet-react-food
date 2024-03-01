import React from 'react';
import sprites from '../../../assets/images/icons/sprites.svg';
import styles from './Button.module.scss';

const Button = ({text, cart, total, className, ...props}) => {
  const classes = className?.split(' ').reduce((all, className) => all += ` ${styles[className]}`, '');

  return (
    <button className={className ? `${styles.btn}${classes}` : `${styles.btn}`} {...props}>
      {cart ? <span className={styles.btn__icon}>
        <svg>
          <use href={`${sprites}#cart`}/>
        </svg>
      </span> : null}
      <span className={styles.btn__text}>{text}</span>
      {total ? <span className={styles.btn__count}>{total}</span> : null}
    </button>
  )
};

export default Button;
