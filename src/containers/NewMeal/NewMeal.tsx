import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import MealForm from "../../components/MealForm/MealForm";
import axiosApi from "../../axiosApi";
import {ApiMeal} from "../../types";
import Spinner from "../../components/Spinner/Spinner";

const NewMeal = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const createMeal = async (meal: ApiMeal) => {
    try{
      setLoading(true)
      await axiosApi.post('meals.json', meal);
      navigate('/')
    } catch (e) {
      console.log(e)
    }finally {
      setLoading(false)
    }
  }

  return (
    <div>
      {loading ? <Spinner/> :
        <MealForm
        onSubmit={createMeal}
      />}

    </div>
  );
};

export default NewMeal;