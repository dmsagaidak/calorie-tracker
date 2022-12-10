import React from 'react';
import {Meal} from "../../types";
import Meals from "../../components/Meals/Meals/Meals";
import Spinner from "../../components/Spinner/Spinner";
import {Link} from "react-router-dom";
import axiosApi from "../../axiosApi";

interface Props {
  meals: Meal[];
  loading: boolean;
  fetchMeals: () => void;
}

const Home: React.FC<Props> = ({meals,loading, fetchMeals}) => {
  const total = meals.reduce((sum, meal) => sum + Number(meal.calories), 0);

  const deleteMeal = async (id: string) => {
    if(window.confirm('Do you wish to delete this item?')) {
      await axiosApi.delete('/meals/' + id + '.json');
      await fetchMeals();
    }
  }
  return (
    <div className="ps-3 pe-3">
      <div className="row m-3">
        <div className="col-10">Total calories: {total}</div>
        <div className="col">
          <Link to={"/new-meal"}className="btn btn-primary">Add new meal</Link>
        </div>
      </div>


      {loading? <Spinner/> : (
        <Meals
          meals={meals}
          deleteMeal={deleteMeal}
        />
      )}
    </div>
  );
};

export default Home;