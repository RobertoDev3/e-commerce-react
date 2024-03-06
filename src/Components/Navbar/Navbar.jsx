import React, { useContext } from "react";
import "./Navbar.css";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import LogoShopper from "../LogoShopper/LogoShopper";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

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
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img className="nav-cart" src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
