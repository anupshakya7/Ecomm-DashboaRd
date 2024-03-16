import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/");
    }
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();

  async function signupHandle(e) {
    e.preventDefault();
    let item = { name, email, password };
    console.warn(item);
    let result = await fetch(`http://127.0.0.1:8000/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    console.warn("result:", result);
    localStorage.setItem("user-info", JSON.stringify(result));
    history("/");
  }

  return (
    <div className="card mt-4 p-3 text-start">
      <h1>Register Page</h1>
      <form onSubmit={signupHandle}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
            id="name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter Email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter Password"
            id="password"
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
