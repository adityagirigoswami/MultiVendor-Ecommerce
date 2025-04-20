import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "bootstrap";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-dark bg-dark shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python Logo"
              width="30"
              height="30"
              className="me-2"
            />
            <span className="fw-bold text-info fs-4">Python Market Place</span>
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
              <li className="nav-item">
                <a className="nav-link fw-bold text-white" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-white" href="#">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button
                className="btn btn-outline-info fw-semibold"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <main className="mt-3">
        <div className="container">
          <h3 className="fw-bold mb-4">
            Latest Products <a href="#"
              className="float-end btn btn-dark">View All Products  
              <i class="fa-solid fa-arrow-right-long ms-1"></i></a>
          </h3>
          <div className="row">
            {/* produt box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
            {/* produt box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
            {/* produt box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
            {/* produt box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
            {/* produt box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
          {/* produt box */}
          <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
            {/* produt box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
            {/* produt box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
            {/* produt box */}
            <div className="col-12 col-md-3 mb-4">
              <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={logo} alt="Card cap" />
                <div className="card-body">
                  <h4 className="card-title">Product title</h4>
                  <h5 className="card-title text-muted">Price: Rs.500</h5>
                </div>
                <div className="card-footer">
                  <button
                    title="add to cart"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-solid fa-cart-plus fa-2x"></i>
                  </button>
                  <button
                    title="Add to Wishlist"
                    className="btn btn-danger btn-sm ms-1"
                  >
                    <i className="fa-solid fa-heart fa-2x"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* produt box end */}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
