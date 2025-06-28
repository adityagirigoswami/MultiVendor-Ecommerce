import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";

function Checkout() {
  const { cartItems, removeFromCart, isLoggedIn ,clearCart  } = useContext(AuthContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = async () => {
    const orderRes = await fetch("http://127.0.0.1:8000/api/razorpay/order/", {
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
      
        // Store order in Django
        const storeOrderRes = await fetch("http://127.0.0.1:8000/api/place-order/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("access")}`,
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
      }
      ,
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
