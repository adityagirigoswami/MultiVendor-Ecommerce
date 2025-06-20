import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate(); // 👈 useNavigate hook
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    mobile: "",
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
      await axios.post("http://localhost:8000/api/customer/register/", formData);
      alert("Registration successful!");
      navigate("/customer/login"); // 👈 redirect to login page
    } catch (err) {
      console.error("Registration error:", err.response?.data || err.message);
      alert("Registration failed.");
    }
  };




  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "calc(90vh - 100px)", padding: "20px" }}>
      <div className="card shadow p-4 border-0" style={{ width: "100%", maxWidth: "500px" }}>
        <h3 className="text-center mb-3 text-success fw-bold">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label fw-semibold">First Name</label>
            <input type="text" className="form-control rounded-3" name="first_name" value={formData.first_name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="last_name" className="form-label fw-semibold">Last Name</label>
            <input type="text" className="form-control rounded-3" name="last_name" value={formData.last_name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">Username</label>
            <input type="text" className="form-control rounded-3" name="username" value={formData.username} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">Email</label>
            <input type="email" className="form-control rounded-3" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
            <input type="password" className="form-control rounded-3" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label fw-semibold">Mobile</label>
            <input type="text" className="form-control rounded-3" name="mobile" value={formData.mobile} onChange={handleChange} required />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-success fw-bold">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
