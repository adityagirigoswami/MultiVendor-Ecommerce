import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function SellerLogin() {
  const BASE = process.env.REACT_APP_API_URL;

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      // Step 1: Token login
      const tokenRes = await fetch(`${BASE}/api/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!tokenRes.ok) {
        setErrorMsg("❌ Invalid credentials.");
        setLoading(false);
        return;
      }

      const tokenData = await tokenRes.json();
      localStorage.setItem("access", tokenData.access);
      localStorage.setItem("refresh", tokenData.refresh);
      localStorage.setItem("username", formData.username);

      // Step 2: Vendor role check
      const profileRes = await fetch(`${BASE}/api/vendor/profile/`, {
        headers: {
          Authorization: `Bearer ${tokenData.access}`,
        },
      });

      if (!profileRes.ok) {
        setErrorMsg("❌ You are not registered as a vendor.");
        localStorage.clear();
        logout();
        setLoading(false);
        return;
      }

      login(tokenData.access, formData.username , true);
      navigate("/seller/dashboard");

    } catch (err) {
      console.error("Login error", err);
      setErrorMsg("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(90vh - 100px)", padding: "20px" }} >
      <div className="card shadow-lg border-0 p-4" style={{ backgroundColor: "#111827", width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4 text-warning fw-bold">Vendor Login 🧑‍💻</h3>
        <form onSubmit={handleSubmit}>
          {errorMsg && <p className="text-danger text-center">{errorMsg}</p>}

          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white fw-semibold">Username</label>
            <input
              type="text"
              className="form-control rounded-3"
              id="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white fw-semibold">Password</label>
            <input
              type="password"
              className="form-control rounded-3"
              id="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-warning fw-bold" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <p className="text-center small text-white">
            Don't have a vendor account?{" "}
            <a href="/vendor/register" className="text-decoration-none">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SellerLogin;
