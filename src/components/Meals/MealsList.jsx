import React from 'react';
import MealsListItem from "./MealsListItem";
import styles from './Meals.module.scss'

const DUMMY_MEALS = [
  {
    id: "m1",
    name: 'Рол "Наомі"',
    description:
      "Сир Філадельфія, курячу філе, масаго, помідор, огірок, кунжут",
    price: 11.99,
  },
  {
    id: "m2",
    name: "Спайс в лососі",
    description: "Рис, лосось, соус спайс",
    price: 3.99,
  },
  {
    id: "m3",
    name: "Суші с угрем",
    description: "Угор копчений, соус унагі, кунжут",
    price: 4.99,
  },
  {
    id: "m4",
    name: 'Салат "Поке с лососем"',
    description:
      "Рис, лосось, огірок, чука, норі, стружка тунця, соус оріховий",
    price: 7.99,
  },
];

const MealsList = (props) => {
  const items = DUMMY_MEALS.map(({id, name, description, price}) => <MealsListItem key={id} title={name} desc={description} price={price}/>);

  return (
    <ul>
      {items}
    </ul>
  );
};

export default MealsList;
