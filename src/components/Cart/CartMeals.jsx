import React, {useContext} from 'react';
import styles from "./Cart.module.scss";
import CartContext from "../../store/CartContext";
import Button from "../UI/Button/Button";
import CartItem from "./CartItem";

const CartMeals = (props) => {
  const cartContext = useContext(CartContext);
  const items = cartContext.items.map(item => <CartItem
    key={item.id}
    title={item.title}
    price={item.price}
    amount={item.amount}
    onAdd={addCartItemHandler.bind(null, item)}
    onRemove={removeCartItemHandler.bind(null, item.id)}
  />);
  const classes = `${styles.cart__meals} ${props.status.form && styles['cart__meals--open']}`;

  function addCartItemHandler(item) {
    cartContext.addItem({...item, amount: 1});
  }

  function removeCartItemHandler(id) {
    cartContext.removeItem(id)
  }

  const showForm = () => {
    props.showForm((prevState) => {
      return {
        ...prevState,
        form: true,
        buttons: false,
      }
    });
  };

  return (
    <div className={classes}>
      <ul className={styles.cart__list}>{items}</ul>
      <div className={styles.cart__total}>
        <strong className={styles.caption}>Разом</strong>
        <span className={styles.total}>${Math.abs(cartContext.totalAmount).toFixed(2)}</span>
      </div>
      {props.status.buttons &&
        <div className={styles.cart__buttons}>
          <Button
            type='button'
            text='Зачинити'
            className='btn--outline'
            onClick={() => props.onHideCart(false)}>
          </Button>
          {cartContext.items.length > 0 && <Button type='button' text='Замовити' onClick={showForm}></Button>}
        </div>}
    </div>
  );
};

export default CartMeals;
