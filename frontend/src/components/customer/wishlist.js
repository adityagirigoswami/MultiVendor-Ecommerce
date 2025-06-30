import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import { AuthContext } from "../contexts/AuthContext";
import secureFetch, { setAuthContext } from "../../utils/secureFetch";


function Wishlist() {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);
  const authContext = useContext(AuthContext);
  const baseUrl = "http://127.0.0.1:8000/api";



  useEffect(() => {
    setAuthContext(authContext);
    secureFetch(`${baseUrl}/wishlist/`)
      .then((res) => res.json())
      .then((data) => {
        setWishlist(data.results || data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching wishlist:", error);
        setLoading(false);
      });
  }, []);

  const handleRemove = async (wishlistId) => {
    try {
      const response = await secureFetch(`${baseUrl}/wishlist/${wishlistId}/`, {
        method: "DELETE",
      });

      if (response.ok || response.status === 204) {
        setWishlist((prev) => prev.filter((item) => item.id !== wishlistId));
      } else {
        console.error("Failed to remove item from wishlist");
      }
    } catch (error) {
      console.error("Error removing wishlist item:", error);
    }
  };

  return (
    <div
      className="container-fluid py-4"
      style={{
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <div className="row">
        <div className="col-md-3 mb-3">
          <Sidebar />
        </div>

        <div className="col-md-9">
          <h2 className="text-center fw-bold mb-4 text-glow">💖 My Wishlist</h2>

          {loading ? (
            <div className="text-center my-5">
              <div className="spinner-border text-light" role="status" />
              <p className="mt-2">Loading wishlist...</p>
            </div>
          ) : wishlist.length === 0 ? (
            <div className="alert alert-warning text-center fw-semibold bg-dark text-white border-light">
              No products in your wishlist.
              <div className="mt-3">
                <Link to="/categories" className="btn btn-outline-info">
                  🚀 Explore Products
                </Link>
              </div>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                className="card bg-dark text-light mb-4 shadow-lg"
                key={item.id}
              >
                <div className="card-header border-bottom border-warning d-flex justify-content-between align-items-center">
                  <strong>⭐ {item.product.title}</strong>
                  <span className="small">
                    Added on: {new Date(item.added_on).toLocaleDateString()}
                  </span>
                </div>

                <div className="card-body">
                  <div className="d-flex border-bottom border-secondary pb-3 mb-3 align-items-center">
                    <img
                      src={item.product.image}
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
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleRemove(item.id)}
                      >
                        ❌ Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
