import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import secureFetch from "../utils/secureFetch";

function Checkout() {
  const BASE = process.env.REACT_APP_API_URL;

  const { cartItems, removeFromCart, isLoggedIn, clearCart } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = async () => {
    try {
      const orderRes = await secureFetch(`${BASE}/api/razorpay/order/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }),
      });

      const orderData = await orderRes.json();

      const options = {
        key: "rzp_test_N8RajnGbmmpb0B",
        amount: orderData.amount,
        currency: orderData.currency,
        name: "My Shop",
        description: "Test Transaction",
        order_id: orderData.id,
        handler: async function (response) {
          alert("✅ Payment Successful!");

          try {
            const storeOrderRes = await secureFetch(`${BASE}/api/place-order/`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ items: cartItems }),
            });

            const orderResult = await storeOrderRes.json();

            if (storeOrderRes.ok) {
              clearCart();
              navigate("/order-confirmation", {
                state: {
                  orderId: orderResult.order_id,
                  itemCount: cartItems.length,
                  totalPrice: totalPrice,
                },
              });
            } else {
              alert("⚠️ Order saving failed: " + orderResult.error);
            }
          } catch (err) {
            alert("⚠️ Failed to save order.");
            console.error("Order error:", err);
          }
        },
        prefill: {
          name: "Aditya",
          email: "aditya@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (err) {
      alert("⚠️ Failed to initiate payment.");
      console.error("Razorpay error:", err);
    }
  };

  return (
    <div className="container my-5">
      <h3 className="mb-4 fw-bold text-center">🛒 Your Cart ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""})</h3>

      {cartItems.length === 0 ? (
        <div className="alert text-center" style={{backgroundColor: "#111827" }}>
          Your cart is empty.
          <div className="mt-3">
            <Link to="/categories" className="btn btn-outline-primary">
              Browse Products
            </Link>
          </div>
        </div>
      ) : (
        <div className="row g-4">
          <div className="col-lg-8">
            {cartItems.map((item, index) => (
              <div className="card shadow-sm mb-3" key={item.id} style={{backgroundColor: "#111827" }}>
                <div className="row g-0">
                  <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <img
                      src={item.image || "https://via.placeholder.com/80"}
                      alt={item.title}
                      className="img-fluid p-2"
                      style={{ maxHeight: "100px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className="card-body">
                      <h5 className="card-title text-white mb-1">{item.title}</h5>
                      <p className="text-warning mb-2">Rs. {item.price}</p>
                      <Link to={`/product/${item.slug}/${item.id}`} className="text-decoration-none text-primary small">
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex align-items-center justify-content-center">
                    <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card shadow">
              <div className="card-body border"style={{backgroundColor: "#111827" }}>
                <h5 className="fw-bold text-white mb-3" >🧾 Summary</h5>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total Items:</span> <span>{cartItems.length}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total Price:</span> <span>Rs. {totalPrice}</span>
                  </li>
                </ul>
                <div className="d-grid mt-4">
                  <button className="btn btn-success mb-2" onClick={handlePlaceOrder}>
                    Place Order
                  </button>
                  <Link to="/categories" className="btn btn-outline-secondary">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
