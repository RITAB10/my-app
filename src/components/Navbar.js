import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className="navbar md:navbar-expand bg-gradient"
      data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/my-app">
          {props.title}
        </Link>
        <button
          className="btn-icon navbar-toggler"
          type="button"
          data-bs-toggle="drawer"
          data-bs-target="#navbarDrawer"
          aria-controls="navbarDrawer"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" aria-hidden="true"></span>
        </button>
        <dialog
          className="drawer drawer-end"
          tabIndex="-1"
          id="navbarDrawer"
          aria-labelledby="navbarDrawerLabel"
        >
          <div className="drawer-header">
            <h5 className="drawer-title" id="navbarDrawerLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="drawer"
              aria-label="Close"
            ></button>
          </div>
          <div className="drawer-body mb-2 md:mb-0">
            <ul className="nav navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/my-app">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <form className="hstack gap-2" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn-outline btn-icon theme-primary"
                type="button"
                style={{ width: 80, padding: 13, height: 30 }}
              >
                Search
                <svg className="bi" width="16" height="16">
                  <use href="#" />
                </svg>
              </button>
              <div className="form-field">
                <div className="switch theme-primary">
                  <input
                    type="checkbox"
                    onClick={props.toggleMode}
                    id="switchprimary"
                    role="switch"
                  />
                </div>
                <label htmlFor="switchprimary">Enable Dark Mode</label>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string,
};
Navbar.defaultProps = { title: "set title here", about: "set about here" };
