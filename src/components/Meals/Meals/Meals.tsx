import React from 'react';
import {Meal} from "../../../types";
import MealItem from "../MealItem";

interface Props {
  meals: Meal[];
  fetchMeals: () => void;
}

const Meals: React.FC<Props> = ({meals, fetchMeals}) => {

  let mealsList = (
    <div className="alert alert-primary">
      You have no meals added. Please, push Add new meal button to add information
    </div>
  )

  if(meals.length > 0) {
    mealsList = (
      <>
      {meals.map((meal) => (
        <MealItem
          key={meal.id}
          meal={meal}
          fetchMeals={fetchMeals}
        />
      ))}
    </>
    )
  }

  return (
    <>
      {mealsList}
    </>
  );
};

export default Meals;