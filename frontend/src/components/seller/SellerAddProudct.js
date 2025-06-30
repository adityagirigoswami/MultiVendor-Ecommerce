import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SellerSidebar from "./SellerSidebar";
import { AuthContext } from "../contexts/AuthContext";

function SellerAddProducts() {
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

  // ✅ Fetch categories from backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/categories/")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched categories:", data);
        setCategories(data.results); // ✅ Access the array inside "results"
      })
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
      productForm.append("title", formData.title);
      productForm.append("price", formData.price);
      productForm.append("detail", formData.detail);
      productForm.append("category", formData.category);
      productForm.append("tags", formData.tags);
      productForm.append("demo_url", formData.demo_url);
      if (image) productForm.append("image", image);
      if (file) productForm.append("file", file);

      const res = await fetch("http://127.0.0.1:8000/api/vendor/add-product/", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${access}`,
        },
        body: productForm,
      });

      if (res.ok) {
        setSuccessMsg("✅ Product added successfully!");
        setFormData({
          title: "",
          price: "",
          detail: "",
          category: "",
          tags: "",
          demo_url: "",
        });
        setImage(null);
        setFile(null);
        // Optionally redirect
        // navigate("/seller/products");
      } else {
        const errData = await res.json();
        setError("❌ Failed to add product. " + JSON.stringify(errData));
      }
    } catch (err) {
      console.error("Error adding product", err);
      setError("❌ Something went wrong.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSidebar />
        </div>
        <div className="col-md-8 col-12">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <h4 className="card-header bg-light">Add Product</h4>
              <div className="card-body">
                {error && <p className="text-danger">{error}</p>}
                {successMsg && <p className="text-success">{successMsg}</p>}

                <div className="mb-3">
                  <label htmlFor="category" className="form-label">Category</label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.title}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="price" className="form-label">Price</label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="detail" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="detail"
                    name="detail"
                    rows={5}
                    value={formData.detail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="tags" className="form-label">Tags (comma-separated)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="demo_url" className="form-label">Demo URL</label>
                  <input
                    type="url"
                    className="form-control"
                    id="demo_url"
                    name="demo_url"
                    value={formData.demo_url}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="image" className="form-label">Product Image</label>
                  <input
                    className="form-control"
                    type="file"
                    id="image"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="file" className="form-label">Script File (.zip, .py, etc.)</label>
                  <input
                    className="form-control"
                    type="file"
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">Submit Product</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerAddProducts;
