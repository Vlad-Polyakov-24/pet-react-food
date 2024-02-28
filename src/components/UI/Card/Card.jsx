import React from 'react';
import styles from './Card.module.scss';

const Card = (props) => {
  const classes = `${styles.card} ${styles[props.className]}`;

  return (
    <div className={classes}>
      {props.children}
    </div>
  );
};

export default Card;
