import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import { AuthContext } from "../contexts/AuthContext";

function SellerProduct() {
  const [products, setProducts] = useState([]);
  const { refreshAccessToken, logout } = useContext(AuthContext);

  // backend base — change if you deploy elsewhere
  const BACKEND = "http://127.0.0.1:8000";

  useEffect(() => {
    (async () => {
      const access = await refreshAccessToken();
      if (!access) return logout();

      try {
        const res = await fetch(`${BACKEND}/api/vendor/products/`, {
          headers: { Authorization: `Bearer ${access}` },
        });
        res.ok ? setProducts(await res.json()) : logout();
      } catch (e) {
        console.error(e);
        logout();
      }
    })();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this product?")) return;
    const access = await refreshAccessToken();
    if (!access) return;

    try {
      const res = await fetch(`${BACKEND}/api/vendor/products/${id}/delete/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${access}` },
      });
      res.status === 204
        ? setProducts(products.filter((p) => p.id !== id))
        : alert("Failed to delete");
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
    }
  };

  const getImageUrl = (imgPath) =>
    imgPath.startsWith("http") ? imgPath : `${BACKEND}${imgPath}`;

  return (
    <div
      className="container-fluid px-4 py-4"
      style={{
        minHeight: "100vh",
        color: "#fff",
      }}
    >
      <div className="row">
        <div className="col-md-3 col-12 mb-3">
          <SellerSidebar />
        </div>

        <div className="col-md-9 col-12 mb-3">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 style={{ color: "#00e6e6" }}>🧾 Manage Products</h2>
            <Link to="/seller/add-products" className="btn btn-primary shadow">
              <i className="fa fa-plus-circle me-1" /> Add Product
            </Link>
          </div>

          {products.length === 0 ? (
            <p className="text-center">No products found.</p>
          ) : (
            <div className="d-flex flex-column gap-3">
              {products.map((p) => (
                <div
                  key={p.id}
                  className="card shadow border-0"
                  style={{
                    backgroundColor: "#1f2937",
                    borderRadius: "15px",
                    color: "#fff",
                  }}
                >
                  <div className="card-body d-flex align-items-center">
                    {/* image */}
                    <img
                      src={getImageUrl(p.image)}
                      alt={p.title}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "10px",
                        marginRight: "20px",
                      }}
                    />

                    {/* info */}
                    <div className="flex-grow-1">
                      <h5 className="mb-1">{p.title}</h5>
                      <p className="mb-0 text-info">₹{p.price}</p>
                    </div>

                    {/* actions */}
                    <div className="text-end">
                      <Link
                        to={`/product/${p.slug}/${p.id}`}
                        className="btn btn-info btn-sm me-2"
                      >
                        View
                      </Link>
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SellerProduct;
