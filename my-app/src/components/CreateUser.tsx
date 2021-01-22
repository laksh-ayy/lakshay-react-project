import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { idText } from "typescript";

interface CreateUser {
  name?: string;
  job?: string;
  id?: number;
  createdAt?: string;
}

const CreateUser: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [job, setJob] = useState<string>("");
  const [display, getDisplay] = useState<CreateUser>({});

  async function loginHandle() {
    let res = axios.post("https://reqres.in/api/users", {
      name: name,
      job: job,
    });
    console.log(res);
    if ((await res).status === 201) {
      const data = await res;
      console.log(data);
      getDisplay(data.data);
      alert("User Created!");
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h3>Create User</h3>
      </div>
      <div className="form">
        <div className="loginForm register">
          <label>Name</label>
          <input
            onChange={(name) => {
              setName(name.target.value);
            }}
            type="name"
            name="name"
            placeholder="Putin"
            required
          />
          <label>Job</label>
          <input
            onChange={(job) => {
              setJob(job.target.value);
            }}
            type="text"
            name="text"
          />
        </div>
      </div>
      <button onClick={loginHandle} className="btn">
        Create
      </button>
      <h3>User: {display.name}</h3>
      <h3>Job: {display.job}</h3>
      <h3>Id: {display.id}</h3>
      <h3>Created At: {display.createdAt}</h3>
    </div>
  );
};

export default CreateUser;
