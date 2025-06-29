import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css"; // Create a new Sidebar.css

function Sidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar-glass rounded-3 p-3">
      <Link
        to="/customer/dashboard"
        className={`sidebar-link ${isActive("/customer/dashboard") ? "active" : ""}`}
      >
        🧭 Dashboard
      </Link>
      <Link
        to="/customer/orders"
        className={`sidebar-link ${isActive("/customer/orders") ? "active" : ""}`}
      >
        📦 Orders
      </Link>
      <Link
        to="/customer/wishlist"
        className={`sidebar-link ${isActive("/customer/wishlist") ? "active" : ""}`}
      >
        💖 Wishlist
      </Link>
      <Link
        to="/customer/profile"
        className={`sidebar-link ${isActive("/customer/profile") ? "active" : ""}`}
      >
        👤 Profile
      </Link>
      <Link
        to="/customer/change-password"
        className={`sidebar-link ${isActive("/customer/change-password") ? "active" : ""}`}
      >
        🔒 Change Password
      </Link>
      <Link
        to="/customer/address-list"
        className={`sidebar-link ${isActive("/customer/address-list") ? "active" : ""}`}
      >
        🏠 Addresses
      </Link>
      <Link
        to="/customer/logout"
        className="sidebar-link text-danger fw-bold"
      >
        🚪 Logout
      </Link>
    </div>
  );
}

export default Sidebar;
