import React, {useRef, useContext, useState} from 'react';
import CartContext from "../../../store/CartContext";
import styles from './Meals.module.scss';
import Form from "../../UI/Form/Form";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const MealsListItem = (props) => {
  const input = useRef();
  const cartContext = useContext(CartContext);
  const [validInput, setValidInput] = useState(true);

  const submit = e => {
    e.preventDefault();

    if (!input.current.value || +input.current.value <= 0) {
      setValidInput(false);
      return;
    }

    setValidInput(true);

    cartContext.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      amount: +input.current.value,
    });

    e.target.reset();
  };

  return (
    <li className={styles['meals__list-item']}>
      <div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.desc}>{props.desc}</p>
        <strong className={styles.price}>${props.price}</strong>
      </div>
      <Form className='form--meals' onSubmit={submit}>
        <Input ref={input} type='number' max='10' desc='Кількість' id={props.id} className={!validInput ? 'invalid' : ''}/>
        <Button type='submit' text='Додати'/>
      </Form>
    </li>
  );
};

export default MealsListItem;
