import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import { AuthContext } from "../contexts/AuthContext";

function SellerAddProducts() {
  
  const BASE = process.env.REACT_APP_API_URL;
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    detail: "",
    category: "",
    tags: "",
    demo_url: "",
  });
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { refreshAccessToken } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE}/api/categories/`)
      .then((res) => res.json())
      .then((data) => setCategories(data.results || []))
      .catch((err) => {
        console.error("Failed to load categories", err);
        setCategories([]);
      });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");

    try {
      const access = await refreshAccessToken();
      if (!access) return;

      const productForm = new FormData();
      Object.entries(formData).forEach(([key, val]) => productForm.append(key, val));
      if (image) productForm.append("image", image);
      if (file) productForm.append("file", file);

      const res = await fetch(`${BASE}/api/vendor/add-product/`, {
        method: "POST",
        headers: { Authorization: `Bearer ${access}` },
        body: productForm,
      });

      if (res.ok) {
        setSuccessMsg("✅ Product added successfully!");
        setFormData({ title: "", price: "", detail: "", category: "", tags: "", demo_url: "" });
        setImage(null);
        setFile(null);
      } else {
        const errData = await res.json();
        setError("❌ Failed: " + JSON.stringify(errData));
      }
    } catch (err) {
      console.error("Error:", err);
      setError("❌ Something went wrong.");
    }
  };

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
        <div className="col-md-9 col-12">
          <h2 className="text-center mb-4" style={{ color: "#00e6e6" }}>
            📦 Add New Product
          </h2>

          <div
            className="glass-card p-4"
            style={{
              backgroundColor: "#1f2937",
              borderRadius: "15px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            }}
          >
            <form onSubmit={handleSubmit}>
              {error && <div className="text-danger mb-2">{error}</div>}
              {successMsg && <div className="text-success mb-2">{successMsg}</div>}

              <div className="mb-3">
                <label htmlFor="category" className="form-label text-white">Category</label>
                <select
                  className="form-select bg-dark text-white border-secondary"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="title" className="form-label text-white">Title</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="price" className="form-label text-white">Price (₹)</label>
                <input
                  type="number"
                  className="form-control bg-dark text-white border-secondary"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="detail" className="form-label text-white">Description</label>
                <textarea
                  className="form-control bg-dark text-white border-secondary"
                  id="detail"
                  name="detail"
                  rows="4"
                  value={formData.detail}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="tags" className="form-label text-white">Tags (comma-separated)</label>
                <input
                  type="text"
                  className="form-control bg-dark text-white border-secondary"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="demo_url" className="form-label text-white">Demo URL</label>
                <input
                  type="url"
                  className="form-control bg-dark text-white border-secondary"
                  id="demo_url"
                  name="demo_url"
                  value={formData.demo_url}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="image" className="form-label text-white">Product Image</label>
                <input
                  className="form-control bg-dark text-white border-secondary"
                  type="file"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="file" className="form-label text-white">Script File (.zip, .py, etc.)</label>
                <input
                  className="form-control bg-dark text-white border-secondary"
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary shadow">
                  🚀 Submit Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerAddProducts;
