import React from "react";

import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();
  const user = JSON.parse(localStorage.getItem("user-info"));
  function logoutHandle(e) {
    e.preventDefault();
    localStorage.removeItem("user-info");
    history("/login");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("user-info") ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add">
                      Add Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/update">
                      Update Product
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav mx-5">
              {user && (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    to="/"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {user.name}
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="#" className="dropdown-item" onClick={logoutHandle}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
