import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      {/* Colorful Futuristic Navbar */}
      <nav className="navbar navbar-expand-lg vibrant-navbar fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand vibrant-logo" href="#">
            NovaUI
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link vibrant-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link vibrant-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link vibrant-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link vibrant-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container main-content">
        <h1 className="display-4 text-center">This is a colorful React.js App</h1>
        <p className="lead text-center">Beautiful, vibrant, and responsive UI.</p>
      </div>
    </>
  );
}

export default App;
