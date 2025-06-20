import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

function Checkout() {
  const { cartItems, removeFromCart, isLoggedIn ,clearCart  } = useContext(AuthContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem("access");
    if (!token) {
      alert("Login first!");
      return navigate("/customer/login");
    }

    try {
      // 1. Create Order
      const orderRes = await fetch("http://127.0.0.1:8000/api/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      const orderData = await orderRes.json();
      if (!orderRes.ok) {
        throw new Error(`Order creation failed: ${JSON.stringify(orderData)}`);
      }

      const orderId = orderData.id;

      // 2. Add OrderItems for each cart item
      let allSuccess = true;
      for (const item of cartItems) {
        const itemRes = await fetch(
          `http://127.0.0.1:8000/api/order-items/${orderId}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              product: item.id,
            }),
          }
        );

        if (!itemRes.ok) {
          const itemErr = await itemRes.text();
          console.error("Failed to add item:", item.title, itemErr);
          allSuccess = false;
        }
      }

      if (allSuccess) {
        alert("✅ Order placed successfully!");
        clearCart();  // <-- Empty the cart
        // navigate("/thank-you");
      }
      
      else {
        alert("⚠️ Order placed but some items failed to add.");
      }
    } catch (err) {
      console.error("Order failed:", err);
      alert("❌ Order failed: " + err.message);
    }
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-4">All Items ({cartItems.length})</h3>
      {cartItems.length === 0 ? (
        <div className="alert alert-warning text-center fw-semibold">
          🛒 Your cart is empty.
          <div className="mt-3">
            <Link to="/categories" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8 col-12">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>
                        <Link to={`/product/${item.slug}/${item.id}`}>
                          <img
                            className="img-thumbnail"
                            width="80"
                            src={item.image || "https://via.placeholder.com/80"}
                            alt={item.title}
                          />
                          <p>{item.title}</p>
                        </Link>
                      </td>
                      <td>Rs. {item.price}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Total</th>
                    <th>Rs. {totalPrice}</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td colSpan="4" align="center">
                      <Link to="/categories" className="btn btn-secondary">
                        Continue Shopping
                      </Link>
                      <button
                        className="btn btn-success ms-1"
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
