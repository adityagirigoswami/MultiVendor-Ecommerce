import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        username,
        password,
      });

      const { access, refresh } = response.data;

      // Save tokens in localStorage or context
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      // Optionally pass to context
      login(access, username);

      alert("Login Successful!");
      navigate("/customer/dashboard");
    } catch (error) {
      console.error("Login error", error);
      setErrorMsg("Invalid username or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center "
      style={{ minHeight: "calc(90vh - 100px)", padding: "20px" }} >
      <div className="card shadow-lg border-0 p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Welcome Back 👋</h3>
        <form onSubmit={handleSubmit}>
          {errorMsg && <p className="text-danger text-center">{errorMsg}</p>}

          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">Username</label>
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
            <label htmlFor="password" className="form-label fw-semibold">Password</label>
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
            <button type="submit" className="btn btn-primary fw-bold" disabled={loading}>
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

          <p className="text-center text-muted small">
            Don’t have an account? <a href="/customer/register" className="text-decoration-none">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
