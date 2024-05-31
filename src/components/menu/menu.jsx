import "./menu.css";
import "../styles.css";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { cartContext } from "../../App.jsx";

export default function Menu() {
  const { cart } = useContext(cartContext);
  return (
    <>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Start Bootstrap
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#!"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#!" to={"/cart"}>
                  View Cart
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link className="btn btn-outline-dark" type="submit" to={"/cart"}>
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cart.length}
                </span>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
