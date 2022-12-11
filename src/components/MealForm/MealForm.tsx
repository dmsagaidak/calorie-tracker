import React, {useEffect, useState} from 'react';
import {ApiMeal, MealMutation} from "../../types";
import {Link} from "react-router-dom";
import ButtonSpinner from "../Spinner/ButtonSpinner";

interface Props {
  onSubmit: (meal: ApiMeal) => void;
  existingMeal?: MealMutation;
  isEdit?: boolean;
  isLoading?: boolean;
}

const initialState: MealMutation = {
  type: '',
  description: '',
  calories: '',
}

const MealForm: React.FC<Props> = ({
    onSubmit,
    existingMeal = initialState,
    isEdit = false,
    isLoading = false
}) => {
  const [meal, setMeal] = useState<MealMutation>(existingMeal);

  const onMealChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setMeal(prev =>({...prev, [name]: value}))
  };

  useEffect(() => console.log(existingMeal))

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...meal,
      calories: Number(meal.calories),
    });
  };

  return (
    <form className="p-4" onSubmit={onFormSubmit}>
      <h4>{isEdit? 'Edit meal': 'Add new meal'}</h4>
      <div className="form-group">
        <label htmlFor="type">Select type</label>
        <select
          id="type"
          name="type"
          className="form-select mt-1"
          onChange={onMealChange}
          required
        >
          <option disabled value=''>Select a type</option>
          <option value="breakfast">Breakfast</option>
          <option value="snack">Snack</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="form-group mt-2">
        <label htmlFor="description">Description</label>
        <input
        type="text"
        id="description"
        name="description"
        className="form-control"
        onChange={onMealChange}
        required
        />
      </div>
      <div className="form-group mt-2">
        <label id="calories">Calories</label>
        <input
        type="number"
        id="calories"
        name="calories"
        className="form-control"
        onChange={onMealChange}
        required
        />
      </div>
      <button type="submit" disabled={isLoading} className="btn btn-success mt-2">
        {isLoading && <ButtonSpinner/>}
        {isEdit ? 'Update' : 'Create'}
      </button>
      <div className="mt-2">
        <Link to={"/"} className="btn btn-danger">Back</Link>
      </div>

    </form>
  );
};

export default MealForm;