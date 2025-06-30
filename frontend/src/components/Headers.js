import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";

function Header() {
  /* ---------- search state & navigation ---------- */
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
    }
  };

  /* ---------- auth context ---------- */
  const {
    isLoggedIn,        // customer logged‐in flag
    isVendorLoggedIn,  // seller logged‐in flag
    username,
    logout,
    cartItems = [],
  } = useContext(AuthContext);

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#0d1117", padding: "0.8rem 1rem" }}
    >
      <div className="container-fluid mt-2 mb-2">
        {/* -------- Brand -------- */}
        <Link
          to="/"
          className="navbar-brand text-white d-flex align-items-center gap-2"
        >
          <span className="fw-bold fs-3 ms-2">
            <i className="fa fa-code me-1 text-info" />
            <span style={{ letterSpacing: "2px", fontFamily: "'Orbitron', sans-serif" }}>
              SCRIPT <span className="text-warning">HUB</span>
            </span>
          </span>
        </Link>

        {/* -------- Toggler (mobile) -------- */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* -------- Main nav -------- */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left side links */}
          <ul className="navbar-nav ms-4 me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/categories">
                Categories
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/checkout">
                <FaShoppingCart className="me-1" />
                Cart&nbsp;({cartItems.length})
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/customer/wishlist">
                <i className="fa-solid fa-heart me-1 text-danger" />
                Wishlist
              </Link>
            </li>

          </ul>

          {/* Search bar */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control rounded-pill border-0 px-3"
              placeholder="Search..."
              style={{ minWidth: "200px", backgroundColor: "#1E293B", color: "#fff" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="btn btn-light rounded-pill ms-2 px-3">
              <FaSearch />
            </button>
          </form>

          {/* -------- Role‑aware dropdown(s) -------- */}
          {(() => {
            /* 1️⃣ Seller logged in – show only Seller dropdown */
            if (isVendorLoggedIn) {
              return (
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light rounded-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {username || "Seller"}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                    <li>
                      <Link className="dropdown-item" to="/seller/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              );
            }

            /* 2️⃣ Customer logged in – show only Customer dropdown */
            if (isLoggedIn) {
              return (
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light rounded-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <FaUserCircle className="me-1" />
                    {username || "Customer"}
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                    <li>
                      <Link className="dropdown-item" to="/customer/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={logout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              );
            }

            /* 3️⃣ No one logged in – show both guest panels */
            return (
              <>
                {/* Customer guest panel */}
                <div className="dropdown me-3">
                  <button
                    className="btn btn-outline-light rounded-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <FaUserCircle className="me-1" />
                    Customer Panel
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                    <li>
                      <Link className="dropdown-item" to="/customer/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/customer/login">
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Seller guest panel */}
                <div className="dropdown">
                  <button
                    className="btn btn-outline-light rounded-pill dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Seller Panel
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                    <li>
                      <Link className="dropdown-item" to="/seller/register">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/seller/login">
                        Login
                      </Link>
                    </li>
                  </ul>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </nav>
  );
}

export default Header;
