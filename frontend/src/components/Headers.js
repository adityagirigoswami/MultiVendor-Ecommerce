import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "./contexts/AuthContext";
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Header() {
  const { isLoggedIn, username, logout, cartItems } = useContext(AuthContext);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        background: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        color: "white",
        padding: "12px 0",
      }}
    >
      <div className="container-fluid px-4">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-white">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python Logo"
            width="40"
            height="40"
          />
          <span className="fw-bold fs-3">PythonMarket</span>
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links and Actions */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto ms-4">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/checkout">
              <FaShoppingCart className="me-1" /> My Cart ({cartItems.length})
              </Link>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex me-3">
            <input
              className="form-control form-control-sm rounded-pill px-3"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
            />
            <button className="btn btn-light ms-2 rounded-pill" type="submit">
              <FaSearch />
            </button>
          </form>

          {/* User Dropdown */}
          <div className="dropdown me-3">
            {isLoggedIn ? (
              <>
                <button
                  className="btn btn-outline-light rounded-pill fw-semibold dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <FaUserCircle className="me-1" /> {username}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item text-danger" to="/customer/logout">Logout</Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <button
                  className="btn btn-outline-light rounded-pill fw-semibold dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <FaUserCircle className="me-1" /> My Account
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                  <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                </ul>
              </>
            )}
          </div>

          {/* Seller Panel */}
          <div className="dropdown">
            <button className="btn btn-outline-light rounded-pill fw-semibold dropdown-toggle" data-bs-toggle="dropdown">
              Seller Panel
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
              <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
              <li><a className="dropdown-item text-danger" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
