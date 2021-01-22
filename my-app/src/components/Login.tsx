import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

interface Props {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginHandle() {
    let res = axios.post("https://reqres.in/api/login", {
      email: email,
      password: password,
    });
    console.log(res);
    if ((await res).status === 200) {
      alert("Log In Successfullll!!!!!!!!!!");
      props.setLoggedIn(true);
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h3>Login</h3>
      </div>
      <div className="form">
        <div className="loginForm login">
          <label>Email</label>
          <input
            onChange={(email) => {
              setEmail(email.target.value);
            }}
            type="email"
            name="email"
            placeholder="email@example.com"
            required
          />
          <label>Password</label>
          <input
            onChange={(password) => {
              setPassword(password.target.value);
            }}
            type="password"
            name="password"
          />
        </div>
      </div>
      <button onClick={loginHandle} className="btn">
        Log In
      </button>
      <p>
        New Here?<Link to="/register"> Register</Link>
      </p>
    </div>
  );
};

export default Login;
