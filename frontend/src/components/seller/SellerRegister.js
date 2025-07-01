import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SellerRegister() {
  const BASE = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE}/api/vendor/signup/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Registered as Seller Successfully!");
        setFormData({ username: "", email: "", password: "", address: "" });
        navigate("/vendor/login");
      } else {
        const errorData = await response.json();
        alert("❌ " + JSON.stringify(errorData));
      }
    } catch (err) {
      console.error("Registration error:", err.message);
      alert("❌ Registration failed.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "calc(90vh - 100px)", padding: "20px" }}>
      <div className="card shadow p-4 border-0" style={{ backgroundColor: "#111827", width: "100%", maxWidth: "500px" }}>
        <h3 className="text-center mb-3 text-warning fw-bold">Seller Registration</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white fw-semibold">Username</label>
            <input type="text" className="form-control rounded-3" name="username" value={formData.username} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white fw-semibold">Email</label>
            <input type="email" className="form-control rounded-3" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white fw-semibold">Password</label>
            <input type="password" className="form-control rounded-3" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label text-white fw-semibold">Address</label>
            <input type="text" className="form-control rounded-3" name="address" value={formData.address} onChange={handleChange} required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-warning fw-bold">Register as Seller</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SellerRegister;
