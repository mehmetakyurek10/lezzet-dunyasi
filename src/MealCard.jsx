import { Link } from "react-router-dom";
import "./CSS Files/MealCard.css";
export default function MealCard({ data }) {
  return (
    <div className="meal-card">
      <img
        src={data.strMealThumb}
        alt={data.strMeal}
        className="meal-card-img"
      />
      <h3 className="meal-card-name">{data.strMeal}</h3>
      <Link to={`/meal/${data.idMeal}`}>
        <button className="meal-card-btn-details">Detayları Gör</button>
      </Link>
    </div>
  );
}
