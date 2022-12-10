import React from 'react';
import {Meal} from "../../types";
import Meals from "../../components/Meals/Meals/Meals";

interface Props {
  meals: Meal[];
}

const Home: React.FC<Props> = ({meals}) => {
  return (
    <div>
      <Meals
      meals={meals}
      />
    </div>
  );
};

export default Home;