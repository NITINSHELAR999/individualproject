import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <div className="container" >
      <nav  className="navbar navbar-expand-lg " style={{backgroundColor: "red"}}>
        <div className="container-fluid" id ="nav">
          <a className="navbar-brand" href="#" >
            CRUD
          </a>
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
              <Link to="/">Show Employees</Link>

              <li className="nav-item">
                <Link to="AddData">Add Employees</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
