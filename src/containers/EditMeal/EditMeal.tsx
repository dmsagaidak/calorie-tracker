import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ApiMeal, MealMutation} from "../../types";
import axiosApi from "../../axiosApi";
import MealForm from "../../components/MealForm/MealForm";
import Spinner from "../../components/Spinner/Spinner";

const EditMeal = () => {
  const {id} = useParams();
  const [meal, setMeal] = useState<MealMutation | null>(null);
  const [updating, setUpdating] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchOneMeal = useCallback(async () => {
    try{
      setLoading(true);
      const mealResponse = await axiosApi.get<ApiMeal>('/meals/' + id + '.json');
      const existingMeal = mealResponse.data && {
        ...mealResponse.data,
        calories: mealResponse.data.calories.toString(),
      }
      setMeal(existingMeal);
    }finally {
      setLoading(false);
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
      await fetchOneMeal();
    }catch (e){
      console.log(e)
    }finally {
      setLoading(false);
      setUpdating(false);
    }
  }



  return (
    <div>
      {loading ? <Spinner/> :
        meal && (
        <MealForm
        onSubmit={updateMeal}
        existingMeal={meal}
        isEdit
        isLoading={updating}
        />
      )}
    </div>
  );
};

export default EditMeal;