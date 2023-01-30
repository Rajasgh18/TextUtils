import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
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
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.about}
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <span className={`my-1 text-${props.mode === "dark"? "white": "dark"}`}>Themes - </span>
              <div className="rounded mx-2" onClick={props.toggleMode1} style={{ backgroundColor: "rgb(270, 125, 125)", height: "30px", width: "30px", cursor: "pointer" }}>
              </div>
              <div className="rounded mx-2" onClick={props.toggleMode2} style={{ backgroundColor: "rgb(140, 140, 250)", height: "30px", width: "30px", cursor: "pointer" }}>
              </div>
              <div className="rounded mx-2" onClick={props.toggleMode3} style={{ backgroundColor: "rgb(175,175,175)", height: "30px", width: "30px", cursor: "pointer" }}>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// It set types of props and when isRequired is used it is mandatory to enter value in props
// Navbar.propTypes = {
//     title : PropTypes.string,
//     about : PropTypes.string
// }
// It sets default values for props
Navbar.defaultProps = {
  title: "Set title here",
  about: "about text",
};
