import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CSS Files/MealDetails.css";
export default function MealDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.meals[0]);
      });
  }, [id]);

  if (!details) return <div>Yükleniyor...</div>;

  return (
    <div className="mealdetail-div">
      <h1>{details.strMeal}</h1>
      <img
        src={details.strMealThumb}
        alt={details.strMeal}
        className="mealdetails-img"
      />

      <div className="mealdetail-description-div">
        <h3>
          Kategori: {details.strCategory} | Bölge: {details.strArea}
        </h3>
        <p>{details.strInstructions}</p>
      </div>
    </div>
  );
}
