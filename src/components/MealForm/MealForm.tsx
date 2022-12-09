import React, {useState} from 'react';
import {ApiMeal} from "../../types";

interface Props {
  onSubmit: (meal: ApiMeal) => void
}

const MealForm: React.FC<Props> = ({onSubmit}) => {
  const [meal, setMeal] = useState<ApiMeal>({
    type: '',
    description: '',
    calories: 0,
  });

  const onMealChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setMeal(prev =>({...prev, [name]: value}))
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...meal
    });
  };

  return (
    <form className="p-4" onSubmit={onFormSubmit}>
      <div className="form-group">
        <label htmlFor="type">Select type</label>
        <select
          id="type"
          name="type"
          className="form-select mt-1"
          onChange={onMealChange}
        >
          <option disabled value=''>Select a type</option>
          <option value="breakfast">Breakfast</option>
          <option value="snack">Snack</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description"></label>
        <input
        type="text"
        id="description"
        name="description"
        className="form-control"
        onChange={onMealChange}
        />
      </div>
      <div className="form-group">
        <label id="calories">Calories</label>
        <input
        type="number"
        id="calories"
        name="calories"
        className="form-control"
        onChange={onMealChange}
        />
      </div>
      <button type="submit" className="btn btn-success">Send</button>
    </form>
  );
};

export default MealForm;