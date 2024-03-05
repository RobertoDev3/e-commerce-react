import React, { useContext } from "react";
import "./NavbarMobile.css";
import logo from "../../Assets//logo.png";
import cart_icon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const NavbarMobile = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar-mobile">
      <Link className="link" to="/">
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
      </Link>
      {/* <ul className="nav-menu">
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
      </ul> */}
      {/* <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div> */}
    </div>
  );
};

export default NavbarMobile;
