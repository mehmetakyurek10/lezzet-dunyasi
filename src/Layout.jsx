import { NavLink, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./Picture/logo.png";
import "./CSS Files/Layout.css";
export default function Layout() {
  return (
    <>
      <div className="header-navbar">
        <img src={Logo} alt="" className="layout-logo" />
        <nav>
          <NavLink to="/">Ana Sayfa</NavLink>
          <NavLink to="/about">Hakkımızda</NavLink>
          <NavLink to="/meal">Yemekler</NavLink>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
