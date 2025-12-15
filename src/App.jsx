import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Linkler/Home";
import About from "./Linkler/About";
import Meal from "./Linkler/Meal";
import MealDetails from "./MealDetails";
import "./style.css";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="meal" element={<Meal />} />
          <Route path="meal/:id" element={<MealDetails />} />
        </Route>
      </Routes>
    </>
  );
}
