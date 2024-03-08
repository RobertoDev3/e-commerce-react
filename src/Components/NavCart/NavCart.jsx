import { Link } from "react-router-dom";
import "./NavCart.css";
import cart_icon from "../../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";

const NavCart = ({ closeMenu }) => {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <>
      <Link to="/cart" onClick={closeMenu}>
        <img className="nav-cart" src={cart_icon} alt="" />
      </Link>
      <div className="nav-cart-count">{getTotalCartItems()}</div>
    </>
  );
};

export default NavCart;
