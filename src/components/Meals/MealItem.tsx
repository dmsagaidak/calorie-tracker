import React, {useState} from 'react';
import {Meal} from "../../types";
import {Link} from "react-router-dom";
import ButtonSpinner from "../Spinner/ButtonSpinner";
import axiosApi from "../../axiosApi";

interface Props {
  meal: Meal;
  fetchMeals: () => void;
}

const MealItem: React.FC<Props> = ({meal, fetchMeals}) => {
  const [deleting, setDeleting] = useState(false);

  const deleteMeal = async (id: string) => {
    try{
      setDeleting(true);
      if(window.confirm('Do you really want to delete this item?')) {
        await axiosApi.delete('/meals/' + id + '.json');
        await fetchMeals();
      }
    }catch (e) {
      console.log(e);
    }finally {
      setDeleting(false);
    }
  }

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
          <p className="m-0">{type}</p>
          <p className="m-0">{meal.description}</p>
        </div>
        <div className="col mt-3">
          <p>{meal.calories} kcal</p>
        </div>
        <div className="col">
          <Link to={"/edit-meal/" + meal.id} className="btn btn-primary btn-sm">Edit</Link>
          <button onClick={() => deleteMeal(meal.id)} disabled={deleting} className="btn btn-danger btn-sm ms-1">
            {deleting && <ButtonSpinner/>}Remove</button>
        </div>
      </div>
    </div>
  );
};

export default MealItem;