import React from 'react';
import {Meal} from "../../../types";
import MealItem from "../MealItem";

interface Props {
  meals: Meal[];
}

const Meals: React.FC<Props> = ({meals}) => {
  return (
    <div>
      {meals.map((meal) => (
        <MealItem
        key={meal.id}
        meal={meal}
        />
      ))}
    </div>
  );
};

export default Meals;