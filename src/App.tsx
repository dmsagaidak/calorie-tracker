import React, {useCallback, useEffect, useState} from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Routes, useLocation} from "react-router-dom";
import NewMeal from "./containers/NewMeal/NewMeal";
import {ApiMeal, Meal, MealsList} from "./types";
import axiosApi from "./axiosApi";
import Home from "./containers/Home/Home";

function App() {
  const location = useLocation();
  const [meals, setMeals] = useState<Meal[]>([]);

  const fetchMeals = useCallback(async () => {
    try{
      const mealsResponse = await axiosApi.get<MealsList>('/meals.json');
      const meals = Object.keys(mealsResponse.data).map(key => {
        const meal = mealsResponse.data[key];
        meal.id = key;
        return meal;
      });
        setMeals(meals);
    }finally {

    }
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      void fetchMeals()
    }
  }, [fetchMeals, location])

  return (
    <Layout>
    <Routes>
      <Route
        path="/"
        element={<Home
        meals={meals}
        />}
      />
      <Route
      path="/new-meal"
      element={<NewMeal/>}
      />
    </Routes>
    </Layout>
  );
}

export default App;
