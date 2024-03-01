import React from 'react';
import Card from "../../UI/Card/Card";
import MealsList from "./MealsList";
import styles from './Meals.module.scss';

const Meals = () => {
  return (
    <section className={styles.meals}>
      <div className="container">
        <Card className='card--meals'>
          <MealsList/>
        </Card>
      </div>
    </section>
  );
};

export default Meals;
