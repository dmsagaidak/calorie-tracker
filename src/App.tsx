import React, {useCallback, useEffect, useState} from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Routes, useLocation} from "react-router-dom";
import NewMeal from "./containers/NewMeal/NewMeal";
import {Meal, MealsList} from "./types";
import axiosApi from "./axiosApi";
import Home from "./containers/Home/Home";
import EditMeal from "./containers/EditMeal/EditMeal";

function App() {
  const location = useLocation();
  const [meals, setMeals] = useState<Meal[]>([]);
  const [loading, setLoading] = useState(false)

  const fetchMeals = useCallback(async () => {
    try{
      setLoading(true)
      const mealsResponse = await axiosApi.get<MealsList>('/meals.json');
      const meals = Object.keys(mealsResponse.data).map(key => {
        const meal = mealsResponse.data[key];
        meal.id = key;
        return meal;
      });
        setMeals(meals);
    }catch (e) {
      console.log(e);
    }finally {
      setLoading(false);
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
        loading={loading}
        fetchMeals={fetchMeals}
        />}
      />
      <Route
      path="/new-meal"
      element={<NewMeal/>}
      />
      <Route
        path="/edit-meal/:id"
        element={<EditMeal/>}
      />
    </Routes>
    </Layout>
  );
}

export default App;
