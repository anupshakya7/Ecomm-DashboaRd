import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history("/");
    }
  });

  async function loginHandle(e) {
    e.preventDefault();
    let item = { email, password };
    let result = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    if (result.error === undefined) {
      localStorage.setItem("user-info", JSON.stringify(result));
      history("/");
    } else {
      alert(result.error);
    }
  }
  return (
    <div className="card mt-4 p-3 text-start">
      <h1>Login Page</h1>
      <form onSubmit={loginHandle}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            id="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" value={password} className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
