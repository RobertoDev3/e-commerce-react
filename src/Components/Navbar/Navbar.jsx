import "./Navbar.css";
import { Link } from "react-router-dom";
import LogoShopper from "../LogoShopper/LogoShopper";
import LoginButton from "../LoginButton/LoginButton";
import NavCart from "../NavCart/NavCart";

const Navbar = () => {
  return (
    <div className="navbar">
      <LogoShopper />
      <ul className="nav-menu">
        <Link className="link" to="/">
          Shop
        </Link>
        <Link className="link" to="/mens">
          Men
        </Link>
        <Link className="link" to="/womens">
          Women
        </Link>
        <Link className="link" to="/kids">
          Kids
        </Link>
      </ul>
      <div className="nav-login-cart">
        <LoginButton />
        <NavCart />
      </div>
    </div>
  );
};

export default Navbar;
