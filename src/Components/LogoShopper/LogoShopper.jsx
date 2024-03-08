import "./LogoShopper.css";
import { Link } from "react-router-dom";
import logo from "../../Assets//logo.png";

const LogoShopper = ({ closeMenu }) => {
  return (
    <Link className="link" to="/" onClick={closeMenu}>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
    </Link>
  );
};

export default LogoShopper;
