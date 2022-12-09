import React from 'react';
import {useNavigate} from "react-router-dom";
import MealForm from "../../components/MealForm/MealForm";
import axiosApi from "../../axiosApi";
import {ApiMeal} from "../../types";

const NewMeal = () => {
  const navigate = useNavigate();

  const createMeal = async (meal: ApiMeal) => {
    try{
      await axiosApi.post('meals.json', meal);
      navigate('/')
    } catch (e) {
      console.log(e)
    }finally {

    }
  }

  return (
    <div>
      <MealForm
      onSubmit={createMeal}
      />
    </div>
  );
};

export default NewMeal;