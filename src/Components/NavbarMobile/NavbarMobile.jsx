import React, { useContext, useState } from "react";
import "./NavbarMobile.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import LogoShopper from "../LogoShopper/LogoShopper";
import LoginButton from "../LoginButton/LoginButton";
import NavCart from "../NavCart/NavCart";

const NavbarMobile = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("nav-mobile-menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("nav-mobile-menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("nav-mobile-menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="navbar-mobile">
      <LogoShopper />
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>
      <div className={menuClass}>
        <div className="menu-links">
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
        </div>
        <div className="nav-login-cart">
          <LoginButton />
          <NavCart />
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
