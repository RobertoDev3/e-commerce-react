import { Link } from "react-router-dom";
import "./LoginButton.css";

const LoginButton = ({ closeMenu }) => {
  return (
    <>
      <Link to="/login" onClick={closeMenu}>
        <button className="login-button">Login</button>
      </Link>
    </>
  );
};

export default LoginButton;
