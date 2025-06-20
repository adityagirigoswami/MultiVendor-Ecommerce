// Logout.js
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

function Logout() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout(); // Call context logout
    // Optional delay if needed for smooth navigation
    navigate("/customer/login/");
    
  }, [logout, navigate]);

  return null;
}

export default Logout;
