import React from "react";
import "./CSS/LoginSingup.css";

const LoginSingup = () => {
  return (
    <div className="loginSingup">
      <div className="loginSingup-container">
        <h1>Sing Up</h1>
        <div className="loginSingup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginSingup-login">
          Already have an account? <span>Login here!</span>
        </p>
        <div className="loginSingup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continue, i agree to the terms of use & privacy police.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSingup;
