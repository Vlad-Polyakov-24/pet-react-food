import React from 'react';
import styles from './Cart.module.scss';
import Button from "../UI/Button/Button";

const CartItem = (props) => {
  return (
    <li className={styles['cart__list-item']}>
      <div>
        <h2 className={styles.title}>{props.title}</h2>
        <div className={styles['cart__list-item-row']}>
          <span className={styles.price}>${props.price}</span>
          <span className={styles.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles['cart__list-item-buttons']}>
        <Button type='button' text='-' className='btn--outline btn--small-radius btn--count' onClick={props.onRemove}/>
        <Button type='button' text='+' className='btn--outline btn--small-radius btn--count' onClick={props.onAdd}/>
      </div>
    </li>
  );
};

export default CartItem;
