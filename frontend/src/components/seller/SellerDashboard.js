import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import { AuthContext } from "../contexts/AuthContext";

function SellerDashboard() {
  const [stats, setStats] = useState({
    total_products: 0,
    total_orders: 0,
    total_customers: 0,
  });
  const [products, setProducts] = useState([]);
  const { refreshAccessToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const access = await refreshAccessToken();
      if (!access) return;

      try {
        const statsRes = await fetch("http://127.0.0.1:8000/api/vendor/dashboard-stats/", {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });

        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        }

        const productsRes = await fetch("http://127.0.0.1:8000/api/vendor/products/", {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });

        if (productsRes.ok) {
          const productData = await productsRes.json();
          setProducts(productData);
        }
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    const access = await refreshAccessToken();
    if (!access) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/vendor/products/${productId}/delete/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      if (res.status === 204) {
        alert("Product deleted successfully");
        setProducts(products.filter((p) => p.id !== productId));
      } else {
        alert("Failed to delete product");
      }
    } catch (err) {
      console.error("Error deleting product", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container-fluid px-4 py-4" style={{  minHeight: "100vh", color: "#fff" }}>
      <div className="row">
        <div className="col-md-3 col-12 mb-3">
          <SellerSidebar />
        </div>

        <div className="col-md-9 col-12 mb-3">
          <h2 className="text-center mb-4" style={{ color: "#00e6e6" }}>🚀 Seller Dashboard</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow border-0" style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <h5 className="text-info">Total Products</h5>
                  <h3 className="text-white">{stats.total_products}</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-0" style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <h5 className="text-success">Total Orders</h5>
                  <h3 className="text-white">{stats.total_orders}</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-0" style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <h5 className="text-warning">Total Customers</h5>
                  <h3 className="text-white">{stats.total_customers}</h3>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
