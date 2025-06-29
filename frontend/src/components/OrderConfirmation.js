import { useLocation, Link } from "react-router-dom";

function OrderConfirmation() {
  const location = useLocation();
  const { orderId, itemCount, totalPrice } = location.state || {};

  if (!orderId) {
    return (
      <div className="container py-5 text-center">
        <div className="alert alert-danger shadow-sm">
          <h4 className="mb-3">🚫 No Order Found</h4>
          <Link to="/categories" className="btn btn-outline-primary">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">
          <h2 className="text-success mb-3">🎉 Order Confirmed!</h2>
          <p className="fs-5 mb-2">
            Your order <strong className="text-dark">#{orderId}</strong> has been placed.
          </p>
          <p className="fs-5 mb-2">
            You ordered <strong>{itemCount}</strong> item{itemCount > 1 ? "s" : ""}.
          </p>
          <p className="fs-5 mb-4">
            Total amount: <strong className="text-primary">₹{totalPrice}</strong>
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link to="/categories" className="btn btn-outline-primary">
              Continue Shopping
            </Link>
            <Link to="/customer/orders" className="btn btn-success">
              Collect Order
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation;
