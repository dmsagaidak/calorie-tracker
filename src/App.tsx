import React from 'react';
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import NewMeal from "./containers/NewMeal/NewMeal";

function App() {
  return (
    <Layout>
    <Routes>
      <Route
      path="/new-meal"
      element={<NewMeal/>}
      />
    </Routes>
    </Layout>
  );
}

export default App;
