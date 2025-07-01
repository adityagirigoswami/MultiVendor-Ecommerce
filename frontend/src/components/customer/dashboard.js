import { useEffect, useState, useContext } from "react";
import Sidebar from "./sidebar";
import { AuthContext } from "../contexts/AuthContext";

function Dashboard() {
  const BASE = process.env.REACT_APP_API_URL;

  const [stats, setStats] = useState({
    total_orders: 0,
    total_wishlist: 0,
    total_addresses: 0,
  });
  const { refreshAccessToken, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchCustomerStats = async () => {
      const access = await refreshAccessToken();
      if (!access) {
        logout();
        return;
      }

      try {
        const res = await fetch(`${BASE}/api/customer/dashboard-stats/`, {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });

        if (res.ok) {
          const data = await res.json();
          setStats(data);
        } else {
          console.error("Failed to fetch customer stats");
        }
      } catch (err) {
        console.error("Error fetching customer stats:", err);
      }
    };

    fetchCustomerStats();
  }, []);

  return (
    <div className="container-fluid px-4 py-4" style={{ minHeight: "100vh", color: "#fff" }}>
      <div className="row">
        <div className="col-md-3 col-12 mb-3">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12 mb-3">
          <h2 className="text-center mb-4" style={{ color: "#00e6e6" }}>🌌 Dashboard Overview</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="card shadow border-0" style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <h5 className="text-info">Total Orders</h5>
                  <h3><a href="#" className="text-decoration-none text-white">{stats.total_orders}</a></h3>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow border-0" style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <h5 className="text-warning">Total Wishlist</h5>
                  <h3><a href="#" className="text-decoration-none text-white">{stats.total_wishlist}</a></h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
