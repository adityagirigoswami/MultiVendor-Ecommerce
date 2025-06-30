import { Link, useLocation } from "react-router-dom";
// import "./Sidebar.css"; // Reuse the same CSS for glass effect and styling

function SellerSidebar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="sidebar-glass rounded-3 p-3">
      <Link
        to="/seller/dashboard"
        className={`sidebar-link ${isActive("/seller/dashboard") ? "active" : ""}`}
      >
        🧭 Dashboard
      </Link>
      <Link
        to="/seller/products"
        className={`sidebar-link ${isActive("/seller/products") ? "active" : ""}`}
      >
        🛍️ Products
      </Link>
      <Link
        to="/seller/add-products"
        className={`sidebar-link ${isActive("/seller/add-products") ? "active" : ""}`}
      >
        ➕ Add Product
      </Link>
      <Link
        // to="/seller/orders"
        className={`sidebar-link ${isActive("/seller/orders") ? "active" : ""}`}
      >
        📦 Orders
      </Link>
      <Link
        // to="/seller/customers"
        className={`sidebar-link ${isActive("/seller/customers") ? "active" : ""}`}
      >
        👥 Customers
      </Link>
      <Link
        // to="/seller/reports"
        className={`sidebar-link ${isActive("/seller/reports") ? "active" : ""}`}
      >
        📊 Reports
      </Link>
      <Link
        // to="/seller/profile"
        className={`sidebar-link ${isActive("/seller/profile") ? "active" : ""}`}
      >
        👤 Profile
      </Link>
      <Link
        // to="/seller/change-password"
        className={`sidebar-link ${isActive("/seller/change-password") ? "active" : ""}`}
      >
        🔒 Change Password
      </Link>
      <Link
        // to="/seller/logout"
        className="sidebar-link text-danger fw-bold"
      >
        🚪 Logout
      </Link>
    </div>
  );
}

export default SellerSidebar;
