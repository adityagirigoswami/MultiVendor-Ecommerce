import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import { AuthContext } from "../contexts/AuthContext";

function SellerProduct() {
  const [products, setProducts] = useState([]);
  const { refreshAccessToken, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const access = await refreshAccessToken();

      if (!access) {
        console.warn("Access token is null. Logging out.");
        logout();
        return;
      }

      try {
        const res = await fetch("http://127.0.0.1:8000/api/vendor/products/", {
          headers: { Authorization: `Bearer ${access}` },
        });

        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.warn("Failed to fetch vendor products. Logging out.");
          logout();
        }
      } catch (err) {
        console.error("Error fetching products:", err);
        logout();
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    const access = await refreshAccessToken();
    if (!access) return;

    try {
      const res = await fetch(`http://127.0.0.1:8000/api/vendor/products/${productId}/delete/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${access}`,
        },
      });

      if (res.status === 204) {
        alert("Product deleted successfully");
        setProducts(products.filter((p) => p.id !== productId));
      } else {
        alert("Failed to delete product");
      }
    } catch (err) {
      console.error("Delete failed:", err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-12 mb-2">
              <Link to="/seller/add-products" className="btn btn-primary float-end">
                <i className="fa fa-plus-circle"></i> Add Products
              </Link>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered text-white">
              <thead className="bg-dark">
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">No products found.</td>
                  </tr>
                ) : (
                  products.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>₹{product.price}</td>
                      <td>Published</td>
                      <td>
                        <Link to={`/product/${product.slug}/${product.id}`} className="btn btn-info btn-sm me-1">View</Link>
                        <Link to={`/seller/edit-product/${product.id}`} className="btn btn-primary btn-sm me-1">Edit</Link>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(product.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerProduct;
