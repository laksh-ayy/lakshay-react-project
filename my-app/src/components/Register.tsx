import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

interface Props {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register: React.FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginHandle() {
    let res = axios.post("https://reqres.in/api/register", {
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
        <h3>Register</h3>
      </div>
      <div className="form">
        <div className="loginForm register">
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
          <label>Create Password</label>
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
        Register
      </button>
      <p>
        Old Here?<Link to="/login"> Login</Link>
      </p>
    </div>
  );
};

export default Register;
