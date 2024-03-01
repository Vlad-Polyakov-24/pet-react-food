import React, {useContext} from 'react';
import styles from './Cart.module.scss';
import CartContext from "../../store/CartContext";
import Modal from "../UI/Modal/Modal";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext)
  const items = cartContext.items.map(item => <CartItem
    key={item.id}
    title={item.title}
    price={item.price}
    amount={item.amount}
    onAdd={addCartItemHandler.bind(null, item)}
    onRemove={removeCartItemHandler.bind(null, item.id)}
  />);
  const hasItems = cartContext.items.length > 0;

  function addCartItemHandler(item) {
    cartContext.addItem({...item, amount: 1});
  }

  function removeCartItemHandler(id) {
    cartContext.removeItem(id)
  }

  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={styles.cart__list}>
        {items}
      </ul>
      <div className={styles.cart__total}>
        <strong className={styles.caption}>Разом</strong>
        <span className={styles.total}>${Math.abs(cartContext.totalAmount).toFixed(2)}</span>
      </div>
      <div className={styles.cart__buttons}>
        <Button type='button' text='Зачинити' className='btn--outline' onClick={() => props.onHideCart(false)}></Button>
        {hasItems && <Button type='button' text='Замовити'></Button>}
      </div>
    </Modal>
  );
};

export default Cart;
