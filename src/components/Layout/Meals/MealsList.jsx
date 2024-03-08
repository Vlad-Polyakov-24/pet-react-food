import React, { useState, useEffect } from 'react';
import MealsListItem from "./MealsListItem";
import Spinner from "../../UI/Spinner/Spinner";
import useHttp from "../../../hooks/useHttp";

const MealsList = () => {
  const [meals, setMeals] = useState([]);
  const {isLoading, error, sendHttpRequest} = useHttp();
  const items = meals.map(({id, name, description, price}) => <MealsListItem key={id} id={id} title={name} desc={description} price={price}/>);

  useEffect(() => {
    const fetchedMeals = [];

    const dataHandler = data => {
      for (const key in data) {
        const meal = data[key];
        meal.id = key;
        fetchedMeals.push(meal);
      }

      setMeals(fetchedMeals);
    };

    sendHttpRequest('https://jokes-study-default-rtdb.firebaseio.com/meals.json', {}, dataHandler);
  }, []);

  return (
    <>
      {isLoading && <Spinner/>}
      <ul>
        {items}
        {error && <li className='error-message'>{error}</li>}
      </ul>
    </>
  );
};

export default MealsList;
