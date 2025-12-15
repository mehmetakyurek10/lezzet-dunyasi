import "../CSS Files/Home.css";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <header className="home-main-div">
      <div className="home-kesfet">
        <h1>Lezzet Dolu Tariflerin Dünyası</h1>
        <p>Dünyanın dört bir yanından en güzel yemekleri keşfet</p>
        <NavLink to="/meal" className="home-keşfet-btn">
          Yemekleri Keşfet
        </NavLink>
      </div>

      <div>
        <h3 className="home-meal-card-highlights">⭐ Öne Çıkan Yemekler</h3>
      </div>
    </header>
  );
}
