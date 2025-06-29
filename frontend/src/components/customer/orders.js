import { useEffect, useState, useContext } from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import secureFetch, { setAuthContext } from "../../utils/secureFetch";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const authContext = useContext(AuthContext);

  useEffect(() => {
    setAuthContext(authContext);
    secureFetch("http://127.0.0.1:8000/api/customer/orders/")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      });
  }, []);

  const handleDownload = async (orderItemId) => {
    try {
      const response = await secureFetch(`http://127.0.0.1:8000/api/download/${orderItemId}/`);
      if (!response.ok) {
        alert("Download failed");
        return;
      }
      const blob = await response.blob();
      const disposition = response.headers.get("Content-Disposition");
      let filename = "file";
      if (disposition) {
        const match = disposition.match(/filename="?([^\"]+)"?/);
        if (match?.[1]) filename = match[1];
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", filename);
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download error:", err);
    }
  };

  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "linear-gradient(to right, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div className="row">
        <div className="col-md-3 mb-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <h2 className="text-center fw-bold mb-4 text-glow">🌌 My Orders</h2>

          {loading ? (
            <div className="text-center my-5">
              <div className="spinner-border text-light" role="status" />
              <p className="mt-2">Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="alert alert-warning text-center fw-semibold bg-dark text-white border-light">
              No orders placed yet.
              <div className="mt-3">
                <Link to="/categories" className="btn btn-outline-info">
                  🚀 Browse Products
                </Link>
              </div>
            </div>
          ) : (
            orders.map((order) => (
              <div className="card bg-dark text-light mb-5 shadow-lg border border-info" key={order.id}>
                <div className="card-header border-bottom border-info d-flex justify-content-between align-items-center">
                  <strong>📦 Order #{order.id}</strong>
                  <span className="small">{new Date(order.Order_time).toLocaleDateString()}</span>
                </div>

                <div className="card-body">
                  {order.order_items.map((item) => (
                    <div
                      className="d-flex border-bottom border-secondary pb-3 mb-3 align-items-center"
                      key={item.id}
                    >
                      <img
                        src={`http://127.0.0.1:8000${item.product.image}`}
                        alt={item.product.title}
                        className="img-thumbnail me-3"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                      <div className="flex-grow-1">
                        <h5 className="mb-1 text-info">{item.product.title}</h5>
                        <p className="mb-1">💰 Rs. {item.product.price}</p>
                        <Link
                          to={`/product/${item.product.slug}/${item.product.id}`}
                          className="text-decoration-none text-warning small"
                        >
                          🔍 View Product
                        </Link>
                      </div>
                      <div>
                        {item.product.file ? (
                          <button
                            className="btn btn-outline-success btn-sm"
                            onClick={() => handleDownload(item.id)}
                          >
                            ⬇️ Download
                          </button>
                        ) : (
                          <span className="text-muted small border px-2 py-1 rounded">
                            No file
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
