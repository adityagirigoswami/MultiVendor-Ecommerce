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
    // ✅ Set context for token refresh inside secureFetch

    secureFetch("http://127.0.0.1:8000/api/customer/orders/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
        const errorText = await response.text();
        alert("Download failed");
        console.error("Server error:", errorText);
        return;
      }

      const blob = await response.blob();
      const disposition = response.headers.get("Content-Disposition");
      console.log("🔎 Header:", disposition);

      let filename = "downloaded_file";
      if (disposition) {
        const filenameMatch = disposition.match(/filename="?([^"]+)"?/);
        if (filenameMatch?.[1]) {
          filename = filenameMatch[1];
        }
      }

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.setAttribute("download", filename);
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <Sidebar />
        </div>

        <div className="col-md-9 col-12">
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status"></div>
              <p>Loading orders...</p>
            </div>
          ) : orders.length === 0 ? (
            <div className="alert alert-warning text-center fw-semibold">
              No orders yet.
              <div className="mt-3">
                <Link to="/categories" className="btn btn-primary">
                  Browse Products
                </Link>
              </div>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order, orderIndex) =>
                    order.order_items.map((item, itemIndex) => (
                      <tr key={`${order.id}-${itemIndex}`}>
                        <td>{orderIndex + 1}</td>
                        <td>
                          <Link to={`/product/${item.product.slug}/${item.product.id}`}>
                            <img
                              src={`http://127.0.0.1:8000${item.product.image}`}
                              alt={item.product.title}
                              className="img-thumbnail"
                              width="80"
                            />
                            <p>{item.product.title}</p>
                          </Link>
                        </td>
                        <td>Rs. {item.product.price}</td>
                        <td>
                          <span className="text-secondary">
                            <i className="fa fa-spin fa-spinner"></i> Processing
                          </span>
                        </td>
                        <td>
                          {item.product.file ? (
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => handleDownload(item.id)}
                            >
                              Download
                            </button>
                          ) : (
                            <div className="text-dark bg-light border border-secondary rounded px-2 py-1 d-inline-block">
                              No file
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Orders;
