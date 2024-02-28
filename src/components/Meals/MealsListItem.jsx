import React from 'react';
import styles from './Meals.module.scss';
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const MealsListItem = (props) => {
  return (
    <li className={styles['meals__list-item']}>
      <div>
        <h2 className={styles.title}>{props.title}</h2>
        <p className={styles.desc}>{props.desc}</p>
        <strong className={styles.price}>${props.price}</strong>
      </div>
      <Form className='form--meals'>
        <Input type='number' desc='Кількість'/>
        <Button type='submit' text='Додати'/>
      </Form>
    </li>
  );
};

export default MealsListItem;
