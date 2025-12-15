import { useEffect, useState } from "react";
import MealCard from "../MealCard";
import "../CSS Files/Meal.css";
import Home from "./Home";
export default function Meal() {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals);
      });
  }, []);
  return (
    <>
      <div className="meal-component-div">
        <h1>Deniz Ürünleri Menüsü</h1>

        <div className="meal-cards-div">
          {meals.map((meal) => (
            <MealCard key={meal.idMeal} data={meal} />
          ))}
        </div>
      </div>
    </>
  );
}
