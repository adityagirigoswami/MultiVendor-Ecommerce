import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from "./contexts/AuthContext";
import { FaSearch, FaShoppingCart, FaUserCircle } from 'react-icons/fa';

function Header() {
  const { isLoggedIn,isVendorLoggedIn, username, logout, cartItems } = useContext(AuthContext);

  return (
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{
        backgroundColor: "#0d1117",
        padding: "0.8rem 1rem",
        // borderBottom: "1px solid #1E293B"
      }}
    >
      <div className="container-fluid mt-2 mb-2">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand text-white d-flex align-items-center gap-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
            width="40"
            height="40"
          />
          <span className="fw-bold fs-3">Python Market Place</span>
        </Link>

        {/* Toggler */}
        <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Main Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Left Links */}
          <ul className="navbar-nav ms-4 me-auto">
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/categories">Categories</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white fw-semibold" to="/checkout">
                <FaShoppingCart className="me-1" /> Cart ({cartItems.length})
              </Link>
            </li>
          </ul>

          {/* Search */}
          <form className="d-flex me-3">
            <input
              type="text"
              className="form-control rounded-pill border-0 px-3"
              placeholder="Search..."
              style={{ minWidth: "200px", backgroundColor: "#1E293B", color: "white" }}
            />
            <button type="submit" className="btn btn-light rounded-pill ms-2 px-3">
              <FaSearch />
            </button>
          </form>

            {/* Customer Panel */}
            <div className="dropdown me-3">
              <button
                className="btn btn-outline-light rounded-pill fw-semibold dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <FaUserCircle className="me-1" /> 
                {isLoggedIn && !isVendorLoggedIn ? username : 'Customer Panel'}
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                {isLoggedIn && !isVendorLoggedIn ? (
                  <>
                    <li><Link className="dropdown-item" to="/customer/dashboard">Dashboard</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-danger" onClick={logout}>Logout</button></li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/customer/register">Register</Link></li>
                    <li><Link className="dropdown-item" to="/customer/login">Login</Link></li>
                  </>
                )}
              </ul>
            </div>

            {/* Seller Panel */}
            <div className="dropdown">
              <button className="btn btn-outline-light rounded-pill fw-semibold dropdown-toggle" data-bs-toggle="dropdown">
                {isVendorLoggedIn ? `${username} (Vendor)` : "Seller Panel"}
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                {isVendorLoggedIn ? (
                  <>
                    <li><Link className="dropdown-item" to="/seller/dashboard">Dashboard</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-danger" onClick={logout}>Logout</button></li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/seller/register">Register</Link></li>
                    <li><Link className="dropdown-item" to="/seller/login">Login</Link></li>
                  </>
                )}
              </ul>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
