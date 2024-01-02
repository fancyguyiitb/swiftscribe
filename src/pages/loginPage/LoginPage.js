import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="loginForm">
      <div className="ring">
        <i style={{ "--clr": "#676767" }}></i>
        <i style={{ "--clr": "#808080" }}></i>
        <i style={{ "--clr": "#FFFFFF" }}></i>
        <div className="login">
          <h2 className="fw-bold">Login</h2>
          <div className="inputBx">
            <input type="text" placeholder="Username" />
          </div>
          <div className="inputBx">
            <input type="password" placeholder="Password" />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign in" />
          </div>
          <div className="links">
            {/* <a href="#">Forget Password</a> */}
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
