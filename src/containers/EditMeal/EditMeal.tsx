import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiMeal} from "../../types";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";

const EditMeal = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState<ApiMeal | null>(null);

  const fetchOneMeal = useCallback(async () => {
    const mealResponse = await axiosApi.get<ApiMeal>('/meals/' + id + '.json');
    setMeal(mealResponse.data);
  },[]);

  useEffect(() => {
      void fetchOneMeal();
  }, [fetchOneMeal]);

  const updateMeal = async (meal: ApiMeal) => {
    try{
      await axiosApi.put('/meals/' + id + '.json', meal);
    }catch (e){
      console.log(e)
    }finally {

    }
  }

  const existingMeal = meal && {
    ...meal,
    calories: meal.calories.toString(),
  }

  return (
    <div>
      {existingMeal && (
        <MealForm
        onSubmit={updateMeal}
        existingMeal={existingMeal}
        isEdit
        />
      )}
    </div>
  );
};

export default EditMeal;