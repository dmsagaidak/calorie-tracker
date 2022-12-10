import React from 'react';
import {Meal} from "../../types";

interface Props {
  meal: Meal;
}

const MealItem: React.FC<Props> = ({meal}) => {
  return (
    <div className="card m-1">
      <div className="card-body row no-gutters">
        <div className="col col-8">
          <p>{meal.type}</p>
          <p>{meal.description}</p>
        </div>
        <div>
          <p>{meal.calories} kcal</p>
        </div>
      </div>
    </div>
  );
};

export default MealItem;