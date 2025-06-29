// import logo from "../logo.svg";
// import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

function Dashboard() {
  return (
    <div className="container-fluid px-4 py-4" style={{ background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)", minHeight: "100vh", color: "#fff" }}>
      <div className="row">
        <div className="col-md-3 col-12 mb-3">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12 mb-3">
          <h2 className="text-center mb-4" style={{ color: "#00e6e6" }}>🌌 Dashboard Overview</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="card shadow border-0" style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <h5 className="text-info">Total Orders</h5>
                  <h3><a href="#" className="text-decoration-none text-white">123</a></h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-0" style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <h5 className="text-warning">Total Wishlist</h5>
                  <h3><a href="#" className="text-decoration-none text-white">56</a></h3>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow border-0" style={{ backgroundColor: "#1f2937", borderRadius: "15px" }}>
                <div className="card-body text-center">
                  <h5 className="text-success">Total Addresses</h5>
                  <h3><a href="#" className="text-decoration-none text-white">6</a></h3>
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

