import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img
              src="Logo Nike.png"
              height="64px"
              width="80px"
              alt="Wait.."
              style={{ marginLeft: "88px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mx-auto mb-2 mb-lg-0"
              style={{
                font: "menu",

                fontWeight: "bold",
                fontSize: "20px",
              }}
            >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/location">
                  Location
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className="btn btn-danger"
              type="submit"
              style={{
                marginRight: "88px",
                paddingLeft: "30px",
                paddingRight: "30px",
                borderRadius: "0",
                fontWeight: "bold",
              }}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
