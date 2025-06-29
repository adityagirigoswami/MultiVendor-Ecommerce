import { useLocation, Link } from "react-router-dom";

function OrderConfirmation() {
  const location = useLocation();
  const { orderId, itemCount, totalPrice } = location.state || {};

  if (!orderId) {
    return (
      <div className="container mt-4 text-center">
        <h3>🚫 No order found</h3>
        <Link to="/categories" className="btn btn-primary mt-3">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4 text-center">
      <h2 className="text-success">🎉 Order Placed Successfully!</h2>
      <p className="mt-3 fs-5">
        Your order <strong>#{orderId}</strong> has been placed with{" "}
        <strong>{itemCount}</strong> item{itemCount > 1 ? "s" : ""}.
      </p>
      <p className="fs-5">Total: <strong>Rs. {totalPrice}</strong></p>
      <div className="mt-4">
        <Link to="/categories" className="btn btn-primary">
          Continue Shopping
        </Link>
        <Link to="/customer/orders" className="btn btn-outline-success ms-2">
          Collect the Order
        </Link>
      </div>
    </div>
  );
}

export default OrderConfirmation;
