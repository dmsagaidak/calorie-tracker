export interface Meal {
  id: sting;
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

