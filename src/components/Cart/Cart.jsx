import React, {useContext, useEffect, useState} from 'react';
import CartContext from "../../store/CartContext";
import Modal, { ModalOverlay } from "../UI/Modal/Modal";
import useHttp from "../../hooks/useHttp";
import CartForm from "./CartForm";
import CartMeals from "./CartMeals";
import CartInfo from "./CartInfo";

const Cart = (props) => {
  const cartContext = useContext(CartContext);
  const {isLoading, error, sendHttpRequest} = useHttp();
  const [formUI, setFormUI] = useState({
    form: false,
    buttons: true,
  });
  const [isSend, setIsSend] = useState(false);

  useEffect(() => {
    if (isSend && !error) cartContext.resetCart()
  }, [isSend]);

  const sendData = (data) => {
    const {items, totalAmount} = cartContext;
    const meals = {};

    items.map(item => {
      meals[item.title] = {
        amount: item.amount,
        price: item.price,
      }
    });

    const receipt = {
      totalAmount,
      meals: meals,
      userInfo: data,
    };

    sendHttpRequest('https://jokes-study-default-rtdb.firebaseio.com/receipts.json', {
      method: 'POST',
      body: receipt,
    }).then(() => {
      setIsSend(true);
    });
  };

  return (
    <Modal onHideCart={props.onHideCart}>
      {isLoading && <ModalOverlay/>}
      {!isSend && <CartMeals onHideCart={props.onHideCart} showForm={setFormUI} status={formUI}/>}
      {!isSend && formUI.form && <CartForm onHideCart={props.onHideCart} onSubmit={sendData}/>}
      {!isLoading && error && <CartInfo status={{code: 'unsuccessful', message: error}} onHideCart={props.onHideCart}/>}
      {!isLoading && isSend && !error && <CartInfo status={{code: 'success', message: 'Дякуємо за замовлення!'}} onHideCart={props.onHideCart}/>}
    </Modal>
  );
};

export default Cart;
