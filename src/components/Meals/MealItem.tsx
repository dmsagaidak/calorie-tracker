import React from 'react';
import {Meal} from "../../types";

interface Props {
  meal: Meal;
}

const MealItem: React.FC<Props> = ({meal}) => {
  let type = '';

  if(meal.type === 'breakfast') {
    type = 'Breakfast'
  }else if(meal.type === 'snack') {
    type = 'Snack'
  }else if(meal.type === 'lunch') {
    type = "Lunch"
  }else {
    type = 'Dinner'
  }

  return (
    <div className="card m-1">
      <div className="card-body row no-gutters">
        <div className="col col-8">
          <p>{type}</p>
          <p className="m-0">{meal.description}</p>
        </div>
        <div className="col mt-3">
          <p>{meal.calories} kcal</p>
        </div>
      </div>
    </div>
  );
};

export default MealItem;