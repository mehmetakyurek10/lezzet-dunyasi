import { useEffect, useState } from "react";
import "../CSS Files/Home.css";
import { NavLink } from "react-router-dom";

export default function Home() {
  const [featuredMeals, setFeaturedMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => response.json())
      .then((data) => {
        setFeaturedMeals(data.meals.slice(0, 3));
      });
  }, []);
  return (
    <header className="home-main-div">
      <div className="home-kesfet">
        <h1 className="home-title">Lezzet Dolu Tariflerin Dünyası</h1>
        <p className="home-subtitle">
          Dünyanın dört bir yanından en güzel yemekleri keşfet
        </p>
        <NavLink to="/meal" className="home-kesfet-btn">
          Yemekleri Keşfet
        </NavLink>
      </div>

      <div className="highlights-section">
        <h3 className="home-meal-card-highlights">⭐ Öne Çıkan Yemekler</h3>

        <div className="highlights-meal">
          {featuredMeals.map((meal) => (
            <div key={meal.idMeal} className="home-meal-card">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="home-meal-card-img"
              />
              <h4>{meal.strMeal}</h4>
              <NavLink className="details-btn" to={`/meal/${meal.idMeal}`}>
                Detayları Gör
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
