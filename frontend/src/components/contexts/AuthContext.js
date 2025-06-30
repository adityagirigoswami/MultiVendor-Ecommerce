import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(() => !!localStorage.getItem("access"));
  const [isVendorLoggedIn, setIsVendorLoggedIn] = useState(() => localStorage.getItem("is_vendor") === "true");
  const [username, setUsername] = useState(() => localStorage.getItem("username") || "");
  const [cartItems, setCartItems] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);

  // Restore state on reload
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("access"));
    setIsVendorLoggedIn(localStorage.getItem("is_vendor") === "true");
    setUsername(localStorage.getItem("username") || "");
    setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  const login = (access, username, isVendor = false) => {
    localStorage.setItem("access", access);
    localStorage.setItem("username", username);
    if (isVendor) {
      localStorage.setItem("is_vendor", "true");
      setIsVendorLoggedIn(true);
    } else {
      localStorage.removeItem("is_vendor");
      setIsLoggedIn(true);
    }
    setUsername(username);
  };

  const logout = () => {
    const isVendor = localStorage.getItem("is_vendor") === "true";

    localStorage.clear();
    setIsLoggedIn(false);
    setIsVendorLoggedIn(false);
    setUsername("");
    setCartItems([]);

    if (isVendor) {
      navigate("/seller/login");
    } else {
      navigate("/customer/login");
    }
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const addToCart = (product) => {
    const updated = [...cartItems, product];
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeFromCart = (productId) => {
    const updated = cartItems.filter((item) => item.id !== productId);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // ✅ Safe refresh
  const refreshAccessToken = async () => {
    const refresh = localStorage.getItem("refresh");
    if (!refresh) {
      console.warn("No refresh token.");
      return null;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ refresh }),
      });

      if (!response.ok) {
        console.warn("Refresh token invalid.");
        return null;
      }

      const data = await response.json();
      localStorage.setItem("access", data.access);
      setIsLoggedIn(true);
      return data.access;
    } catch (err) {
      console.error("Token refresh failed", err);
      return null;
    }
  };
  const addToWishlist = async (productId) => {
    const access = localStorage.getItem("access");
    if (!access) return;
  
    await fetch("http://127.0.0.1:8000/api/wishlist/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access}`,
      },
      body: JSON.stringify({ product: productId }),
    });
  };
  
  const removeFromWishlist = async (wishlistId) => {
    const access = localStorage.getItem("access");
    if (!access) return;
  
    await fetch(`http://127.0.0.1:8000/api/wishlist/${wishlistId}/`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
  };
  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isVendorLoggedIn,
        username,
        login,
        logout,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        refreshAccessToken,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
