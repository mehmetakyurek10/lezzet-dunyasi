import Logo from "./Picture/logo.png";
import { NavLink } from "react-router-dom";
import "./CSS Files/Footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer-main-div">
        <div>
          <img src={Logo} alt="" className="footer-logo" />
        </div>
        <div className="footer-link-groups">
          <NavLink to="/" className="footer-link">
            Ana Sayfa
          </NavLink>
          <NavLink to="/about" className="footer-link">
            Hakkımızda
          </NavLink>
          <NavLink to="/meal" className="footer-link">
            Ürünler
          </NavLink>
        </div>
        <div className="footer-contact">
          <p>Bize Ulaşın</p>
          <p>
            <i className="fa-solid fa-envelope"></i> info@example.com
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +90 555 555 55 55
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> Balıkesir, Türkiye
          </p>
        </div>
      </div>
      <p className="copy-right">
        © {new Date().getFullYear()} Restoran. Tüm hakları saklıdır.
      </p>
    </>
  );
}
