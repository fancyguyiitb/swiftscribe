import React from "react";
import { useState } from "react";

const RegisterPage = () => {
  //state for username
  const [username, setUsername] = useState("");
  //state for password
  const [password, setPassword] = useState("");
  //creating a register function
  async function register(event) {
    //preventing the form from redirecting as default behavior
    event.preventDefault();
    //using fetch to make request to backend (register endpoint)
    await fetch("http://localhost:4000/register", {
      method: "POST",
      //converting states to json
      body: JSON.stringify({ username, password }),
      //since json, we need content-type header
      headers: { "Content-Type": "application/json" },
    });
  }
  return (
    <form className="register" onSubmit={register}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterPage;
