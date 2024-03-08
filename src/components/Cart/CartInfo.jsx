import React from 'react';
import styles from './Cart.module.scss';
import sprites from '../../assets/images/icons/sprites.svg';
import Button from "../UI/Button/Button";

const CartInfo = (props) => {
  return (
    <div className={styles.cart__info}>
      <div className={styles['cart__info-icon']}>
        <svg>
          <use href={`${sprites}#${props.status.code}`}/>
        </svg>
      </div>
      <p className={styles['cart__info-text']}>{props.status.message}</p>
      <Button
        type='button'
        text='Зачинити'
        className='btn--outline btn--center'
        onClick={() => props.onHideCart(false)}>
      </Button>
    </div>
  );
};

export default CartInfo;
