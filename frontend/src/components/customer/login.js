import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const BASE = process.env.REACT_APP_API_URL;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login, logout } = useContext(AuthContext); // ✅ use logout if role mismatch

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      // Step 1: Get tokens
      const response = await axios.post(`${BASE}/api/login/`, {
        username,
        password,
      });

      const { access, refresh } = response.data;

      // Step 2: Verify if this is a customer
      const profileRes = await axios.get(`${BASE}/api/customer/profile/`, {
        headers: { Authorization: `Bearer ${access}` },
      });

      // Step 3: Store tokens and update context
      localStorage.setItem("access", access);
      localStorage.setItem("refresh", refresh);
      localStorage.setItem("username", username);

      login(access, username);
      alert("Login Successful!");

      navigate("/customer/dashboard");

    } catch (error) {
      console.error("Login error", error);
      if (error.response?.status === 403) {
        setErrorMsg("❌ You are not registered as a customer.");
        logout(); // ✅ clear localStorage
      } else {
        setErrorMsg("❌ Invalid username or password.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "calc(90vh - 100px)", padding: "20px" }} >
      <div className="card shadow-lg border-0 p-4" style={{ backgroundColor: "#111827", width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4 text-warning fw-bold">Welcome Back 👋</h3>
        <form onSubmit={handleSubmit}>
          {errorMsg && <p className="text-danger text-center">{errorMsg}</p>}

          <div className="mb-3">
            <label htmlFor="username" className="form-label text-white fw-semibold">Username</label>
            <input
              type="text"
              className="form-control rounded-3"
              id="username"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            Don’t have an account?{" "}
            <a href="/customer/register" className="text-decoration-none">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
