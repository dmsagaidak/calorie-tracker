export interface Meal {
  id: string;
  type: string;
  description: string;
  calories: number;
}

export interface MealsList {
  [id: string]: Meal
}

export interface ApiMeal {
  type: string;
  description: string;
  calories: number;
}

