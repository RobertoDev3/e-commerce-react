import React, { useState, useEffect } from "react";
import "./NavbarMobile.css";
import { Link } from "react-router-dom";
import LogoShopper from "../LogoShopper/LogoShopper";
import LoginButton from "../LoginButton/LoginButton";
import NavCart from "../NavCart/NavCart";

const NavbarMobile = () => {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [menuClass, setMenuClass] = useState("nav-mobile-menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuClicked && !event.target.closest(".navbar-mobile")) {
        setBurgerClass("burger-bar unclicked");
        setMenuClass("nav-mobile-menu hidden");
        setIsMenuClicked(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
  }, [isMenuClicked]);

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

  const closeMenu = () => {
    setBurgerClass("burger-bar unclicked");
    setMenuClass("nav-mobile-menu hidden");
    setIsMenuClicked(false);
  };

  return (
    <div className="navbar-mobile">
      <LogoShopper closeMenu={closeMenu} />
      <div className="burger-menu" onClick={updateMenu}>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
        <div className={burgerClass}></div>
      </div>
      <div className={menuClass}>
        <div className="menu-links">
          <Link className="link" to="/" onClick={closeMenu}>
            Shop
          </Link>
          <Link className="link" to="/mens" onClick={closeMenu}>
            Men
          </Link>
          <Link className="link" to="/womens" onClick={closeMenu}>
            Women
          </Link>
          <Link className="link" to="/kids" onClick={closeMenu}>
            Kids
          </Link>
        </div>
        <div className="nav-login-cart">
          <LoginButton closeMenu={closeMenu} />
          <NavCart closeMenu={closeMenu} />
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
