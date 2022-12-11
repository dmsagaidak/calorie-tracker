import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiMeal} from "../../types";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";
import Spinner from "../../components/Spinner/Spinner";

const EditMeal = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState<ApiMeal | null>(null);
  const [updating, setUpdating] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchOneMeal = useCallback(async () => {
    try{
      setLoading(true)
      const mealResponse = await axiosApi.get<ApiMeal>('/meals/' + id + '.json');
      setMeal(mealResponse.data);
    }finally {
      setLoading(false)
    }

  },[id]);

  useEffect(() => {
      void fetchOneMeal();
  }, [fetchOneMeal]);

  const updateMeal = async (meal: ApiMeal) => {
    try{
      setLoading(true);
      setUpdating(true);
      await axiosApi.put('/meals/' + id + '.json', meal);
    }catch (e){
      console.log(e)
    }finally {
      setLoading(false);
      setUpdating(false);
    }
  }

  const existingMeal = meal && {
    ...meal,
    calories: meal.calories.toString(),
  }

  return (
    <div>
      {loading ? <Spinner/> :
        existingMeal && (
        <MealForm
        onSubmit={updateMeal}
        existingMeal={existingMeal}
        isEdit
        isLoading={updating}
        />
      )}
    </div>
  );
};

export default EditMeal;