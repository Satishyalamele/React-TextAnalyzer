import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  return (
    <>
      <div className="container-fluid  bg-dark">
        <div className="row">
          <div className="col-md-4 text-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white align-items-center py-1"
                  aria-current="page"
                  to="/"
                >
                  <h5>TextAnalyzer</h5>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 offset-md-4 text-center">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/developer">
                  Developer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
    </>
  );
};
export default Header;
