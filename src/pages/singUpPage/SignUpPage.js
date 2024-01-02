import React, { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [newUserCredentials, setNewUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async (event) => {
    const host = "http://localhost:5000";
    //preventing page reload on submit
    event.preventDefault();

    //API Call
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: {
        //   "auth-token":
        //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MjFjNjNiNjcwYmJkMWY0MDk3M2I0In0sImlhdCI6MTcwMzAyNTc2M30.RT1mvygdafEfm4d9xyAeg-dSwqiqX7XTtdwkGSPweLc",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: newUserCredentials.name,
        email: newUserCredentials.email,
        password: newUserCredentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    //if successful login, redirect to homepage
    if (json.success) {
        //saving authToken to local storage
        localStorage.setItem('token', json.authToken)
        //redirect
        navigate("/login")
    }
    else {
        alert("User Exists!")
    }
  };

  const onChange = (event) => {
    setNewUserCredentials({ ...newUserCredentials, [event.target.name]: event.target.value });
    // console.log(blogToAdd);
  };
  return (
    <div className="loginForm">
      <div className="ring">
        <i style={{ "--clr": "#676767" }}></i>
        <i style={{ "--clr": "#808080" }}></i>
        <i style={{ "--clr": "#FFFFFF" }}></i>
        <div className="login">
          <h2 className="fw-bold">Sign Up</h2>
          <div className="inputBx">
          <h5 className="fieldTitle">Your Name</h5>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={newUserCredentials.name}
              onChange={onChange}
              minLength={1}
            />
          </div>
          <div className="inputBx">
          <h5 className="fieldTitle">Your Email</h5>
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              value={newUserCredentials.email}
              onChange={onChange}
              minLength={5}
            />
          </div>
          <div className="inputBx">
          <h5 className="fieldTitle">Your Password</h5>
            <input
              value={newUserCredentials.password}
              type="password"
              placeholder="Password"
              name="password"
              id="email"
              onChange={onChange}
              minLength={5}
            />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign Up" onClick={handleSignup} />
          </div>
          <div className="links">
            {/* <a href="#">Forget Password</a> */}
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
