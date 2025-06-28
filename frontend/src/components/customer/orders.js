import { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/customer/orders/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    })
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
                          <button className="btn btn-primary btn-sm" disabled>
                            Download
                          </button>
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
