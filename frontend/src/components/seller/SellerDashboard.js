import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import { AuthContext } from "../contexts/AuthContext";

function SellerDashboard() {
  const [stats, setStats] = useState({
    total_products: 0,
    total_orders: 0,
    total_customers: 0,
  });
  const [products, setProducts] = useState([]);
  const { refreshAccessToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      const access = await refreshAccessToken();
      if (!access) return;

      try {
        // Fetch dashboard stats
        const statsRes = await fetch("http://127.0.0.1:8000/api/vendor/dashboard-stats/", {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });

        if (statsRes.ok) {
          const statsData = await statsRes.json();
          setStats(statsData);
        } else {
          console.error("Failed to fetch dashboard stats");
        }

        // Fetch vendor products
        const productsRes = await fetch("http://127.0.0.1:8000/api/vendor/products/", {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        });

        if (productsRes.ok) {
          const productData = await productsRes.json();
          setProducts(productData);
        } else {
          console.error("Failed to fetch vendor products");
        }
      } catch (err) {
        console.error("Error fetching dashboard data", err);
      }
    };

    fetchData();
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
      console.error("Error deleting product", err);
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
          <div className="row mb-3">
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h5>Total Products</h5>
                  <h4>{stats.total_products}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h5>Total Orders</h5>
                  <h4>{stats.total_orders}</h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h5>Total Customers</h5>
                  <h4>{stats.total_customers}</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex mt-4 justify-content-between text-white align-items-center mb-3">
            <h4>All Products</h4>
            <Link to="/seller/add-products" className="btn btn-primary">
              <i className="fa fa-plus-circle"></i> Add Product
            </Link>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered text-white">
              <thead className="bg-dark">
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="4" className="text-center">No products found.</td>
                  </tr>
                ) : (
                  products.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.title}</td>
                      <td>₹{product.price}</td>
                      <td>
                        <Link to={`/product/${product.id}`} className="btn btn-info btn-sm me-1">View</Link>
                        <Link to={`/seller/edit-product/${product.id}`} className="btn btn-warning btn-sm me-1">Edit</Link>
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>Delete</button>
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

export default SellerDashboard;
